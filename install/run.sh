#!/bin/bash
set -e

# ==========================
# 1. Resolve paths first
# ==========================
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

# ==========================
# 2. Setup logging
# ==========================
LOGFILE="$REPO_DIR/tmp/install_log_$(date +"%Y-%m-%d_%H-%M-%S").log"
exec > >(tee -a "$LOGFILE") 2>&1
echo "Log saving to: $LOGFILE"

# ==========================
# 3. System Update & Sudo Auth
# ==========================
echo "Please enter your password for the installation process." > /dev/tty
sudo -k
sudo -v
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

sudo pacman -Syu

clear

# ==========================
# 4. Installations (Yay, Core, Hyprland, cachy(optional) )
# ==========================
chmod +x "$SCRIPT_DIR/yay.sh"
"$SCRIPT_DIR/yay.sh"

chmod +x "$SCRIPT_DIR/cachy.sh"
"$SCRIPT_DIR/cachy.sh"

chmod +x "$SCRIPT_DIR/packages.sh"
"$SCRIPT_DIR/packages.sh"

chmod +x "$SCRIPT_DIR/hypr.sh"
"$SCRIPT_DIR/hypr.sh"

# ==========================
# 5. Configs & Services
# ==========================
chmod +x "$SCRIPT_DIR/stow.sh"
"$SCRIPT_DIR/stow.sh"

chmod +x "$SCRIPT_DIR/services.sh"
"$SCRIPT_DIR/services.sh"

# ==========================
# 6. Nvidia Optional Setup
# ==========================
chmod +x "$SCRIPT_DIR/nvidia.sh"
"$SCRIPT_DIR/nvidia.sh"

# ==========================
# 8. Misc Setup (Yazi plugins, Colors, User Dirs, Rofi)
# ==========================
echo "Installing Yazi plugins..."
ya pkg install || true
echo "✨ Yazi plugins installed ✨"

echo "🎨 Generating initial system colors..."
touch ~/dotfiles/configs/hypr/.config/hypr/colors.lua
matugen image ~/dotfiles/media/wallpapers/wallpaper13.png > /dev/null 2>&1 || true
echo "✨ Colors generated ✨"

echo "Generating user directories..."
xdg-user-dirs-update
echo "✨ User directories created ✨"

echo "Hiding cluttered apps from Rofi..."
mkdir -p "$HOME/.local/share/applications"

hidden_apps=(
    "bssh" "bvnc" "avahi-discover" "rofi-theme-selector"
    "thunar-bulk-rename" "thunar-settings" "wiremix" "cmake-gui"
    "org.gnupg.pinentry-qt" "xdg-desktop-portal-gdk" "xgps"
    "xgpsspeed" "qv4l2" "qvidcap" "lstopo"
)

for app in "${hidden_apps[@]}"; do
    global_file="/usr/share/applications/${app}.desktop"
    local_file="$HOME/.local/share/applications/${app}.desktop"

    if [ -f "$global_file" ]; then
        cp "$global_file" "$local_file"
        if ! grep -q "NoDisplay=true" "$local_file"; then
            echo "NoDisplay=true" >> "$local_file"
            echo "  Successfully hid: $app"
        fi
    fi
done

echo "-----------------------------------------------------------------------------------------------------"
echo "✨ All packages installed successfully and configs linked, please reboot or log out and log back in ✨"
echo "-----------------------------------------------------------------------------------------------------"

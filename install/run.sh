#!/bin/bash

# ==========================
# Root check
# ==========================
if [ "$EUID" -eq 0 ]; then
  echo "❌ Error: Do not run this script as root! Run it as your normal user."
  exit 1
fi

# ==========================
# Authenticate upfront and keep sudo alive
# ==========================
echo "Please enter your password for the installation process." > /dev/tty
sudo -k
sudo -v
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

# Dynamically find script and repo paths
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"

# ==========================
# logs the entire script and saves to the repo directory
# ==========================
LOGFILE="$REPO_DIR/install_log_$(date +"%Y-%m-%d_%H-%M-%S").log"
exec > >(tee -a "$LOGFILE") 2>&1
echo "Log saving to: $LOGFILE"

# ==========================
# clears before starting, quits if an error occurs
# ==========================
clear
set -e

# ==========================
# installs yay if not already installed
# ==========================

chmod +x "$SCRIPT_DIR/yay.sh"
"$SCRIPT_DIR/yay.sh"

# ==========================
# Install core packages
# ==========================

chmod +x "$SCRIPT_DIR/packages.sh"
"$SCRIPT_DIR/packages.sh"

# ==========================
# installs hypr packages
# ==========================

chmod +x "$SCRIPT_DIR/hypr.sh"
"$SCRIPT_DIR/hypr.sh"

# ==========================
# symlink configs
# ==========================

chmod +x "$SCRIPT_DIR/stow.sh"
"$SCRIPT_DIR/stow.sh"

# ==========================
# Enable services
# ==========================

chmod +x "$SCRIPT_DIR/services.sh"
"$SCRIPT_DIR/services.sh"

# ==========================
# misc
# ==========================
echo "Installing Yazi plugins..."
ya pkg install
echo "✨ Yazi plugins installed ✨"

echo "🎨 Generating initial system colors and setting wallpaper..."
noctalia msg wallpaper-random
echo "✨ Colors and wallpapers generated ✨"

echo "Generating user directories..."
xdg-user-dirs-update
echo "✨ User directories created ✨"

# ====================================================
#              HIDE UNWANTED APPS IN ROFI
# ====================================================
echo "Hiding cluttered apps from Rofi..."

# 1. Ensure the local applications directory exists
mkdir -p "$HOME/.local/share/applications"

# 2. Define the exact names of the files you want to hide (without .desktop)
hidden_apps=(
    "bssh"
    "bvnc"
    "avahi-discover"
    "rofi-theme-selector"
    "thunar-bulk-rename"
    "thunar-settings"
    "wiremix"
    "cmake-gui"
    "org.gnupg.pinentry-qt"
    "xdg-desktop-portal-gdk"
    "xgps"
    "xgpsspeed"
    "qv4l2"
    "qvidcap"
    "lstopo"
)

# 3. Loop through the list, copy them locally, and append the hidden flag
for app in "${hidden_apps[@]}"; do
    global_file="/usr/share/applications/${app}.desktop"
    local_file="$HOME/.local/share/applications/${app}.desktop"

    # Only attempt to hide it if the application is actually installed globally
    if [ -f "$global_file" ]; then
        cp "$global_file" "$local_file"

        # Check if we already added NoDisplay so we don't spam the file on re-runs
        if ! grep -q "NoDisplay=true" "$local_file"; then
            echo "NoDisplay=true" >> "$local_file"
            echo "  Successfully hid: $app"
        fi
    fi
done


echo "-----------------------------------------------------------------------------------------------------"
echo "✨ All packages installed successfully and configs linked, please reboot or log out and log back in ✨"
echo "-----------------------------------------------------------------------------------------------------"

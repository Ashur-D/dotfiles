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
# System Update
# ==========================
read -p "Would you like to update your system? (y/n): " answer
if [[ "$answer" =~ ^[Yy]$ ]]; then
  echo "Updating system..."
  if ! sudo pacman -Syu --noconfirm; then
      echo "❌ System update failed! Please fix your pacman mirrors/keys and try again."
      exit 1
  fi
else
  echo "Skipping system update."
fi

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

echo "Installing Yazi plugins..."
ya pkg install

# ==========================
# Enable services
# ==========================

chmod +x "$SCRIPT_DIR/services.sh"
"$SCRIPT_DIR/services.sh"

# ==========================
# Optional: Install Nvidia packages
# ==========================

# chmod +x "$SCRIPT_DIR/nvidia.sh"
#"$SCRIPT_DIR/nvidia.sh"

# ------------------------------------------------------
# Generate initial Matugen colors for first boot
# ------------------------------------------------------
echo "🎨 Generating initial system colors..."

# We use wallpaper13.png as the default since we know it exists in your repo
DEFAULT_WALL="$HOME/.config/wallpapers/wallpaper13.png"

# Run Matugen silently in the background
matugen image -m dark -t scheme-tonal-spot "$DEFAULT_WALL" > /dev/null 2>&1

echo "✅ Colors generated!"

echo "-----------------------------------------------------------------------------------------------------"
echo "✨ All packages installed successfully and configs linked, please reboot or log out and log back in!"
echo "-----------------------------------------------------------------------------------------------------"

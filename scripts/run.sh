#!/bin/bash

# ==========================
# Authenticate upfront and keep sudo alive
# ==========================

# Print directly to the terminal to avoid being delayed by the 'tee' pipe
echo "Please enter your password for the installation process." > /dev/tty

# Invalidate the user's cached credentials to force a prompt
sudo -k

# Ask for the password and validate it
sudo -v

# Keep-alive: update existing `sudo` time stamp until the script has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# ==========================
# logs the entire script and saves to downloads
# ==========================

LOGFILE=~/Downloads/install_log_$(date +"%Y-%m-%d_%H-%M-%S").log
exec > >(tee -a "$LOGFILE") 2>&1
echo "Log saving to: $LOGFILE "

# ==========================
# clears before starting, quits if an error occurs and updates the system
# ==========================

clear
set -e

read -p "Would you like to update your system? (y/n): " answer
if [[ "$answer" =~ ^[Yy]$ ]]; then
  sudo pacman -Syu
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
# Optional: Install Nvidia packages
# ==========================

# chmod +x "$SCRIPT_DIR/nvidia.sh"
#"$SCRIPT_DIR/nvidia.sh"

# ==========================
# move configs
# ==========================

chmod +x "$SCRIPT_DIR/config.sh"
"$SCRIPT_DIR/config.sh"

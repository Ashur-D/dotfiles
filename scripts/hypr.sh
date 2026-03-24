#!/bin/bash

# ==========================
# Install hypr packges
# ==========================

# List of packages to install
packages=(
    hyprland # hyprland!
    hyprcursor # cursor
    hyprlock # lock screen
    hyprsunset # warm light
    hypridle # idler
    hyprpolkitagent # authentication
    xdg-desktop-portal-hyprland #  xdg-desktop-portal backend for hyprland
    hyprtoolkit #  GUI toolkit
    hyprshutdown # shutdown and restart tool, will be used with rofi
)

# Check for yay
if ! command -v yay &>/dev/null; then
  echo "Error: 'yay' AUR helper is not installed. Please install yay and rerun this script."
  exit 1
fi

# Array to keep track of any packages that fail to install
failed_packages=()

for package in "${packages[@]}"; do
  if pacman -Q "$package" &>/dev/null; then
    echo "$package is already installed, skipping."
  else
    echo "Installing $package..."
    if yay -S --noconfirm "$package"; then
      echo "$package installed successfully."
    else
      echo "Failed to install $package."
      failed_packages+=("$package")
    fi
  fi
done

# Report on failed installations
if [ ${#failed_packages[@]} -ne 0 ]; then
  echo "==============================================="
  echo "WARNING: The following needed packages failed to install:"
  for failed in "${failed_packages[@]}"; do
    echo "  - $failed"
  done
  echo "Please check the logs or try installing them manually."
  echo "==============================================="
else
  echo "All needed packages installed successfully!"
fi

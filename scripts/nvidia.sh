#!/bin/bash

# ==========================
# Install nvidia packages
# ==========================


# List of packages to install
packages=(
  egl-wayland-git
  libva-nvidia-driver-git
  lib32-nvidia-utils-git
  nvidia-open-dkms-git
  nvidia-utils-git
)

# Check for yay
if ! command -v yay &>/dev/null; then
  echo "Error: 'yay' AUR helper is not installed. Please install yay and rerun this script."
  exit 1
fi

for package in "${packages[@]}"; do
  if pacman -Q "$package" &>/dev/null; then
    echo "$package is already installed, skipping."
  else
    echo "Installing $package..."
    if yay -S --noconfirm "$package"; then
      echo "$package installed successfully."
    else
      echo "Failed to install $package."
    fi
  fi
done

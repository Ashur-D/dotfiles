#!/bin/bash

# ==========================
# Install packages
# ==========================


# List of packages to install
packages=(
  #Nvidia
  egl-wayland-git
  libva-nvidia-driver-git
  lib32-nvidia-utils-git
  nvidia-open-dkms-git
  nvidia-utils-git
  #terminal
  fastfetch
  eza-git
  fd-git
  zoxide
  starship
  gum-git
  fzf-igt
  #main
  hyprpaper-git
  hyprland-qtutils-git
  hyprcursor-git
  hyprlock-git
  hyprsunset-git
  hypridle-git
  xdg-desktop-portal-hyprland-git
  hyprpolkitagent-git
  qt6-wayland
  qt5-wayland
  ttf-cascadia-mono-nerd
  wireplumber-git
  pipewire-git
  nvim-lazy
  mako-git
  btop
  bottom-git
  waybar-git
  walker-bin
  hyprland
  #pref
  visual-studio-code-bin
  zen-browser-bin
  vesktop-bin
  steam
  yazi
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

#!/bin/bash

# ==========================
# Install needed packages
# ==========================


# List of packages to install
packages=(
    # hyprland
  hyprland
  hyprpaper
  hyprland-qtutils
  hyprcursor
  hyprlock
  hyprsunset
  hypridle
  hyprpolkitagent
  xdg-desktop-portal-hyprland
  #################################################
  kitty-git # terminal
  qt6-wayland
  qt5-wayland
  ttf-cascadia-mono-nerd # font
  wireplumber-git # audio
  pipewire-git # audio
  neovim-git # editor
  mako-git # notifcation deamon
  waybar-git # topbar
  bluetui # bluetooth tui
  impala # wifi tui
  wiremix-git # audio tui
  gpu-screen-recorder # or wl-screenrec
  slurp-git
  wl-clipboard-git
  wl-clip-persist-git
  grim-git
  satty-git
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

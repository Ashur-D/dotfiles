#!/bin/bash

# ==========================
# Install needed packages
# ==========================


# List of packages to install
packages=(
  kitty-git
  #hypr
  hyprland-git
  hyprpaper-git
  #hyprland-qtutils-git
  hyprcursor-git
  hyprlock-git
  hyprsunset-git
  hypridle-git
  #hyprpolkitagent-git
  xdg-desktop-portal-hyprland-git
  #################################################
  qt6-wayland
  qt5-wayland
  ttf-cascadia-mono-nerd
  wireplumber-git
  pipewire-git
  neovim-git 
  mako-git # notifcation deamon
  waybar-git # topbar
  walker-bin # application launcher/dmenu > planning to change to hyprlauncher
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

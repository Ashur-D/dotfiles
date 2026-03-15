#!/bin/bash

# ==========================
# Install needed packages
# ==========================

# List of packages to install
packages=(
    # ======== Desktop UI Components ========
    waybar # topbar
    mako # notifications
    rofi # app launcher
    swayosd # on screen display
    # wlogout # logout menu

    # ======== Core Wayland & System ========
    qt5-wayland # APIs for Wayland
    qt6-wayland # APIs for Wayland
    power-profiles-daemon # power profiles
    # lemurs # tui login manager  # locking me out, will fix later

    # ======== Terminal & Editors ========
    kitty # terminal
    neovim # editor
    gum # shell scripts

    # ======== Screenshot & Clipboard ========
    wl-clipboard # clipboard
    cliphist
    wl-clip-persist
    hyprshot # screenshots
    satty # screenshot + annotater

    # ======== Theming & Fonts ========
    matugen # color generator
    catppuccin-cursors-mocha # cursor
    ttf-cascadia-mono-nerd # font

    # ======== Media Viewers ========
    mpv # media player
    imv # image viewer

    # ======== audio ========
    wireplumber # audio
    pipewire # audio
    pipewire-pulse # audio
    pipewire-audio # audio
    pipewire-alsa # audio
    wiremix # audio tui

    # ======== wifi ========
    impala # wifi tui
    iwd # wifi

    # # ======== bluetooth ========
    # bluez #bluetooth
    # bluez-utils #bluetooth
    # bluetui #bluetooth

    # ======== terminal/file explorer ========
    fastfetch # system info tool
    yazi # tui file explorer
    nautilus # gui file explorer
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

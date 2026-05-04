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
    hyprshutdown # shutdown and restart tool, will be used with rofi
)

echo "Starting batch installation of hyprland packages..."

# Install EVERYTHING in one single, fast transaction.
# --needed automatically skips already installed packages!
if yay -S --needed --noconfirm "${packages[@]}"; then
    echo "------------------------------------------------------------"
    echo "✨ All hyprland packages installed successfully ✨"
    echo "------------------------------------------------------------"
else
    echo "------------------------------------------------------------"
    echo "❌ WARNING: Some hyprland packages failed to install."
    echo "Please check the terminal output above."
    echo "------------------------------------------------------------"
fi

#!/bin/bash

if ! command -v yay &>/dev/null; then
  echo "Installing yay AUR helper..."
  sudo pacman -S --needed git base-devel --noconfirm

  # Create a safe temporary directory
  WORK_DIR=$(mktemp -d)
  echo "Cloning yay repository to temporary directory..."
  git clone https://aur.archlinux.org/yay.git "$WORK_DIR/yay"

  # Build and install
  cd "$WORK_DIR/yay" || exit
  echo "Building yay..."
  makepkg -si --noconfirm

  # Clean up and return
  cd "$HOME" || exit
  rm -rf "$WORK_DIR"
  echo "yay installed successfully."
else
  echo "yay is already installed."
fi

echo "------------------------------------------------------------"
echo "✨ yay installed successfully!"
echo "------------------------------------------------------------"

#!/bin/bash

# ==========================
# Install optional packages
# ==========================


# List of packages to install
packages=(

    # ======== main ========
    zen-browser-bin
    vesktop-bin
    obsidian
    localsend

    # ======== Gaming ========
    steam
    gamescope

    # ======== dev ========
    git
    lazygit
    zed
    openssh

    # ======== System Monitoring/utility ========
    btop
    bottom
    systemctl-tui
    stacer-bin
    netsonar-bin
    gdu
    ncdu
    auto-cpufreq
    efibootmgr

    # ======== terminal rice ========
    astroterm
    asciinema
    cbonsai
    catnap-git
    stormy-bin
    terminaltexteffects

    # ======== terminal ========
    eza # ls replacment
    fd # alternative to find
    zoxide # smarter cd
    gum # shell scripts
    fzf # fuzzy finder
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

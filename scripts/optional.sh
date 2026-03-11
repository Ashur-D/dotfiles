#!/bin/bash

# ==========================
# Install optional packages
# ==========================


# List of packages to install
packages=(
    git
    zen-browser-bin
    vesktop-bin
    steam
    yazi
    obsidian
    zed
    localsend
    btop
    bottom
    astroterm
    asciinema
    gdu
    ncdu
    cbonsai
    catnap-git
    auto-cpufreq
    stormy-bin
    stacer-bin
    efibootmgr
    lazygit
    openssh
    gamescope
    terminaltexteffects
    systemctl-tui
    netsonar-bin
    # --- Wayland Tools ---
    neovim # editor
    mako # notifications
    waybar # topbar
    wl-clipboard # clipboard
    grim # screenshot
    slurp # screenshot
    swayosd # on screen display
    wlogout # logout menu
    mpv # media player
    imv # image viewer
    # --- Terminal ---
    starship # terminal prompt
    fastfetch # system info tool
    yazi # tui file explorer
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

#!/bin/bash

# ====================================================
#                  needed packages
# ====================================================

packages=(
    # ------------ Desktop UI Components ------------
    waybar # topbar
    mako # notifications
    rofi # app launcher, this will control wallpapers,power profiles and restart/shutdown
    swayosd # on screen display, uses gtk themes
    awww # wallpaper

    # ------------ Core Wayland & System ------------
    qt5-wayland # APIs for Wayland
    qt6-wayland # APIs for Wayland
    power-profiles-daemon # power profiles

    # ------------ Terminal & Editors ------------
    kitty # terminal
    neovim # editor

    # ------------ Theming & Fonts ------------
    matugen # color generator
    catppuccin-cursors-mocha # cursor
    ttf-cascadia-mono-nerd # font

    # ------------ Screenshot/Clipboard/Screen Record ------------
    wl-clipboard # Command-line copy/paste
    cliphist # clipboard manager
    wl-clip-persist #  	Keep Wayland clipboard even after programs close
    hyprshot # screenshots
    satty # screenshot + annotater
    gpu-screen-recorder-git # screen recorder

    # ------------ Media Viewers ------------
    mpv # media player
    imv # image viewer

    # ------------ audio ------------
    playerctl #  media player keybinds
    wireplumber # audio
    pipewire # audio
    pipewire-pulse # audio
    pipewire-audio # audio
    pipewire-alsa # audio
    wiremix # audio tui

    # ------------ wifi ------------
    impala # wifi tui
    iwd # wifi

    # # ------------ bluetooth ------------
    # bluez #bluetooth
    # bluez-utils #bluetooth
    # bluetui #bluetooth

    # ------------ terminal/file explorer ------------
    fastfetch # system info tool
    yazi # tui file explorer
    nautilus # gui file explorer
    starship # terminal prompt

# ====================================================
#                optional packages
# ====================================================

    # ------------ main ------------
    # zen-browser-bin
    # vesktop-bin
    # obsidian
    # localsend
    # spotatui # spotify tui theres also ncspot

    # ------------ Gaming ------------
    # steam
    # gamescope

    # ------------ dev ------------
    # git
    # lazygit
    # zed
    # openssh

    # ------------ System Monitoring/utility ------------
    # btop
    # bottom
    # systemctl-tui
    # stacer-bin
    # netsonar-bin
    # gdu
    # ncdu
    # auto-cpufreq
    # efibootmgr

    # ------------ terminal rice ------------
    # astroterm
    # asciinema
    # cbonsai
    # catnap-git
    # stormy-bin
    # terminaltexteffects

    # ------------ terminal ------------
    # gum # shell scripts
    # eza # ls replacment
    # fd # alternative to find
    # zoxide # smarter cd
    # fzf # fuzzy finder

)

# ====================================================
#                    script
# ====================================================

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
  echo "------------------------------------------------------------"
  echo "WARNING: The following needed packages failed to install:"
  for failed in "${failed_packages[@]}"; do
    echo "  - $failed"
  done
  echo "Please check the logs or try installing them manually."
  echo "------------------------------------------------------------"
else
  echo "All needed packages installed successfully!"
fi

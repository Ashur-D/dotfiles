#!/bin/bash

# ====================================================
#                     packages
# ====================================================

packages=(
# ====================================================
#                  CORE / NEEDED PACKAGES
# ====================================================

    # ------------ Desktop UI Components ------------
    waybar                      # topbar
    mako                        # notifications
    rofi                        # app launcher, controls wallpapers/power/session
    swayosd                     # on-screen display
    awww                        # wallpaper daemon

    # ------------ Theming & Fonts ------------
    matugen                     # color generator
    catppuccin-cursors-mocha    # cursor theme
    ttf-cascadia-mono-nerd      # system font

    # ------------ Terminal & Shell ------------
    kitty                       # terminal emulator
    starship                    # terminal prompt
    gum                         # shell scripts (menus, prompts)
    fastfetch                   # system info tool

    # ------------ CLI Utilities & File Management ------------
    yazi                        # tui file explorer
    nautilus                    # gui file explorer
    wl-clipboard                # command-line copy/paste
    cliphist                    # clipboard manager
    wl-clip-persist             # keep Wayland clipboard after programs close

    # ------------ Editors ------------
    neovim                      # terminal text editor

    # ------------ Audio & Media ------------
    pipewire                    # audio core
    pipewire-pulse              # audio compatibility
    pipewire-audio              # audio support
    pipewire-alsa               # audio compatibility
    wireplumber                 # audio session manager
    wiremix                     # audio tui
    playerctl                   # media player keybinds
    mpv                         # video media player
    imv                         # image viewer

    # ------------ Screenshots & Screen Recording ------------
    hyprshot                    # screenshot tool
    satty                       # screenshot annotator
    gpu-screen-recorder-ui      # screen recorder ui

    # ------------ Network & Bluetooth ------------
    iwd                         # wifi daemon
    impala                      # wifi tui
    bluez                       # bluetooth daemon
    bluez-utils                 # bluetooth utilities
    bluetui                     # bluetooth tui

    # ------------ System & Hardware Management ------------
    power-profiles-daemon       # power profiles or use auto-cpufreq, never both.
    btop                        # system resource monitor

    # ------------ Core Wayland & Display ------------
    #qt5-wayland                 # APIs for Wayland
    #qt6-wayland                 # APIs for Wayland


# ====================================================
#                  OPTIONAL PACKAGES
# ====================================================

    # ------------ Daily Apps ------------
    # zen-browser-bin           # web browser
    # vesktop-bin               # discord client
    # obsidian                  # note taking
    # localsend                 # local file sharing
    # spotatui                  # spotify tui (alternative: ncspot)

    # ------------ Gaming ------------
    # steam                     # game launcher
    # gamescope                 # micro-compositor for gaming
    # proton-cachyos            # optimized proton compatibility tool

    # ------------ Development ------------
    # git                       # version control
    # lazygit                   # git tui
    # zed                       # gui code editor

    # ------------ Advanced Terminal Utilities ------------
    # eza                       # ls replacement
    # fd                        # faster alternative to 'find'
    # zoxide                    # smarter 'cd' directory jumping
    # fzf                       # fuzzy finder

    # ------------ Advanced System Utilities ------------
    # bottom                    # alternative system monitor
    # systemctl-tui             # manage systemd services
    # stacer-bin                # system optimizer & GUI monitor
    # netsonar-bin              # network monitoring
    # gdu                       # disk usage analyzer
    # ncdu                      # disk usage analyzer (alternative)
    # efibootmgr                # modify UEFI boot entries

    # ------------ Terminal Rice (Visuals & Fun) ------------
    # astroterm                 # terminal planetarium
    # asciinema                 # terminal session recorder
    # cbonsai                   # bonsai tree generator
    # catnap-git                # system fetch tool
    # stormy-bin                # weather fetch
    # terminaltexteffects       # text animations
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

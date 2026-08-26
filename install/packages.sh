#!/bin/bash

# ====================================================
#                     packages
# ====================================================

packages=(
# ====================================================
#                  CORE / NEEDED PACKAGES
# ====================================================

    # ------------ Desktop UI Components ------------
    Noctalia                    # Shell

    # ------------ Theming & Fonts ------------
    catppuccin-cursors-mocha    # cursor theme
    maplemono-ttf               # system font, alternatives - ttf-jetbrains-mono-nerd or ttf-cascadia-mono-nerd
    adw-gtk-theme
    nwg-look

    # ------------ Terminal & Shell ------------
    kitty                       # terminal
    starship                    # terminal prompt
    fastfetch                   # system info tool

    # ------------ File Management ------------
    yazi                        # tui file explorer
    thunar                      # gtk gui file manager
    xdg-user-dirs               # standard Linux user directories

    # ------------ Clipboard ------------
    wl-clipboard                # command-line copy/paste
    cliphist                    # tui clipboard manager - `win11-clipboard-history-bin` and `clipse` are also great
    wl-clip-persist             # clipboard stays persist after closing app

    # ------------ Editors ------------
    neovim                      # terminal text editor

    # ------------ image & video player/viewer ------------
    mpv                         # video media player
    imv                         # image viewer

    # ------------ Audio,Wifi,Bluetooth ------------
    # pipewire                    # audio core
    pipewire-pulse              # audio compatibility
    pipewire-alsa               # audio compatibility
    wireplumber                 # audio session manager
    playerctl                   # media player keybinds
    iwd                         # wifi daemon
    bluez                       # bluetooth daemon

    # ------------ Screenshots & Screen Recording ------------
    satty                       # screenshot annotator
    # gpu-screen-recorder-ui      # screen recorder ui (installs gpu-screen-recorder as well )

    # ------------ System & Hardware Management ------------
    power-profiles-daemon       # power-profiles-daemon, or use auto-cpufreq, never both.
    btop                        # system resource monitor
    # brightnessctl               # controls screen and keyboard brightness
    stow                        # symlinks

# ====================================================
#                  OPTIONAL PACKAGES
# ====================================================

    # ------------ Daily Apps ------------
    # zen-browser-bin           # web browser
    # helium-browser-bin        # web browser
    # vesktop-bin               # discord client or just install discord
    # obsidian                  # note taking
    # localsend                 # local file sharing
    # spotatui-bin              # spotify tui (alternative: ncspot)

    # ------------ Gaming ------------
    # steam                     # game launcher
    # gamescope                 # micro-compositor for gaming
    # proton-cachyos            # optimized proton compatibility tool

    # ------------ Development ------------
    # git                       # version control
    # lazygit                   # git tui
    # zed                       # gui code editor
    # openssh                   # ssh
    # gum                       # shell scripts (some of my bashrc lines require this)

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
    # pachub                    # Front End for Pacman/AUR
    # dust git                  # A more intuitive version of du in rust
    # 7zip

    # ------------ Terminal Rice (Visuals & Fun) ------------
    # astroterm                 # terminal planetarium
    # asciinema                 # terminal session recorder
    # cbonsai                   # bonsai tree generator
    # catnap-git                # system fetch tool
    # stormy-bin                # weather fetch
    # terminaltexteffects       # text animations
    # scope-tui                 # A simple oscilloscope/vectorscope/spectroscope for your terminal
    # weathr                    # a terminal weather app with ascii animation
    # terminal-rain-lightning
)

# ====================================================
#                    script
# ====================================================

echo "Starting batch installation of core packages..."

if yay -S --needed --noconfirm "${packages[@]}"; then
    echo "------------------------------------------------------------"
    echo "✨ All packages installed successfully ✨"
    echo "------------------------------------------------------------"
else
    echo "------------------------------------------------------------"
    echo "❌ WARNING: Some packages failed to install."
    echo "Please check the terminal output above."
    echo "------------------------------------------------------------"
fi

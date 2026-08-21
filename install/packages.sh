#!/bin/bash

# ====================================================
#                     packages
# ====================================================

packages=(
# ====================================================
#                  CORE / NEEDED PACKAGES
# ====================================================

    # ------------ Desktop UI Components ------------
    waybar-git                  # topbar; git build includes Hyprland Lua IPC workspace-click fixes
    mako                        # notifications
    rofi                        # app launcher, controls wallpapers/power/session
    swayosd                     # on-screen display
    awww                        # wallpaper daemon

    # ------------ Theming & Fonts ------------
    matugen                     # color generator
    catppuccin-cursors-mocha    # cursor theme
    maplemono-ttf               # system font, alternatives - ttf-jetbrains-mono-nerd or ttf-cascadia-mono-nerd
    adw-gtk-theme

    # ------------ Terminal & Shell ------------
    kitty                       # terminal emulator
    starship                    # terminal prompt
    gum                         # shell scripts (menus, prompts)
    fastfetch                   # system info tool

    # ------------ File Management ------------
    yazi                        # tui file explorer
    thunar                      # gtk gui file manager
    7zip                        # the powerhouse engine Yazi uses for everything else

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
    pipewire                    # audio core
    pipewire-pulse              # audio compatibility
    pipewire-alsa               # audio compatibility
    wireplumber                 # audio session manager
    wiremix                     # audio tui
    playerctl                   # media player keybinds

    iwd                         # wifi daemon
    impala                      # wifi tui

    bluez                       # bluetooth daemon
    bluez-utils                 # bluetooth utilities
    bluetui                     # bluetooth tui

    # ------------ Screenshots & Screen Recording ------------
    hyprshot                    # screenshot tool
    satty                       # screenshot annotator
    gpu-screen-recorder-ui      # screen recorder ui

    # ------------ System & Hardware Management ------------
    power-profiles-daemon       # power profiles, or use auto-cpufreq, never both.
    btop                        # system resource monitor
    brightnessctl               # controls screen and keyboard brightness
    stow                        # symlinks

# ====================================================
#                  OPTIONAL PACKAGES
# ====================================================

    # ------------ Daily Apps ------------
    # zen-browser-bin           # web browser
    # helium-browser-bin        # web browser
    # vesktop-bin               # discord client
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

    # ------------ Terminal Rice (Visuals & Fun) ------------
    # astroterm                 # terminal planetarium
    # asciinema                 # terminal session recorder
    # cbonsai                   # bonsai tree generator
    # catnap-git                # system fetch tool
    # stormy-bin                # weather fetch
    # terminaltexteffects       # text animations
    # scope-tui                 # A simple oscilloscope/vectorscope/spectroscope for your terminal
    # weathr                    # a terminal weather app with ascii animation
)

# ====================================================
#                    script
# ====================================================

echo "Starting batch installation of core packages..."

# Install EVERYTHING in one single, fast transaction.
# --needed automatically skips already installed packages!
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

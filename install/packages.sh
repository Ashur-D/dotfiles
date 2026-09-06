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
    awww                        # wallpaper daemon

    # ------------ Theming & Fonts (fonts are installed in run.sh) ------------
    matugen                     # color generator
    bibata-cursor-theme-bin     # cursor theme
    adw-gtk-theme               # gtk theme
    maplemono-ttf               # fonts
    noto-fonts
    noto-fonts-emoji

    # ------------ Terminal & Shell ------------
    kitty                       # terminal
    starship                    # terminal prompt
    fastfetch                   # system info tool

    # ------------ File Management ------------
    yazi                        # tui file explorer
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
    pipewire-pulse              # audio compatibility
    wireplumber                 # audio session manager
    wiremix                     # audio tui
    playerctl                   # media player keybinds

    iwd                         # wifi daemon
    impala                      # wifi tui

    bluez                       # bluetooth daemon
    bluetui                     # bluetooth tui

    # ------------ Screenshots & Screen Recording ------------
    hyprshot                    # screenshot tool
    satty                       # screenshot annotator
    gpu-screen-recorder-ui      # screen recorder ui (installs gpu-screen-recorder as well )
    imagemagick

    # ------------ System & Hardware Management ------------
    power-profiles-daemon       # power profiles, or use auto-cpufreq, never both.
    python-gobject              # needed for power profiles
    btop                        # system resource monitor
    brightnessctl               # controls screen and keyboard brightness
    stow                        # symlinks
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

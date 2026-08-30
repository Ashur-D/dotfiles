#!/bin/bash

read -p "Do you have an Nvidia GPU? (y/N): " use_nvidia

if [[ "$use_nvidia" =~ ^[Yy]$ ]]; then
    # Base list of Nvidia packages
    packages=(
        egl-wayland
        libva-nvidia-driver
        lib32-nvidia-utils
        nvidia-dkms
        nvidia-utils
    )

    # Dynamically detect installed kernels and add their headers
    echo "Detecting installed kernels to fetch correct headers..."
    if pacman -Qs ^linux$ > /dev/null; then
        packages+=(linux-headers)
    fi
    if pacman -Qs ^linux-zen$ > /dev/null; then
        packages+=(linux-zen-headers)
    fi
    if pacman -Qs ^linux-lts$ > /dev/null; then
        packages+=(linux-lts-headers)
    fi
    # linux-cachyos-headers are already handled in your CachyOS script,
    # but you can add a check here just in case:
    if pacman -Qs ^linux-cachyos$ > /dev/null; then
        packages+=(linux-cachyos-headers)
    fi

    echo "Starting batch installation of nvidia packages and headers..."

    if yay -S --needed --noconfirm "${packages[@]}"; then
        echo "------------------------------------------------------------"
        echo "✨ All nvidia packages installed successfully ✨"
        echo "------------------------------------------------------------"
    else
        echo "------------------------------------------------------------"
        echo "❌ WARNING: Some nvidia packages failed to install."
        echo "Please check the terminal output above."
        echo "------------------------------------------------------------"
    fi

    echo "Enabling Nvidia environment variables..."
    if [ -f ~/.config/hypr/hyprenvs.lua ]; then
        sed -i --follow-symlinks '/nvidia/s/-- hl.env/hl.env/g' ~/.config/hypr/hyprenvs.lua
    fi
else
    echo "AMD/Intel detected. Skipping Nvidia drivers and variables."
fi

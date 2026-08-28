#!/bin/bash

# ==========================
# Install nvidia packages
# ==========================

# List of packages to install
packages=(
    # linux-headers
    linux-zen-headers
    egl-wayland
    libva-nvidia-driver
    lib32-nvidia-utils #(requires multilib for 32bit programs)
    nvidia-open-dkms
    # nvidia-utils
)

echo "Starting batch installation of nvidia packages..."

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

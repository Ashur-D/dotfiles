#!/bin/bash

# ==========================
# Install cachy kernel/repos
# ==========================

read -p "Do you want to install the CachyOS kernel, repos, and manager? (y/N): " cachy_choice

if [[ "$cachy_choice" =~ ^[Yy]$ ]]; then
    echo "Downloading and configuring CachyOS repositories..."
    curl -O https://mirror.cachyos.org/cachyos-repo.tar.xz
    tar xvf cachyos-repo.tar.xz

    cd cachyos-repo || exit
    sudo ./cachyos-repo.sh
    cd ..
    rm -rf cachyos-repo cachyos-repo.tar.xz
    echo "CachyOS repositories added successfully."

    echo "Installing CachyOS kernel and headers..."
    yay -S --noconfirm linux-cachyos linux-cachyos-headers cachyos-kernel-manager

    echo "Kernel installation complete. Remember to update your systemd-boot entries."
else
    echo "Skipping CachyOS integration (Standard Arch repositories and kernel will be used)."
fi

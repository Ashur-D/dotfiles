#!/bin/bash

# Dynamically find the repo root no matter where the script is run from
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_DIR="$(dirname "$SCRIPT_DIR")"
DEST_DIR="$HOME/.config"

# Check if source exists in the cloned repo
if [ ! -d "$REPO_DIR/.config" ]; then
  echo "Error: Source directory does not exist: $REPO_DIR/.config"
  exit 1
fi

echo "Copying configurations..."
mkdir -p "$DEST_DIR"

# Using '/.' ensures we copy all hidden files inside the directory
cp -a "$REPO_DIR/.config/." "$DEST_DIR/"
cp -a "$REPO_DIR/.bashrc" "$HOME/.bashrc"

# Give execute permissions to scripts
find "$DEST_DIR/scripts" -type f -name "*.sh" -exec chmod +x {} +

# LazyVim install (only if it doesn't already exist)
if [ ! -d "$DEST_DIR/nvim" ]; then
    echo "Installing LazyVim..."
    git clone https://github.com/LazyVim/starter "$DEST_DIR/nvim"
    rm -rf "$DEST_DIR/nvim/.git"
fi

# Source bash
source "$HOME/.bashrc"

echo "Configs copied successfully."

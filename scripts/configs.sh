#!/bin/bash

# ==========================
# Move config files
# ==========================

SOURCE_DIR="$HOME/dotfiles/.configs"
DEST_DIR="$HOME/.config/"

# Check if source exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Source directory does not exist: $SOURCE_DIR"
  exit 1
fi

# Create destination if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy all contents from source to destination
cp -a "$SOURCE_DIR/"* "$DEST_DIR/"
cp -a "$HOME/dotfiles/.bashrc" "$HOME"

#lazyvim install
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git

echo "✅ Configs copied successfully."

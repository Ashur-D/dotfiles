#!/bin/bash

# ==========================
# Move config files
# ==========================

SOURCE_DIR="$HOME/dotfiles/.config"
DEST_DIR="$HOME/.config/"

# Check if source exists
if [ ! -d "$SOURCE_DIR" ]; then
  echo "Source directory does not exist: $SOURCE_DIR"
  exit 1
fi

# Create destination if it doesn't exist
mkdir -p "$DEST_DIR"

# Copy all contents from source to destination and give exec perms to scripts
cp -a "$SOURCE_DIR/"* "$DEST_DIR/"
cp -a "$HOME/dotfiles/.bashrc" "$HOME"
find "$DEST_DIR/scripts" -type f -name "*.sh" -exec chmod +x {} +

#lazyvim install
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git

# source bash
source ~/.bashrc

echo "Configs copied successfully."

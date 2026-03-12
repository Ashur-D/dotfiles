#!/bin/bash

# ==========================
# Setup Custom Cursor
# ==========================

# Set paths
SOURCE_DIR="$HOME/.cache/yay/catppuccin-cursors-mocha"
ICONS_DIR="$HOME/.local/share/icons"
THEME_NAME="catppuccin-mocha-dark-cursors"

# 1. Navigate to the downloaded yay cache folder
# (Using || exit 1 ensures the script stops if the folder doesn't exist)
cd "$SOURCE_DIR" || { echo "Error: Source directory not found."; exit 1; }

# 2. Delete the unwanted build and git files
rm -rf .git .SRCINFO PKGBUILD

# 3. Ensure the destination icons directory exists, then copy
mkdir -p "$ICONS_DIR"
cp -r * "$ICONS_DIR/"

# 4. Set as the default cursor theme at the user level
mkdir -p "$ICONS_DIR/default"

cat > "$ICONS_DIR/default/index.theme" <<EOF
[Icon Theme]
Inherits=$THEME_NAME
EOF

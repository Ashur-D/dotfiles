#!/bin/bash

# ==========================
# Install custom cursor
# ==========================

# Set paths
ICONS_DIR="$HOME/.local/share/icons"
CURSOR_ZIP_PATH="$HOME/dotfiles/bin/catppuccin-mocha-dark-cursors.zip"
CURSOR_THEME_DIR="catppuccin-mocha-dark-cursors"

# Create icons directory if it doesn't exist
mkdir -p "$ICONS_DIR"

# Unzip cursor theme to temp location
TEMP_UNZIP_DIR="$(mktemp -d)"
unzip -oq "$CURSOR_ZIP_PATH" -d "$TEMP_UNZIP_DIR"

# Remove existing theme if it exists
if [ -d "$ICONS_DIR/$CURSOR_THEME_DIR" ]; then
    echo "⚠️ Existing theme found at $ICONS_DIR/$CURSOR_THEME_DIR. Replacing..."
    rm -rf "$ICONS_DIR/$CURSOR_THEME_DIR"
fi

# Copy new theme into place
cp -r "$TEMP_UNZIP_DIR/$CURSOR_THEME_DIR" "$ICONS_DIR/"

# Cleanup temp files
rm -rf "$TEMP_UNZIP_DIR"

# Set as default cursor theme at user level
mkdir -p "$ICONS_DIR/default"
cat >"$ICONS_DIR/default/index.theme" <<EOF
[Icon Theme]
Inherits=catppuccin-mocha-dark-cursors
EOF

echo "✅ Catppuccin Mocha Dark cursors installed and set as default (user level)."
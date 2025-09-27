# ==========================
# Install custom cursor
# ==========================

# Set paths
ICONS_DIR="$HOME/.local/share/icons"
CURSOR_ZIP_PATH="$HOME/hypr-dotfiles/bin/catppuccin-mocha-dark-cursors.zip"
CURSOR_THEME_DIR="catppuccin-mocha-dark-cursors"

# Create icons directory if it doesn't exist
mkdir -p "$ICONS_DIR"

# Unzip cursor theme from bin directory to a temp location (quiet)
TEMP_UNZIP_DIR="$(mktemp -d)"
unzip -oq "$CURSOR_ZIP_PATH" -d "$TEMP_UNZIP_DIR"

# Move the cursor theme folder to ~/.local/share/icons/
mv -f "$TEMP_UNZIP_DIR/$CURSOR_THEME_DIR" "$ICONS_DIR/"

# Cleanup temp directory
rm -rf "$TEMP_UNZIP_DIR"

# Create the default directory and index.theme
mkdir -p "$ICONS_DIR/default"
cat >"$ICONS_DIR/default/index.theme" <<EOF
[Icon Theme]
Inherits=catppuccin-mocha-dark-cursors
EOF

echo "✅ Catppuccin Mocha Dark cursors installed and set as default (user level)."

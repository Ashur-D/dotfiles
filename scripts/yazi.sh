#!/bin/bash

SCRIPT_DIR="$(cd -- "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"
SOURCE_DIR="$SCRIPT_DIR/yazi"
DEST_DIR="$HOME/.config/yazi"

# Check if yazi is installed
if ! pacman -Q yazi &>/dev/null; then
  echo "Yazi is not installed — skipping setup."
  exit 0
fi

# Prompt user once for the full setup
read -rp "Yazi is installed. Do you want to copy Yazi config, plugins add the shell wrapper to your ~/.bashrc? (y/n): " choice
if [[ ! "$choice" =~ ^[Yy]$ ]]; then
  echo "Skipping Yazi setup."
  exit 0
fi

# Create destination directory
mkdir -p "$DEST_DIR"

# Copy main config files
cp "$SOURCE_DIR/yazi.toml" "$DEST_DIR/"
cp "$KEYMAP_FILE" "$DEST_DIR/keymap.toml"
[ -f "$SOURCE_DIR/package.toml" ] && cp "$SOURCE_DIR/package.toml" "$DEST_DIR/"
[ -f "$SOURCE_DIR/init.lua" ] && cp "$SOURCE_DIR/init.lua" "$DEST_DIR/"
if [ -d "$SOURCE_DIR/plugins" ]; then
  rm -rf "$DEST_DIR/plugins"
  cp -r "$SOURCE_DIR/plugins" "$DEST_DIR/"
fi

# Define shell wrapper content
WRAPPER_START="# --- yazi shell wrapper ---"
WRAPPER_END="# --- end yazi wrapper ---"
WRAPPER_CONTENT=$(
  cat <<'EOF'
# --- yazi shell wrapper ---
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
  yazi "$@" --cwd-file="$tmp"
  IFS= read -r -d '' cwd <"$tmp"
  [ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
  rm -f -- "$tmp"
}
# --- end yazi wrapper ---
EOF
)

if ! grep -qF "$WRAPPER_START" "$HOME/.bashrc"; then
  echo "$WRAPPER_CONTENT" >>"$HOME/.bashrc"
  echo "Configs all added correctly"
else
  echo "Yazi shell wrapper already present in ~/.bashrc."
fi

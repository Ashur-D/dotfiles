#!/bin/bash
set -euo pipefail

# Define the absolute path to your dotfiles repository
DOTFILES_REPO_DIR="$HOME/dotfiles"
STOW_DIR="$DOTFILES_REPO_DIR/configs" # Point to the new wrapper folder

echo "Starting dotfiles setup with stow..."
echo "----------------------------------------------------------------------"
echo "Target: $HOME"
echo "Repo:   $STOW_DIR"
echo "----------------------------------------------------------------------"

# Check if the configs directory exists
if [ ! -d "$STOW_DIR" ]; then
    echo "Error: Configs directory not found at $STOW_DIR."
    exit 1
fi

# Ensure ~/.config exists so stow doesn't try to symlink the whole directory
mkdir -p "$HOME/.config"

echo "Attempting to stow packages..."

# Iterate through every directory inside 'configs/'
find "$STOW_DIR" -maxdepth 1 -mindepth 1 -type d -print0 | while IFS= read -r -d $'\0' app_dir; do
    app_name=$(basename "$app_dir")

    echo "Stowing '$app_name'..."

    # -d points to the wrapper folder, -t points to HOME, package is the app name
    if stow -d "$STOW_DIR" -t "$HOME" "$app_name"; then
        echo "  - Successfully stowed '$app_name'."
    else
        echo "  - WARNING: Failed to stow '$app_name'. Check for existing files."
    fi
    echo ""
done

echo "Installing Yazi plugins..."
ya pkg install

echo "Sourcing shell..."
source ~/.bashrc

echo "------------------------------------------------------------"
echo "✨ dotfiles symlinked successfully!"
echo "------------------------------------------------------------"

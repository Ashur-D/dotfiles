#!/bin/bash
set -euo pipefail

# Define the absolute path to your dotfiles repository
# Since the repo is cloned right in the home dir, we use $HOME/dotfiles
DOTFILES_REPO_DIR="$HOME/dotfiles"

echo "Starting dotfiles setup with stow..."
echo "----------------------------------------------------------------------"
echo "Target: $HOME"
echo "Repo:   $DOTFILES_REPO_DIR"
echo "----------------------------------------------------------------------"

# Check if dotfiles directory exists
if [ ! -d "$DOTFILES_REPO_DIR" ]; then
    echo "Error: Dotfiles repository directory not found at $DOTFILES_REPO_DIR."
    exit 1
fi

# Ensure ~/.config exists so stow doesn't try to symlink the whole directory
mkdir -p "$HOME/.config"

echo "Attempting to stow packages from nested structure..."

# In your structure: ~/dotfiles/<appname>/.config/<appname>
# We iterate through every directory in the root of the repo
find "$DOTFILES_REPO_DIR" -maxdepth 1 -mindepth 1 -type d \
    -not -name 'scripts' \
    -not -name '.git' \
    -print0 | while IFS= read -r -d $'\0' app_dir; do
    app_name=$(basename "$app_dir")

    # Check if this app directory contains a .config subdirectory
    if [ -d "$app_dir/.config" ]; then
        echo "Stowing '$app_name'..."
        # FIXED COMMAND:
        # -d points to the root repo, -t points to HOME, and the package is the app_name.
        # Stow will see 'hypr/.config/hypr' and correctly symlink it to '~/.config/hypr'
        if stow -d "$DOTFILES_REPO_DIR" -t "$HOME" "$app_name"; then
            echo "  - Successfully stowed '$app_name'."
        else
            echo "  - WARNING: Failed to stow '$app_name'. Check for existing files in ~/.config/$app_name"
        fi
    else
        echo "Skipping '$app_name': No .config directory found."
    fi
    echo ""
done

echo "Installing Yazi plugins..."
ya pack -i

echo "Installation complete! Reloading shell..."
exec bash

echo "Dotfiles stow setup complete."

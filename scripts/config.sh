#!/bin/bash
set -euo pipefail

# Define the absolute path to your dotfiles repository
# IMPORTANT: Adjust this path if your dotfiles are cloned to a different location
DOTFILES_REPO_DIR="$HOME"

echo "Starting dotfiles setup with stow..."
echo "----------------------------------------------------------------------"
echo "WARNING: stow will NOT overwrite existing files or directories."
echo "If a target file or directory already exists in your home directory"
echo "(e.g., ~/.zshrc or ~/.config/nvim), stow will skip it and report a conflict."
echo "You may need to manually move or delete existing files if you want the"
echo "symlink created by stow to take effect."
echo "----------------------------------------------------------------------"
echo ""

# Navigate to the dotfiles repository directory, which is stow's "stow directory"
if [ ! -d "$DOTFILES_REPO_DIR" ]; then
    echo "Error: Dotfiles repository directory not found at $DOTFILES_REPO_DIR."
    echo "Please ensure you have cloned your dotfiles and updated DOTFILES_REPO_DIR in this script."
    exit 1
fi

cd "$DOTFILES_REPO_DIR" || { echo "Error: Could not navigate to $DOTFILES_REPO_DIR"; exit 1; }

# Ensure ~/.config directory exists as a parent for many configs
mkdir -p "$HOME/.config"

echo "Attempting to stow packages:"

# List of directories (packages) to stow.
# This assumes each top-level directory in your dotfiles repo (excluding 'scripts' and '.git')
# is a stow package. Adjust this list to match your actual dotfile packages.
# For example, if you have 'zsh', 'nvim', 'git', 'kitty', 'kde', 'gtk', 'hypr' directories
# directly under '~/github/dotfiles', they will be listed here.

# Find all top-level directories in DOTFILES_REPO_DIR that are not 'scripts' or '.git'
# and try to stow them.
find . -maxdepth 1 -mindepth 1 -type d \
    -not -name 'scripts' \
    -not -name '.git' \
    -not -name '.github' \
    -not -name 'README.md' \
    -print0 | while IFS= read -r -d $'\0' package_path; do
    package_name=$(basename "$package_path")
    echo "Stowing '$package_name'..."
    if stow "$package_name"; then
        echo "  - Successfully stowed '$package_name'."
    else
        echo "  - WARNING: Failed to stow '$package_name'. This usually means target files already exist or there was another conflict. Please check the output above."
    fi
    echo "" # Add a blank line for readability
done

echo "Dotfiles stow setup complete. Review any warnings above."

# You might still have other installation steps here, like:
# ./scripts/packages.sh # Assuming this installs necessary packages
# ./scripts/hypr.sh     # Assuming this handles Hyprland specific setup

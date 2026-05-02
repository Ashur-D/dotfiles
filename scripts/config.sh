#!/bin/bash
set -euo pipefail

# Define the absolute path to your dotfiles repository
# IMPORTANT: Adjust this path if your dotfiles are cloned to a different location
DOTFILES_REPO_DIR="$HOME/dotfiles" # <-- Changed to ~/dotfiles

echo "Starting dotfiles setup with stow..."
echo "----------------------------------------------------------------------"
echo "WARNING: stow will NOT overwrite existing files or directories."
echo "If a target file or directory already exists in your home directory"
echo "(e.g., ~/.zshrc or ~/.config/nvim), stow will skip it and report a conflict."
echo "You may need to manually move or delete existing files if you want the"
echo "symlink created by stow to take effect."
echo "----------------------------------------------------------------------"
echo ""

# Navigate to the parent directory of the stowable packages.
# In your case, this would be the directory containing the top-level app directories (e.g., 'hypr', 'kitty').
# If your structure is dotfiles/hypr/.config/hypr, then 'hypr' is the package.
# We need to run stow from the directory that contains the package.

# The find command below assumes the stowable directories (like 'hypr', 'kitty')
# are directly under DOTFILES_REPO_DIR.
# If your structure is dotfiles/hypr/.config/hypr, then 'hypr' is the package.
# We need to run stow from the directory that contains the package.

# Correct approach for your nested structure:
# For each app directory (e.g., dotfiles/hypr), we need to stow from dotfiles/hypr/.config/
# The find command should target these .config directories.

echo "Attempting to stow packages:"

# Find all directories that contain the actual configuration for stow.
# These are the directories like dotfiles/hypr/.config, dotfiles/kitty/.config, etc.
find "$DOTFILES_REPO_DIR" -mindepth 2 -maxdepth 2 -type d -name ".config" \
    -print0 | while IFS= read -r -d $'\0' config_dir_path; do

    # Ensure it's a .config directory directly under an app directory
    # e.g., dotfiles/hypr/.config
    if [[ $(echo "$config_dir_path" | awk -F'/' '{print $(NF-1)}' ) == ".config" ]]; then
        package_base_name=$(basename $(dirname "$config_dir_path")) # e.g., 'hypr' from dotfiles/hypr/.config

        echo "Navigating to stow directory: $config_dir_path"
        cd "$config_dir_path" || { echo "Error: Could not navigate to $config_dir_path"; continue; }

        echo "Stowing '$package_base_name' from '$config_dir_path'..."
        if stow "$package_base_name"; then
            echo "  - Successfully stowed '$package_base_name'."
        else
            echo "  - WARNING: Failed to stow '$package_base_name'. This usually means target files already exist or there was another conflict. Please check the output above."
        fi
        echo "" # Add a blank line for readability
    fi
done

echo "Dotfiles stow setup complete. Review any warnings above."

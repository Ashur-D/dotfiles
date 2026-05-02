#!/bin/bash
set -euo pipefail

# Define the absolute path to your dotfiles repository
# IMPORTANT: Adjust this path if your dotfiles are cloned to a different location
DOTFILES_REPO_DIR="$HOME/dotfiles" # Assuming your dotfiles are cloned to ~/dotfiles

echo "Starting dotfiles setup with stow..."
echo "----------------------------------------------------------------------"
echo "WARNING: stow will NOT overwrite existing files or directories."
echo "If a target file or directory already exists in your home directory"
echo "(e.g., ~/.zshrc or ~/.config/nvim), stow will skip it and report a conflict."
echo "You may need to manually move or delete existing files if you want the"
echo "symlink created by stow to take effect."
echo "----------------------------------------------------------------------"
echo ""

# Navigate to the dotfiles repository directory
if [ ! -d "$DOTFILES_REPO_DIR" ]; then
    echo "Error: Dotfiles repository directory not found at $DOTFILES_REPO_DIR."
    echo "Please ensure you have cloned your dotfiles and updated DOTFILES_REPO_DIR in this script."
    exit 1
fi

# Find all directories that represent the 'stowable' packages.
# In your current structure, these are the directories like:
# dotfiles/hypr/.config/hypr
# dotfiles/kitty/.config/kitty
# dotfiles/zed/.config/zed
#
# The script needs to navigate to the PARENT directory of the actual package,
# which is the '.config' directory within each app's folder.
# Example: cd to 'dotfiles/hypr/.config/' and then stow 'hypr'.

echo "Attempting to stow packages:"

# Find all directories that are directly under an application directory and are named '.config'
# Example: Finds 'dotfiles/hypr/.config', 'dotfiles/kitty/.config', etc.
find "$DOTFILES_REPO_DIR" -mindepth 2 -maxdepth 2 -type d -name ".config" \
    -print0 | while IFS= read -r -d $'\0' config_parent_dir; do

    # Extract the application name (e.g., 'hypr' from 'dotfiles/hypr/.config')
    # This assumes the structure is always DOTFILES_REPO_DIR/appname/.config
    app_name=$(basename $(dirname "$config_parent_dir"))

    echo "Processing package: '$app_name'"

    # Navigate to the directory containing the package to be stowed.
    # In your structure, this is the '.config' directory within the app's folder.
    # Example: cd to 'dotfiles/hypr/.config/'
    cd "$config_parent_dir" || { echo "Error: Could not navigate to $config_parent_dir"; continue; }

    echo "  - Attempting to stow '$app_name' from '$config_parent_dir'..."
    # Run stow for the application name. Stow will look for a subdirectory named '$app_name'
    # within the current directory ('$config_parent_dir').
    if stow "$app_name"; then
        echo "  - Successfully stowed '$app_name'."
    else
        echo "  - WARNING: Failed to stow '$app_name'. This usually means target files already exist or there was another conflict. Please check the output above."
    fi
    echo "" # Add a blank line for readability
done

echo "Dotfiles stow setup complete. Review any warnings above."

# You can add other setup commands here if needed, e.g.:
# echo "Running package installation script..."
# "$DOTFILES_REPO_DIR/scripts/packages.sh"
# echo "Running Hyprland setup script..."
# "$DOTFILES_REPO_DIR/scripts/hypr.sh"

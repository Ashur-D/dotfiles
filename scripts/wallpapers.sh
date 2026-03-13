#!/bin/bash

# ==========================
# Download Wallpapers
# ==========================

REPO_URL="https://github.com/Ashur-D/wallpapers.git"
TARGET_DIR="$HOME/.config/wallpapers"

# 1. Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# 2. Create a secure temporary directory for cloning
TEMP_DIR=$(mktemp -d)

echo "Fetching wallpapers from GitHub..."

# 3. Clone the repo (added .git to the URL to ensure GitHub routing works perfectly)
if git clone --depth 1 "$REPO_URL" "$TEMP_DIR"; then
    echo "Copying wallpapers to $TARGET_DIR..."

    # Use "/." instead of "/*" to safely grab ALL contents without relying on bash wildcards
    cp -a "$TEMP_DIR"/. "$TARGET_DIR/"

    # Clean up the unwanted repository files from your system
    rm -rf "$TARGET_DIR/.git"
    rm -f "$TARGET_DIR/README.md"

    echo "allpapers successfully installed!"
else
    echo "Failed to download wallpapers. Please check your internet connection or the repository URL."
fi

# 4. Clean up the temporary directory
rm -rf "$TEMP_DIR"

#!/bin/bash

# ==========================
# Download Wallpapers
# ==========================

REPO_URL="https://github.com/Ashur-D/wallpapers"
TARGET_DIR="$HOME/.config/wallpapers"

# 1. Create the target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

# 2. Create a secure temporary directory for cloning
TEMP_DIR=$(mktemp -d)

# 3. Clone the repo (using --depth 1 for a faster download without git history)
if git clone --depth 1 "$REPO_URL" "$TEMP_DIR"; then

    # Copy all files (excluding the .git folder) into the target directory
    cp -r "$TEMP_DIR"/* "$TARGET_DIR/" 2>/dev/null
    rm -f "$TARGET_DIR/README.md"

    echo "Wallpapers successfully installed!"
else
    echo "Failed to download wallpapers. Please check the repository URL."
fi

# 4. Clean up the temporary directory
rm -rf "$TEMP_DIR"

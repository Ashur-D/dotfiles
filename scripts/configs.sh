# ==========================
# move configs
# ==========================

# Define source and destination directories
SOURCE_DIR="$HOME/hypr-dotfiles/.configs"
DEST_DIR="$HOME/Downloads"

# Create destination directory if it doesn't exist
mkdir -p "$DEST_DIR"

# Move all files and folders from .configs to ~/.config
mv -v "$SOURCE_DIR"/* "$DEST_DIR"/

echo "✅ All files from .configs have been moved to ~/.config"

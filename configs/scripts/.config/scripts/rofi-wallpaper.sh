#!/bin/bash

# Define paths based on your dotfiles structure
WALL_DIR="$HOME/.config/wallpapers"
APPLY_SCRIPT="$HOME/.config/scripts/wallpaper.sh"

# Check if the wallpaper directory exists
if [ ! -d "$WALL_DIR" ]; then
    rofi -e "Directory $WALL_DIR does not exist!"
    exit 1
fi

# Build the list of files, injecting the image path as an icon for Rofi to render
file_list=""
for file in "$WALL_DIR"/*.{jpg,jpeg,png,gif,webp}; do
    # Skip if no files match
    [ -e "$file" ] || continue

    filename=$(basename "$file")
    # The magic Rofi syntax: "Text to display\0icon\x1f/path/to/image"
    file_list="${file_list}${filename}\0icon\x1f${file}\n"
done

# Check if the directory is empty
if [ -z "$file_list" ]; then
    rofi -e "No images found in $WALL_DIR!"
    exit 1
fi

# Launch Rofi with our new dedicated wallpaper theme
selected=$(echo -en "$file_list" | rofi -dmenu \
    -i \
    -theme ~/.config/rofi/wallpaper.rasi)

# If a wallpaper was selected (i.e., you didn't press Esc), apply it!
if [ -n "$selected" ]; then
    "$APPLY_SCRIPT" "$WALL_DIR/$selected"
fi

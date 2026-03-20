#!/bin/bash

# Directory containing wallpapers (removed the trailing slash for cleaner paths)
WALL_DIR="$HOME/.config/wallpapers/wallpapers"

# Current directory (to cd back to)
CWD="$(pwd)"

cd "$WALL_DIR" || exit

# Handle spaces in filenames
IFS=$'\n'

# Grab the user-selected wallpaper (added a prompt title to make it look nicer!)
SELECTED_WALL=$(for a in *.jpg *.png; do echo -en "$a\0icon\x1f$a\n" ; done | rofi -dmenu -p "Wallpaper")

# If not empty, pass the FULL path to your custom wallpaper script
if [ -n "$SELECTED_WALL" ]; then
    ~/.config/scripts/wallpaper.sh "$WALL_DIR/$SELECTED_WALL"
fi

# Go back to where you came from
cd "$CWD" || exit

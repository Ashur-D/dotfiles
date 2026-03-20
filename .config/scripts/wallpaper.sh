#!/bin/bash

# Exit if no wallpaper was passed from the Rofi menu
if [ -z "$1" ]; then
    echo "Error: No wallpaper specified."
    exit 1
fi

# Run your exact awww command, swapping the hardcoded path for the $1 variable
awww img "$1" --transition-type random --transition-fps 144

# 2. Generate new colors based on the selected wallpaper
matugen image "$1"

# 3. Reload Waybar to apply the new colors
killall -SIGUSR2 waybar

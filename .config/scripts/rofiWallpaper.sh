#!/bin/bash

WALLDIR="$HOME/github/wallpapers/wallpapers/"
MENU_OPTIONS=""

# Loop through images
for pic in "$WALLDIR"/*.{jpg,jpeg,png,gif}; do
    [ -e "$pic" ] || continue
    filename=$(basename "$pic")

    # Pass the RAW image directly to Rofi, bypassing the cache completely
    MENU_OPTIONS+="${filename}\0icon\x1f${pic}\n"
done

# Launch Rofi
SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -i -theme ~/.config/rofi/wallpaper.rasi)

if [ -n "$SELECTED" ]; then
    FULL_PATH="$WALLDIR/$SELECTED"
    matugen image -m dark --source-color-index 0 "$FULL_PATH"
    sed -i "s|path = .*|path = $FULL_PATH|" $HOME/.config/hypr/hyprlock.conf
fi

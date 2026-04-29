#!/bin/bash

WALLDIR="$HOME/.config/wallpapers/"
CACHE_DIR="$HOME/.cache/wallpaper_thumbnails"

mkdir -p "$CACHE_DIR"

MENU_OPTIONS=""

# Loop through images
for pic in "$WALLDIR"/*.{jpg,jpeg,png,gif}; do
    # Skip if no matches found
    [ -e "$pic" ] || continue

    filename=$(basename "$pic")
    thumb="$CACHE_DIR/$filename"

    # If thumbnail doesn't exist, create a fast, low-res version
    if [ ! -f "$thumb" ]; then
        magick "$pic" -thumbnail 250x250^ -gravity center -extent 100x100 "$thumb"
    fi

    # Feed the THUMBNAIL to Rofi's icon parameter, not the full image
    MENU_OPTIONS+="${filename}\0icon\x1f${thumb}\n"
done

# Launch Rofi
SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -i -theme ~/.config/rofi/wallpaper.rasi)


if [ -n "$SELECTED" ]; then
     FULL_PATH="$WALLDIR/$SELECTED"

     # Generate a random index between 0 and 4
     RANDOM_INDEX=$((RANDOM % 5))

     # Pass the random index to matugen
     matugen image -m dark --source-color-index $RANDOM_INDEX "$FULL_PATH"

     sed -i "s|path = .*|path = $FULL_PATH|" $HOME/.config/hypr/hyprlock.conf
 fi

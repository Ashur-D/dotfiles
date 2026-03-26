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
    # -m dark sets the mode (fixes GTK hooks)
    # --source-color-index 0 forces Matugen to skip the prompt and pick the first color
    matugen image -m dark --source-color-index 0 "$FULL_PATH"
    sed -i "s|path = .*|path = $FULL_PATH|" $HOME/.config/hypr/hyprlock.conf
fi

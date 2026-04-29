#!/bin/bash

WALLDIR="$HOME/.config/wallpapers"
MENU_OPTIONS=""

# 1. Kill any existing instances of this script to prevent "overlap"
curr_pid=$$
pids=$(pgrep -f $(basename "$0"))
for pid in $pids; do
    if [ "$pid" != "$curr_pid" ]; then
        kill -9 "$pid" 2>/dev/null
    fi
done

# 2. Build the menu
for pic in "$WALLDIR"/*.{jpg,jpeg,png,gif}; do
    [ -e "$pic" ] || continue
    filename=$(basename "$pic")
    MENU_OPTIONS+="${filename}\0icon\x1f${pic}\n"
done

SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -i -theme ~/.config/rofi/wallpaper.rasi)

if [ -n "$SELECTED" ]; then
     FULL_PATH="$WALLDIR/$SELECTED"

     # 4. Generate colors in the background
     RANDOM_INDEX=$((RANDOM % 5))
     TYPES=("scheme-expressive" "scheme-fidelity" "scheme-fruit-salad" "scheme-rainbow" "scheme-tonal-spot" "scheme-vibrant")
     RANDOM_TYPE=${TYPES[$RANDOM % ${#TYPES[@]}]}

     # Apply matugen
     matugen image -m dark -t "$RANDOM_TYPE" --source-color-index "$RANDOM_INDEX" "$FULL_PATH"

     # Sync lockscreen
     sed -i "s|path = .*|path = $FULL_PATH|" "$HOME/.config/hypr/hyprlock.conf"

     notify-send -i "$FULL_PATH" "Theme Updated" "Mode: ${RANDOM_TYPE#scheme-} | Index: $RANDOM_INDEX"
fi

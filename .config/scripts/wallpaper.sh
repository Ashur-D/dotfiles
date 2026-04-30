#!/bin/bash

# 1. Grab the image path passed by Yazi
FULL_PATH="$1"

# 2. Actually set the wallpaper using awww!
awww img "$FULL_PATH" --transition-type random --transition-fps 144

# 3. Generate colors in the background
RANDOM_INDEX=$((RANDOM % 5))
TYPES=("scheme-expressive" "scheme-fidelity" "scheme-fruit-salad" "scheme-rainbow" "scheme-tonal-spot" "scheme-vibrant")
RANDOM_TYPE=${TYPES[$RANDOM % ${#TYPES[@]}]}

# Apply matugen
matugen image -m dark -t "$RANDOM_TYPE" --source-color-index "$RANDOM_INDEX" "$FULL_PATH"

# 4. Sync lockscreen
sed -i "s|path = .*|path = $FULL_PATH|" "$HOME/.config/hypr/hyprlock.conf"

# Send notification
notify-send -i "$FULL_PATH" "Theme Updated" "Mode: ${RANDOM_TYPE#scheme-} | Index: $RANDOM_INDEX"

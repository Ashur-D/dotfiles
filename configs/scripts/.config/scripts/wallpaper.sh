#!/bin/bash

# 1. Grab the image
FULL_PATH="$1"

# 2. Actually set the wallpaper using awww!
awww img "$FULL_PATH" --transition-type random --transition-fps 144

# 3. Generate colors in the background
RANDOM_INDEX=$((RANDOM % 4))
TYPES=("scheme-expressive" "scheme-fidelity" "scheme-fruit-salad" "scheme-rainbow" "scheme-tonal-spot" "scheme-vibrant")
RANDOM_TYPE=${TYPES[$RANDOM % ${#TYPES[@]}]}

# Apply matugen and create a file to view the current colors
matugen image -m dark -t "$RANDOM_TYPE" --source-color-index "$RANDOM_INDEX" --verbose --show-colors "$FULL_PATH" 2>&1 | sed 's/\x1b[[0-9;]*m//g' > ~/dotfiles/tmp/colors.txt

# Send notification
notify-send -i "$FULL_PATH" "Theme Updated" "Mode: ${RANDOM_TYPE#scheme-} \nIndex: $RANDOM_INDEX"

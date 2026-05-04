#!/bin/bash

CACHE_DIR="$HOME/.cache/cliphist_thumbs"
mkdir -p "$CACHE_DIR"

MENU_OPTIONS=""

# Build the clipboard list
while IFS=$'\t' read -r id content; do
    # Clean up the content string to prevent Rofi markup breaking
    clean_content=$(printf "%s" "$content" | sed 's/&/&amp;/g; s/</&lt;/g; s/>/&gt;/g')

    if [[ "$content" == *"[[ binary data"* ]]; then
        THUMB="$CACHE_DIR/${id}.png"

        # If thumbnail doesn't exist or is 0 bytes, generate it
        if [ ! -s "$THUMB" ]; then
            printf "%s\t%s\n" "$id" "$content" | cliphist decode > "$THUMB"
        fi

        # Pass data safely to Rofi with the image icon
        MENU_OPTIONS+="${id}\t${content}\x00icon\x1f${THUMB}\x1fdisplay\x1f${clean_content}\n"
    else
        # Pass text data safely to Rofi
        MENU_OPTIONS+="${id}\t${content}\x00display\x1f${clean_content}\n"
    fi
done < <(cliphist list)

# Launch Rofi
SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -show-icons -markup-rows -p "Clipboard" -theme "$HOME/.config/rofi/clipboard.rasi")

# If they selected something, decode it and copy it
if [ -n "$SELECTED" ]; then
    # Extract the ID safely (everything before the first tab)
    ID=$(printf "%s" "$SELECTED" | cut -f1)

    # Fetch the exact raw line from cliphist using the ID, decode, and copy
    cliphist list | awk -F'\t' -v id="$ID" '$1 == id {print $0}' | cliphist decode | wl-copy
fi

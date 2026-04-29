#!/bin/bash

CACHE_DIR="$HOME/.cache/cliphist_thumbs"
mkdir -p "$CACHE_DIR"
find "$CACHE_DIR" -type f -mtime +1 -exec rm {} \;

MENU_OPTIONS=""

# We use a tab character to split the ID (the number) from the actual content
while IFS=$'\t' read -r id content; do
    # Reconstruct the full line so cliphist doesn't break
    line="$id\t$content"

    # Clean up the content string to prevent Rofi markup breaking
    # This escapes any rogue ampersands or brackets in your copied text
    clean_content=$(echo -n "$content" | sed 's/&/&amp;/g; s/</&lt;/g; s/>/&gt;/g')

    if [[ "$content" == *"[[ binary data"* ]]; then
        THUMB="$CACHE_DIR/${id}.png"
        if [ ! -f "$THUMB" ]; then
            echo -e "$line" | cliphist decode > "$THUMB"
        fi
        # \x1fdisplay\x1f tells Rofi to ONLY show the content, hiding the ID entirely!
        MENU_OPTIONS+="${line}\0icon\x1f${THUMB}\x1fdisplay\x1f${clean_content}\n"
    else
        MENU_OPTIONS+="${line}\0display\x1f${clean_content}\n"
    fi
done < <(cliphist list)

SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -p "Search Clipboard" -theme ~/.config/rofi/clipboard.rasi)

if [ -n "$SELECTED" ]; then
    echo -e "$SELECTED" | cliphist decode | wl-copy
fi

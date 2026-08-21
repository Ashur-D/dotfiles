# Configuration
CACHE_DIR="$HOME/.cache/cliphist_thumbs"
mkdir -p "$CACHE_DIR"

MENU_OPTIONS=""

# 1. Build the clipboard list from cliphist
while IFS=$'\t' read -r id content; do
    # Escape HTML special characters for Rofi markup
    clean_content=$(printf "%s" "$content" | sed 's/&/&amp;/g; s/</&lt;/g; s/>/&gt;/g')

    if [[ "$content" == *"[[ binary data"* ]]; then
        THUMB="$CACHE_DIR/${id}.png"
        # Generate thumbnail if it doesn't exist
        if [ ! -s "$THUMB" ]; then
            printf "%s\t%s\n" "$id" "$content" | cliphist decode > "$THUMB"
        fi

        # Override the display text for images to give it a unique name
        display_name="Image_Capture_${id}"

        # Add to menu with icon
        MENU_OPTIONS+="${id}\t${content}\x00icon\x1f${THUMB}\x1fdisplay\x1f${clean_content}\n"
    else
        # Add to menu as text
        MENU_OPTIONS+="${id}\t${content}\x00display\x1f${clean_content}\n"
    fi
done < <(cliphist list)


# 2. Launch Rofi
# Alt+Delete is mapped to Exit Code 10
SELECTED=$(echo -en "$MENU_OPTIONS" | rofi -dmenu -show-icons -markup-rows \
    -p "Clipboard" \
    -kb-custom-1 "Alt+Delete" \
    -theme "$HOME/.config/rofi/clipboard.rasi")

ROFI_EXIT=$?

# 3. Handle the outcome
if [ -n "$SELECTED" ]; then
    # Extract ID (everything before the first tab)
    ID=$(printf "%s\n" "$SELECTED" | cut -f1)

    if [ $ROFI_EXIT -eq 0 ]; then
        # Selection made (Enter): Decode and Copy
        cliphist list | awk -F'\t' -v id="$ID" '$1 == id {print $0}' | cliphist decode | wl-copy

    elif [ $ROFI_EXIT -eq 10 ]; then
        # Selection made (Alt+Delete): Delete from database and cache
        cliphist list | awk -F'\t' -v id="$ID" '$1 == id {print $0}' | cliphist delete
        rm -f "$CACHE_DIR/${ID}.png"

        # Relaunch the script immediately to refresh the menu
        exec /bin/bash "$BASH_SOURCE"
    fi
fi

#!/bin/bash

ACTION="$1"
PLAYER="--player=playerctld"

# Grab the current state before we change anything
OLD_TITLE=$(playerctl $PLAYER metadata title 2>/dev/null)
OLD_STATUS=$(playerctl $PLAYER status 2>/dev/null)

# Send the command
playerctl $PLAYER "$ACTION"

# Poll until either the song title OR the play/pause status changes
for _ in {1..20}; do
    sleep 0.05
    NEW_TITLE=$(playerctl $PLAYER metadata title 2>/dev/null)
    NEW_STATUS=$(playerctl $PLAYER status 2>/dev/null)

    # Break the loop the exact millisecond the active player updates
    if [[ "$NEW_TITLE" != "$OLD_TITLE" || "$NEW_STATUS" != "$OLD_STATUS" ]]; then
        break
    fi
done

# Give the media player a split second to update the album art URL
sleep 0.2

# Fetch the final, correct metadata
STATUS=$(playerctl $PLAYER status 2>/dev/null)
ARTIST=$(playerctl $PLAYER metadata artist 2>/dev/null)
TITLE=$(playerctl $PLAYER metadata title 2>/dev/null)
ART_URL=$(playerctl $PLAYER metadata mpris:artUrl 2>/dev/null)

# Process Album Art
ICON="audio-x-generic" # Fallback icon if no art is found

if [[ -n "$ART_URL" ]]; then
    if [[ "$ART_URL" == file://* ]]; then
        # If it's a local file, strip the 'file://' prefix
        ICON="${ART_URL#file://}"
    elif [[ "$ART_URL" == http://* || "$ART_URL" == https://* ]]; then
        # If it's a web link, download it to a safe temp folder
        curl -s "$ART_URL" -o /tmp/media-art-notify.png
        ICON="/tmp/media-art-notify.png"
    fi
fi

# Send the notification
if [[ -n "$TITLE" ]]; then
    notify-send -a "media-control" \
        -i "$ICON" \
        -h string:x-canonical-private-synchronous:sys-notify \
        -u low \
        "Media: $STATUS" \
        "$TITLE - $ARTIST"
fi

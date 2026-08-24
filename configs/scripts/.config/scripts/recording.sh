#!/bin/bash

if pgrep -f '^gpu-screen-recorder**' > /dev/null; then
    # Stop the recording
    killall -SIGINT gpu-screen-recorder

    # Wait for the process to completely finish saving before signaling Waybar
    while pgrep -f '^gpu-screen-recorder' > /dev/null; do
        sleep 0.1
    done

    notify-send -t 3000 " Recording Stopped" "Recording saved to your Videos folder."
else
    # Start the recording
    mkdir -p "$HOME/Videos"
    FILENAME="$HOME/Videos/Recording_$(date +%Y%m%d_%H%M%S).mp4"

    gpu-screen-recorder -w screen -f 60 -a default_output -o "$FILENAME" &

    # Give the process a split second to start
    sleep 0.1

    #notify-send -t 3000 " Recording Started" "Screen capture is now active."
fi

# Send signal 8 to Waybar to update the icon immediately
pkill -RTMIN+8 waybar

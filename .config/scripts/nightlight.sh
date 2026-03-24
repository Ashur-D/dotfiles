#!/bin/bash

# If hyprsunset is currently running, turn it off (Daylight Mode)
if pgrep -x "hyprsunset" > /dev/null; then
    pkill -x hyprsunset
    notify-send "  Daylight Mode" "Screen temperature restored."
else
    # If it is NOT running, start it at 4000K (Nightlight Mode)
    # The '&' pushes it to the background so the script can finish
    hyprsunset -t 4000 &
    notify-send "  Nightlight Mode" "Screen temperature set to 4000K."
fi

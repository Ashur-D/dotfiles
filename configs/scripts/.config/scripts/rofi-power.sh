#!/bin/bash

# Define exactly 6 icons for a 3x2 grid
lock=""
logout="󰍃"
reboot=""
suspend=""
hibernate="󰏤"
shutdown="⏻"

# Combine them into a single string
options="$lock\n$logout\n$reboot\n$suspend\n$hibernate\n$shutdown"

# Launch Rofi
chosen="$(echo -e "$options" | rofi -dmenu -i -theme ~/.config/rofi/power.rasi)"

# Execute commands
case $chosen in
    $shutdown)
        hyprshutdown -t 'Shutting down...' --post-cmd 'shutdown -P 0'
        ;;
    $reboot)
        hyprshutdown -t 'Restarting...' --post-cmd 'reboot'
        ;;
    $hibernate)
        systemctl hibernate
        ;;
    $suspend)
        systemctl suspend
        ;;
    $logout)
        hyprctl dispatch 'hl.dsp.exit()'
        ;;
    $lock)
        hyprlock
        ;;
esac

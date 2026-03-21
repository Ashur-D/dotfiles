#!/bin/bash

# Define the menu options
shutdown="⏻ "
reboot=" "
lock=" "

# Combine them into a single string separated by newlines
options="$shutdown\n$reboot\n$lock"

# Feed the options into Rofi
chosen="$(echo -e "$options" | rofi -dmenu -i -theme ~/.config/rofi/powermenu.rasi)"

# Execute the corresponding command
case $chosen in
    $shutdown)
        hyprshutdown -t 'Shutting down...' --post-cmd 'shutdown -P 0'
        ;;
    $reboot)
        hyprshutdown -t 'Restarting...' --post-cmd 'reboot'
        ;;
    $lock)
        hyprlock
        ;;
esac

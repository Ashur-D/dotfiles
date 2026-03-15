#!/bin/bash

# Use gum to create a selectable TUI menu
action=$(gum choose " Lock" "󰍃 Logout" "󰤄 Suspend" "󰜉 Reboot" "󰐥 Shutdown")

# Execute the corresponding command based on the selection
case $action in
    " Lock") hyprlock ;;
    "󰍃 Logout") hyprctl dispatch exit ;;
    "󰤄 Suspend") systemctl suspend ;;
    "󰜉 Reboot") systemctl reboot ;;
    "󰐥 Shutdown") systemctl poweroff ;;
esac

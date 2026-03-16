#!/bin/bash

action=$(gum choose \
    --header "  System Power Menu " \
    --show-help=false \
    --cursor="" \
    "   Lock      " \
    "  󰍃 Logout    " \
    "  󰤄 Suspend   " \
    "  󰜉 Reboot    " \
    "  󰐥 Shutdown  ")

if [ -z "$action" ]; then
    exit 0
fi

case $action in
    *"Lock"*) hyprctl dispatch exec hyprlock ;;
    *"Logout"*) hyprctl dispatch exit ;;
    *"Suspend"*) systemctl suspend ;;
    *"Reboot"*) systemctl reboot ;;
    *"Shutdown"*) systemctl poweroff ;;
esac

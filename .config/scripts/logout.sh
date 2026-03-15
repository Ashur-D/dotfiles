#!/bin/bash

action=$(gum choose \
    --header "  System Power Menu " \
    --show-help=false \
    --cursor="" \
    "        Lock" \
    "       󰍃 Logout" \
    "       󰤄 Suspend" \
    "       󰜉 Reboot" \
    "       󰐥 Shutdown")

case $action in
    *" Lock"*) hyprlock ;;
    *"󰍃 Logout"*) hyprctl dispatch exit ;;
    *"󰤄 Suspend"*) systemctl suspend ;;
    *"󰜉 Reboot"*) systemctl reboot ;;
    *"󰐥 Shutdown"*) systemctl poweroff ;;
esac

#!/usr/bin/

# Use gum with minimal styling flags to create a centered, clean menu
action=$(gum choose \
    --header "  System Power Menu " \
    --show-help=false \
    --cursor="" \
    "        Lock" \
    "       󰍃 Logout" \
    "       󰤄 Suspend" \
    "       󰜉 Reboot" \
    "       󰐥 Shutdown")

# Execute the corresponding command based on the selection using wildcards (*)
case $action in
    *" Lock"*) hyprlock ;;
    *"󰍃 Logout"*) hyprctl dispatch exit ;;
    *"󰤄 Suspend"*) systemctl suspend ;;
    *"󰜉 Reboot"*) systemctl reboot ;;
    *"󰐥 Shutdown"*) systemctl poweroff ;;
esac

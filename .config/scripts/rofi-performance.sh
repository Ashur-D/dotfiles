#!/bin/bash

# --- Configuration ---
performance_icon="󰓅" # Lightning Bolt / Performance
balanced_icon="󰾆"   # Scales / Balanced
powersaver_icon="󰌪"  # Leaf / Power Saver

# --- Define Options ---
options=(
    "Performance ${performance_icon}"
    "Balanced ${balanced_icon}"
    "Power Saver ${powersaver_icon}"
)

# --- Launch Rofi ---
# Use the new theme file and remove conflicting theme-str arguments
chosen=$(printf "%s\n" "${options[@]}" | rofi -dmenu \
    -p "Select Power Profile:" \
    -theme ~/.config/rofi/performance.rasi \
    -i -no-custom)

# --- Execute Commands based on Choice ---
# ... (rest of the script remains the same) ...
case $chosen in
    *"Performance"*)
        profile="performance"
        icon="$performance_icon"
        ;;
    *"Balanced"*)
        profile="balanced"
        icon="$balanced_icon"
        ;;
    *"Power Saver"*)
        profile="power-saver"
        icon="$powersaver_icon"
        ;;
    *)
        exit 0
        ;;
esac

if [[ -n "$profile" ]]; then
    if command -v powerprofilesctl &> /dev/null; then
        powerprofilesctl set "$profile"
        notify-send "Power Profile" "Switched to ${profile^} ${icon}" -i "$icon" -a "PowerMenu"
    else
        notify-send "Error" "powerprofilesctl command not found." -i "dialog-error" -a "PowerMenu"
    fi
fi

exit 0

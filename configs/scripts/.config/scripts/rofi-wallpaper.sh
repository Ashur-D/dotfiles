#!/usr/bin/env bash

wall_dir="$HOME/dotfiles/media/wallpapers"
thumb_dir="$HOME/dotfiles/tmp/thumbnails"
mkdir -p "$thumb_dir"

# calculate optimal columns based on screen width
if command -v hyprctl &>/dev/null; then
    mon_width=$(hyprctl monitors -j | jq '.[0].width // 1920')
elif command -v xrandr &>/dev/null; then
    mon_width=$(xrandr | grep '\*' | head -n 1 | awk '{print $1}' | cut -d'x' -f1)
else
    mon_width=1920
fi

cols=$(( (mon_width * 80 / 100) / 280 ))
[[ $cols -lt 3 ]] && cols=3
[[ $cols -gt 5 ]] && cols=5

# Use an associative array to track unique names and prevent duplicates
declare -A seen_names
options=""

for img in "$wall_dir"/*; do
    [[ -f "$img" ]] || continue

    filename=$(basename "$img")
    name="${filename%.*}"

    # Skip if we already processed a wallpaper with this exact name
    [[ -n "${seen_names[$name]}" ]] && continue
    seen_names[$name]=1

    thumb="$thumb_dir/${name}.jpg"

    # Generate a tall, high-res vertical thumbnail for the pill shape
    if [[ ! -f "$thumb" ]]; then
        magick -define jpeg:size=500x600 "$img" -thumbnail 480x600^ -gravity center -extent 480x600 -quality 80 "$thumb"
    fi

    options+="$name\0icon\x1f$thumb\n"
done

# Launch Rofi, injecting the calculated columns
choice=$(echo -e "$options" | rofi -dmenu -i -p "" -show-icons \
    -theme-str "listview { columns: $cols; }" \
    -theme ~/.config/rofi/wallpaper.rasi)

[[ -z "$choice" ]] && exit 0

# Apply wallpaper using your existing dotfiles wrapper
selected_file=$(find "$wall_dir" -type f -name "${choice}.*" | head -n 1)
if [[ -n "$selected_file" ]]; then
    ~/.config/scripts/wallpaper.sh "$selected_file"
fi

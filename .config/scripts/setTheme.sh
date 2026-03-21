#!/bin/bash

# Ensure a wallpaper path was passed to the script
if [ -z "$1" ]; then
    notify-send "Theme Error" "No wallpaper provided to the theme script."
    exit 1
fi

WALLPAPER="$1"

# 1. Generate the color scheme and set the wallpaper.
# This triggers the hooks in config.toml (Kitty, Mako, Btop, GTK).
matugen image "$WALLPAPER"

# 2. Force Waybar to reload its CSS (fixes occasional hot-reload bugs)
pkill -SIGUSR2 waybar

# 3. Restart SwayOSD so it picks up the newly generated GTK theme
systemctl --user restart swayosd-server

-- ==========================
-- Hyprland autostart
-- ==========================

hl.on("hyprland.start", function()

    -- Wallpaper and theme
    hl.exec_cmd("awww-daemon")

    -- hl.exec_cmd(
    -- [[bash -c 'awww daemon & sleep 2 && if [ ! -f ~/.config/.wall_initialized ]; then ~/.config/scripts/wallpaper.sh ~/dotfiles/media/wallpapers/wallpaper13.png && touch ~/.config/.wall_initialized && sleep 1 && touch ~/.cache/.hypr_first_boot && hyprctl reload; fi']])

    -- Wait 2 seconds, pick a random image from the wallpapers folder, and apply it
    hl.exec_cmd([[bash -c 'sleep 2 && RANDOM_WALL=$(find ~/dotfiles/media/wallpapers -type f | shuf -n 1) && ~/.config/scripts/wallpaper.sh "$RANDOM_WALL"']])

    -- Session environment for systemd/dbus/portals
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE")

    -- gtk
    hl.exec_cmd([[gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark']])
    hl.exec_cmd([[gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark']])

    -- Waybar
    hl.exec_cmd([[bash -c 'while [ ! -f ~/.config/.wall_initialized ]; do sleep 1; done; sleep 1 && waybar']])

    -- Authentication agent
    hl.exec_cmd("systemctl --user start hyprpolkitagent")

    -- Notifications
    hl.exec_cmd("mako")

    -- clipboard history
    hl.exec_cmd("wl-paste --type text --watch cliphist store -max-items 50")
    hl.exec_cmd("wl-paste --type image --watch cliphist store -max-items 50")
    hl.exec_cmd("wl-clip-persist --clipboard regular")

    -- Idle/lock handling
    hl.exec_cmd("hypridle")

    -- OSD
    hl.exec_cmd("swayosd-server")
end)

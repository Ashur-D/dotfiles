-- ==========================
-- Hyprland autostart
-- ==========================

hl.on("hyprland.start", function()
    -- Wallpaper daemon & first boot script
    hl.exec_cmd([[bash -c 'awww daemon & sleep 2 && if [ ! -f ~/.config/.wall_initialized ]; then ~/.config/scripts/wallpaper.sh ~/.config/wallpapers/wallpaper13.png && touch ~/.config/.wall_initialized && sleep 1 && touch ~/.cache/.hypr_first_boot && hyprctl reload; fi']])

    -- Session environment for systemd/dbus/portals
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE")

    -- GTK settings
    hl.exec_cmd("gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'")
    hl.exec_cmd("gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'")

    -- Bar & Polkit
    hl.exec_cmd("waybar")
    hl.exec_cmd("systemctl --user start hyprpolkitagent")

    -- Notifications
    hl.exec_cmd("mako")

    -- Clipboard history
    hl.exec_cmd("wl-paste --type text --watch cliphist store -max-items 50")
    hl.exec_cmd("wl-paste --type image --watch cliphist store -max-items 50")
    hl.exec_cmd("wl-clip-persist --clipboard regular")

    -- Idle & OSD
    hl.exec_cmd("hypridle")
    hl.exec_cmd("swayosd-server")

    -- Wallpaper daemon
    hl.exec_cmd("awww-daemon")
end)

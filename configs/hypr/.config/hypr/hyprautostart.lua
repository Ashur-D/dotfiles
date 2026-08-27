-- ==========================
-- Hyprland autostart
-- ==========================

hl.on("hyprland.start", function()

    -- 1. Session environment MUST go first (Required for portals, auth agents, and apps)
        hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE")

        -- 2. Core system agents & wallpaper daemon setup
        hl.exec_cmd("systemctl --user start hyprpolkitagent")
        hl.exec_cmd("awww-daemon")
        hl.exec_cmd([[bash -c 'awww daemon & sleep 2 && if [ ! -f ~/.config/.wall_initialized ]; then ~/.config/scripts/wallpaper.sh ~/dotfiles/media/wallpapers/wallpaper13.png && touch ~/.config/.wall_initialized && sleep 1 && touch ~/.cache/.hypr_first_boot && hyprctl reload; fi']])

        -- 3. Notifications and GTK theme settings
        hl.exec_cmd("mako")
        hl.exec_cmd([[gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark']])
        hl.exec_cmd([[gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark']])

        -- 4. Background utilities (Clipboard & Idle daemons)
        hl.exec_cmd("wl-paste --type text --watch cliphist store -max-items 50")
        hl.exec_cmd("wl-paste --type image --watch cliphist store -max-items 50")
        hl.exec_cmd("wl-clip-persist --clipboard regular")
        hl.exec_cmd("hypridle")

        -- 5. Waybar last (Safely blocked until wallpaper initialization completes)
        hl.exec_cmd([[bash -c 'while [ ! -f ~/.config/.wall_initialized ]; do sleep 1; done; sleep 1 && waybar']])

end)

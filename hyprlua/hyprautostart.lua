-- ==========================
-- Hyprland autostart
-- ==========================

-- Complex Wallpaper / Daemon Logic
-- We wrap the bash command in a string.
-- Note: Lua uses [[ ]] for multi-line or complex strings to avoid escaping issues.
hl.dispatch(hl.dsp.exec_once(
    [[bash -c 'awww daemon & sleep 2 && if [ ! -f ~/.config/.wall_initialized ]; then ~/.config/scripts/wallpaper.sh ~/.config/wallpapers/wallpaper13.png && touch ~/.config/.wall_initialized; fi']]))

-- Session environment for systemd/dbus/portals
hl.dispatch(hl.dsp.exec_once(
    "dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE"))

-- GTK Settings
hl.dispatch(hl.dsp.exec_once("gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark'"))
hl.dispatch(hl.dsp.exec_once("gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark'"))

-- Core Services
hl.dispatch(hl.dsp.exec_once("waybar"))
hl.dispatch(hl.dsp.exec_once("systemctl --user start hyprpolkitagent"))
hl.dispatch(hl.dsp.exec_once("mako"))
hl.dispatch(hl.dsp.exec_once("hypridle"))
hl.dispatch(hl.dsp.exec_once("swayosd-server"))

-- Clipboard History
hl.dispatch(hl.dsp.exec_once("wl-paste --type text --watch cliphist store -max-items 50"))
hl.dispatch(hl.dsp.exec_once("wl-paste --type image --watch cliphist store -max-items 50"))
hl.dispatch(hl.dsp.exec_once("wl-clip-persist --clipboard regular"))

-- Wallpaper and theme
hl.dispatch(hl.dsp.exec_once("awww-daemon"))

-- Cursor
-- hl.dispatch(hl.dsp.exec_once("hyprctl setcursor catppuccin-mocha-dark-cursors 24"))

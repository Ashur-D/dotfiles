-- ==========================
-- Hyprland autostart
-- ==========================

hl.on("hyprland.start", function()

    hl.exec_cmd("noctalia")
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE")
    hl.exec_cmd("systemctl --user start hyprpolkitagent")

    -- gtk
    --  hl.exec_cmd([[gsettings set org.gnome.desktop.interface gtk-theme 'adw-gtk3-dark']])
    -- hl.exec_cmd([[gsettings set org.gnome.desktop.interface color-scheme 'prefer-dark']])

    -- clipboard history
    -- hl.exec_cmd("wl-paste --type text --watch cliphist store -max-items 50")
    -- hl.exec_cmd("wl-paste --type image --watch cliphist store -max-items 50")
    -- hl.exec_cmd("wl-clip-persist --clipboard regular")
end)

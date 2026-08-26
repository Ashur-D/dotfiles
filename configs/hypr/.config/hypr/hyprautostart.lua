-- ==========================
-- Hyprland autostart
-- ==========================

hl.on("hyprland.start", function()

    hl.exec_cmd("noctalia")
    hl.exec_cmd("dbus-update-activation-environment --systemd WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE")
    hl.exec_cmd("systemctl --user start hyprpolkitagent")
end)

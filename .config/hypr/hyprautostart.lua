-- ==========================
-- Hyprland autostart
-- ==========================

hl.exec_once("hypridle")
hl.exec_once("waybar")
hl.exec_once("systemctl --user start hyprpolkitagent")
hl.exec_once("swayosd-server")
hl.exec_once("wl-paste --type text --watch cliphist store")
hl.exec_once("wl-paste --type image --watch cliphist store")
hl.exec_once("wl-clip-persist --clipboard regular")
hl.exec_once("awww-daemon")
hl.exec_once("sleep 1 && awww restore && matugen image -m dark --source-color-index 0 $(awww query | awk '{print $NF}')")

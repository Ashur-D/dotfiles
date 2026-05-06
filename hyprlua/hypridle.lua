-- ==========================
-- Hyprland Idle Logic
-- ==========================

-- General Settings
hl.set("idle:lock_cmd", "pidof hyprlock || hyprlock")
hl.set("idle:after_sleep_cmd", "hyprctl dispatch dpms on")

-- Listener 1: Lock Session (5 mins)
hl.idle.add_listener({
    timeout = 300,
    on_timeout = "loginctl lock-session"
})

-- Listener 2: Keyboard Backlight (5.5 mins)
hl.idle.add_listener({
    timeout = 330,
    on_timeout = "brightnessctl -sd '*::kbd_backlight' set 0",
    on_resume = "brightnessctl -rd '*::kbd_backlight'"
})

-- Listener 3: Monitor Power (5.5 mins)
hl.idle.add_listener({
    timeout = 330,
    on_timeout = "hyprctl dispatch dpms off",
    on_resume = "hyprctl dispatch dpms on"
})

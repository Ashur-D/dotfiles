-- ==========================
-- Hyprland windows
-- ==========================

hl.window_rule({ match = { class = ".*" }, suppress_event = "maximize" })

-- Tag all windows for default opacity
hl.window_rule({ match = { class = ".*" }, tag = "+default-opacity" })

-- Fix some dragging issues with XWayland
hl.window_rule({ match = { class = "^$", title = "^$", xwayland = 1, floating = 1, fullscreen = 0, pinned = 0 }, nofocus = true })

-- Apply default opacity after apps have had a chance to opt out
hl.window_rule({ match = { tag = "default-opacity" }, opacity = { 0.97, 0.9 } })

-- Float Steam
hl.window_rule({ match = { class = "steam" }, float = true })
hl.window_rule({ match = { class = "steam", title = "Steam" }, center = true, size = { 1100, 700 } })
hl.window_rule({ match = { class = "steam.*" }, tag = "-default-opacity", opacity = { 1, 1 } })
hl.window_rule({ match = { class = "steam", title = "Friends List" }, size = { 460, 800 } })
hl.window_rule({ match = { class = "steam" }, idle_inhibit = "fullscreen" })

-- Float satty
hl.window_rule({ match = { class = "com.gabm.satty" }, float = true, center = true, pin = true, size = { 460, 800 } })

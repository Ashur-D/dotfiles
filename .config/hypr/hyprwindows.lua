-- ==========================
-- Hyprland windows
-- ==========================

hl.window_rule({
    match = { class = ".*" },
    suppress_event = "maximize",
})

hl.window_rule({
    match = { class = ".*" },
    tag = "+default-opacity",
})

hl.window_rule({
    match = {
        class = "^$",
        title = "^$",
        xwayland = true,
        float = true,
        fullscreen = false,
        pin = false,
    },
    no_focus = true,
})

hl.window_rule({
    match = { tag = "default-opacity" },
    opacity = { 0.97, 0.9 },
})

hl.window_rule({
    match = { class = "steam" },
    float = true,
})

hl.window_rule({
    match = { class = "steam", title = "Steam" },
    center = true,
    size = { 1100, 700 },
})

hl.window_rule({
    match = { class = "steam.*" },
    tag = "-default-opacity",
    opacity = { 1, 1 },
})

hl.window_rule({
    match = { class = "steam", title = "Friends List" },
    size = { 460, 800 },
})

hl.window_rule({
    match = { class = "steam" },
    idle_inhibit = "fullscreen",
})

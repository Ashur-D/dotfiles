-- ==========================
-- Hyprlock
-- ==========================

-- Import your shared colors
require("colors")

-- BACKGROUND
hl.lock.add_background({
    monitor = "",
    path = hl.get_var("image"), -- Uses the $image variable from your colors/theme
    blur_passes = 3
})

-- GENERAL
hl.lock.set_general({
    no_fade_in = false,
    grace = 0,
    disable_loading_bar = false
})

-- INPUT FIELD
hl.lock.add_input_field({
    monitor = "",
    size = { 290, 60 },
    outline_thickness = 2,
    dots = {
        size = 0.2,
        spacing = 0.2,
        center = true
    },
    outer_color = "rgba(0, 0, 0, 0)",
    inner_color = "rgba(60, 56, 54, 0.35)",
    font_color = hl.get_var("secondary"),
    fade_on_empty = false,
    font_family = "MapleMono Bold Italic",
    placeholder_text = "<i>bello!</i>",
    hide_input = false,
    position = { 0, -200 },
    halign = "center",
    valign = "center"
})

-- DATE LABEL
hl.lock.add_label({
    monitor = "",
    text = [[cmd[update:1000] echo "$(date +"%A, %B %d")"]],
    color = hl.get_var("secondary"),
    font_size = 32,
    font_family = "MapleMono Bold Italic",
    position = { 0, 300 },
    halign = "center",
    valign = "center"
})

-- TIME LABEL
hl.lock.add_label({
    monitor = "",
    text = [[cmd[update:1000] echo "$(date +"%-I:%M")"]],
    color = hl.get_var("secondary"),
    font_size = 132,
    font_family = "MapleMono Bold Italic",
    position = { 0, 180 },
    halign = "center",
    valign = "center"
})

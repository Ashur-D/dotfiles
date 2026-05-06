-- ==========================
-- Hyprland windows
-- ==========================

-- Global Rules
hl.set("windowrule", "suppress_event maximize, match:class .*")
hl.set("windowrule", "tag +default-opacity, match:class .*")

-- Fix XWayland dragging issues
hl.set("windowrule",
    "no_focus on, match:class ^$, match:title ^$, match:xwayland 1, match:float 1, match:fullscreen 0, match:pin 0")

-- Opacity management
hl.set("windowrule", "opacity 0.97 0.9, match:tag default-opacity")

-- Steam Rules
hl.set("windowrule", "float on, match:class steam")
hl.set("windowrule", "center on, match:class steam, match:title Steam")
hl.set("windowrule", "tag -default-opacity, match:class steam.*")
hl.set("windowrule", "opacity 1 1, match:class steam.*")
hl.set("windowrule", "size 1100 700, match:class steam, match:title Steam")
hl.set("windowrule", "size 460 800, match:class steam, match:title Friends List")
hl.set("windowrule", "idle_inhibit fullscreen, match:class steam")

-- Satty Rules (Screenshot annotation)
hl.set("windowrule", "float on, match:class com.gabm.satty")
hl.set("windowrule", "size 460 800, match:class com.gabm.satty")
hl.set("windowrule", "center on, match:class com.gabm.satty")
hl.set("windowrule", "pin on, match:class com.gabm.satty")

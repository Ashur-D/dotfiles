-- ==========================
-- Hyprland windows
-- ==========================

hl.windowrulev2("suppress_event maximize", "class:.*")

-- Tag all windows for default opacity (apps can override with -default-opacity tag)
hl.windowrulev2("tag +default-opacity", "class:.*")

-- Fix some dragging issues with XWayland
hl.windowrulev2("nofocus", "class:^$,title:^$,xwayland:1,floating:1,fullscreen:0,pinned:0")

-- Apply default opacity after apps have had a chance to opt out
hl.windowrulev2("opacity 0.97 0.9", "tag:default-opacity")

-- Float Steam
hl.windowrulev2("float", "class:steam")
hl.windowrulev2("center", "class:steam,title:Steam")
hl.windowrulev2("tag -default-opacity", "class:steam.*")
hl.windowrulev2("opacity 1 1", "class:steam.*")
hl.windowrulev2("size 1100 700", "class:steam,title:Steam")
hl.windowrulev2("size 460 800", "class:steam,title:Friends List")
hl.windowrulev2("idle_inhibit fullscreen", "class:steam")

-- float satty
hl.windowrulev2("size 460 800", "class:com.gabm.satty")
hl.windowrulev2("float", "class:com.gabm.satty")
hl.windowrulev2("center", "class:com.gabm.satty")
hl.windowrulev2("pin", "class:com.gabm.satty")

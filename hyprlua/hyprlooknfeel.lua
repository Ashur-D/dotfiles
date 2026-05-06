-- ==========================
-- Hyprland look and feel
-- ==========================

-- Import colors and animations
require("colors")

-- ================ Animations ================
require("hyprAnimations.theme")

-- ================ Performance ================
hl.set("decoration:blur:enabled", true)
hl.set("decoration:shadow:enabled", false)
hl.set("misc:vfr", true)

-- ================ General ================
hl.set("general:gaps_in", 5)
hl.set("general:gaps_out", 5)
hl.set("general:border_size", 0)
hl.set("general:col.active_border", hl.get_var("primary"))
hl.set("general:col.inactive_border", hl.get_var("on_primary_container"))
hl.set("general:resize_on_border", false)
hl.set("general:allow_tearing", false)
hl.set("general:layout", "dwindle")

-- ================ Decoration ================
hl.set("decoration:rounding", 16)
hl.set("decoration:shadow:enabled", false)
hl.set("decoration:shadow:range", 2)
hl.set("decoration:shadow:render_power", 3)
hl.set("decoration:shadow:color", hl.get_var("primary"))

hl.set("decoration:blur:enabled", true)
hl.set("decoration:blur:size", 2)
hl.set("decoration:blur:passes", 2)
hl.set("decoration:blur:special", true)

-- ================ Groups ================
hl.set("group:col.border_active", hl.get_var("primary"))
hl.set("group:col.border_inactive", hl.get_var("on_primary_container"))
hl.set("group:col.border_locked_active", -1)
hl.set("group:col.border_locked_inactive", -1)

hl.set("group:groupbar:font_size", 12)
hl.set("group:groupbar:font_family", "monospace")
hl.set("group:groupbar:font_weight_active", "ultraheavy")
hl.set("group:groupbar:font_weight_inactive", "normal")
hl.set("group:groupbar:indicator_height", 0)
hl.set("group:groupbar:indicator_gap", 5)
hl.set("group:groupbar:height", 22)
hl.set("group:groupbar:text_color", "rgb(ffffff)")
hl.set("group:groupbar:text_color_inactive", "rgba(ffffff90)")
hl.set("group:groupbar:col.active", "rgba(00000040)")
hl.set("group:groupbar:col.inactive", "rgba(00000020)")
hl.set("group:groupbar:gradients", true)
hl.set("group:groupbar:gradient_rounding", 0)

-- ================ Dwindle ================
hl.set("dwindle:pseudotile", true)
hl.set("dwindle:preserve_split", true)
hl.set("dwindle:force_split", 2)

-- ================ Master ================
hl.set("master:new_status", "master")

-- ================ Misc ================
hl.set("misc:disable_hyprland_logo", true)
hl.set("misc:disable_splash_rendering", true)
hl.set("misc:focus_on_activate", true)
hl.set("misc:anr_missed_pings", 3)
hl.set("misc:on_focus_under_fullscreen", 1)

-- ================ Cursor ================
hl.set("cursor:hide_on_key_press", true)
hl.set("cursor:warp_on_change_workspace", 1)

-- ================ Binds ================
hl.set("binds:hide_special_on_workspace_change", true)

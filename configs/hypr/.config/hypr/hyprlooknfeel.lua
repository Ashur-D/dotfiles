-- ==========================
-- Hyprland look and feel
-- ==========================

-- matugen colors
hl.source("colors.conf")

-- Animations
local animation_path = os.getenv("HOME") .. "/.config/hypr/hyprAnimations"
hl.source(animation_path .. "/ash.lua")

hl.config({
    -- ================ general ================
    general = {
        gaps_in = 5,
        gaps_out = 5,
        border_size = 0,
        ["col.active_border"] = "$primary",
        ["col.inactive_border"] = "$on_primary_container",
        resize_on_border = false,
        allow_tearing = false,
        layout = "dwindle"
    },

    -- ================ decoration ================
    decoration = {
        rounding = 16,
        
        shadow = {
            enabled = false,
            range = 2,
            render_power = 3,
            color = "$primary"
        },

        blur = {
            enabled = true,
            size = 2,
            passes = 2,
            special = true
            -- brightness = 0.60,
            -- contrast = 0.75
        }
    },

    -- ================ groups ================
    group = {
        ["col.border_active"] = "$primary",
        ["col.border_inactive"] = "$on_primary_container",
        ["col.border_locked_active"] = "-1",
        ["col.border_locked_inactive"] = "-1",

        groupbar = {
            font_size = 12,
            font_family = "monospace",
            font_weight_active = "ultraheavy",
            font_weight_inactive = "normal",

            indicator_height = 0,
            indicator_gap = 5,
            height = 22,
            gaps_in = 5,
            gaps_out = 0,

            text_color = "rgb(ffffff)",
            text_color_inactive = "rgba(ffffff90)",
            ["col.active"] = "rgba(00000040)",
            ["col.inactive"] = "rgba(00000020)",

            gradients = true,
            gradient_rounding = 0,
            gradient_round_only_edges = false
        }
    },

    -- ================ dwindle ================
    dwindle = {
        pseudotile = true,
        preserve_split = true,
        force_split = 2
    },

    -- ================ misc ================
    misc = {
        vfr = true, -- moved from performance section
        disable_hyprland_logo = true,
        disable_splash_rendering  = true,
        focus_on_activate = true,
        anr_missed_pings = 3,
        on_focus_under_fullscreen = 1
    },

    cursor = {
        hide_on_key_press = true,
        warp_on_change_workspace = 1
    },

    binds = {
        hide_special_on_workspace_change = true
    }
})

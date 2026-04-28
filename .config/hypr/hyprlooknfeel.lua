-- ==========================
-- Hyprland look and feel
-- ==========================

-- Load your Matugen colors from colors.lua
local colors = require("colors")

hl.config({
    general = {
        gaps_in = 5,
        gaps_out = 10,
        border_size = 2,
        col = {
            active_border = colors.primary,
            inactive_border = colors.on_primary_container,
        },
        resize_on_border = false,
        allow_tearing = false,
        layout = "dwindle"
    },


    decoration = {
        rounding = 16,
        shadow = {
            enabled = false, -- Disabled via your battery saving config snippet
            -- range = 2,
            -- render_power = 3,
            -- color = colors.primary
        },
        blur = {
            enabled = false, -- Disabled via your battery saving config snippet
            -- size = 2,
            -- passes = 2,
            -- special = true,
            -- brightness = 0.60,
            -- contrast = 0.75
        }
    },

    group = {
        col = {
            border_active = colors.primary,
            border_inactive = colors.on_primary_container,
            border_locked_active = "-1",
            border_locked_inactive = "-1",
        },
        groupbar = {
            font_size = 12,
            font_family = "monospace",
            indicator_height = 0,
            indicator_gap = 5,
            height = 22,
            gaps_in = 5,
            gaps_out = 0,
            text_color = "rgb(ffffff)",
            text_color_inactive = "rgba(ffffff90)",
            col = {
                active = "rgba(00000040)",
                inactive = "rgba(00000020)",
            },
            gradients = true,
            gradient_rounding = 0,
            gradient_round_only_edges = false
        }
    },


    animations = {
        enabled = true,
        bezier = {
            "wind, 0.05, 0.85, 0.03, 0.97",
            "winIn, 0.07, 0.88, 0.04, 0.99",
            "winOut, 0.20, -0.15, 0, 1",
            "liner, 1, 1, 1, 1",
            "md3_standard, 0.12, 0, 0, 1",
            "md3_decel, 0.05, 0.80, 0.10, 0.97",
            "md3_accel, 0.20, 0, 0.80, 0.08",
            "overshot, 0.05, 0.85, 0.07, 1.04",
            "crazyshot, 0.1, 1.22, 0.68, 0.98",
            "hyprnostretch, 0.05, 0.82, 0.03, 0.94",
            "menu_decel, 0.05, 0.82, 0, 1",
            "menu_accel, 0.20, 0, 0.82, 0.10",
            "easeInOutCirc, 0.75, 0, 0.15, 1",
            "easeOutCirc, 0, 0.48, 0.38, 1",
            "easeOutExpo, 0.10, 0.94, 0.23, 0.98",
            "softAcDecel, 0.20, 0.20, 0.15, 1",
            "md2, 0.30, 0, 0.15, 1",
            "OutBack, 0.28, 1.40, 0.58, 1"
        },
        animation = {
            "border, 1, 1.6, liner",
            "borderangle, 1, 82, liner, loop",
            "windowsIn, 1, 3.2, winIn, slide",
            "windowsOut, 1, 2.8, easeOutCirc",
            "windowsMove, 1, 3.0, wind, slide",
            "fade, 1, 1.8, md3_decel",
            "layersIn, 1, 1.8, menu_decel, slide",
            "layersOut, 1, 1.5, menu_accel",
            "fadeLayersIn, 1, 1.6, menu_decel",
            "fadeLayersOut, 1, 1.8, menu_accel",
            "workspaces, 1, 4.0, menu_decel, slide",
            "specialWorkspace, 1, 2.3, md3_decel, slidefadevert 15%"
        }
    },

    dwindle = {
        pseudotile = true,
        preserve_split = true,
        force_split = 2
    },

    master = {
        new_status = "master"
    },

    misc = {
        vfr = true,
        disable_hyprland_logo = true,
        disable_splash_rendering = true,
        focus_on_activate = true,
        anr_missed_pings = 3,
        on_focus_under_fullscreen = true
    },

    cursor = {
        hide_on_key_press = true,
        warp_on_change_workspace = 1
    },

    binds = {
        hide_special_on_workspace_change = true
    }
})

-- ==========================
-- Hyprland Main Config
-- ==========================

local config_dir = os.getenv("HOME") .. "/.config/hypr/"

dofile(config_dir .. "hyprautostart.lua")
dofile(config_dir .. "hyprenvs.lua")
dofile(config_dir .. "hyprmonitor.lua")
dofile(config_dir .. "hyprinput.lua")
dofile(config_dir .. "hyprlooknfeel.lua")
dofile(config_dir .. "hyprbindings.lua")
dofile(config_dir .. "hyprwindows.lua")


if hl.plugin.hyprglass then
    local hg = hl.plugin.hyprglass

    hg.config({
        default_theme = "dark",
        default_preset = "glass", -- Your new preset is now the default
        tint_color = 0x8899aa22,

        brightness = 0.9,
        dark = { brightness = 0.82 },
        light = { adaptive_boost = 0.5 },

        layers = { enabled = 1 },
    })

    -- Layer surfaces: each call whitelists the namespace and configures it
    -- Note: You can override the default preset for specific layers here
    hg.layer("waybar", { preset = "apple", mask_threshold = 0.05 })
    hg.layer("swaync")
    hg.layer("quickshell:bezel", { preset = "ui", mask_threshold = 0.3 })
    hg.layer("debug-panel", { exclude = true })

    -- The "apple" preset transcribed from your screenshot
    hg.preset("apple", {
        blur_strength          = 2.2,
        blur_iterations        = 3,
        refraction_strength    = 0.55,
        chromatic_aberration   = 0.3,
        fresnel_strength       = 0.5,
        specular_strength      = 0.75,
        edge_thickness         = 0.05,
        lens_distortion        = 0.3,
        dark  = { brightness = 0.82, contrast = 0.90, saturation = 0.80, vibrancy = 0.15, adaptive_dim = 0.4 },
        light = { brightness = 1.12, contrast = 0.92, saturation = 0.85, vibrancy = 0.12, adaptive_boost = 0.4 },
    })

    hg.preset("glass", {
        blur_strength = 2.2,
        blur_iterations = 3,
        chromatic_aberration = 0.8,
        fresnel_strength = 0.8,
        edge_thickness = 0.08,
        tint_color = 0x2011111B,
        lens_distortion = 0.9,
        brightness = 1.0,
        contrast = 1.7,
        saturation = 1,
        vibrancy = 0.8,
        vibrancy_darkness = 1,
        adaptive_boost = 0.5
    })

    -- Your other presets
    hg.preset("clear", {
        glass_opacity = 0.8,
        blur_strength = 1.5,
        dark = { brightness = 0.7 },
        light = { brightness = 1.2 },
    })

    hg.preset("contrasted", {
        inherits = "high_contrast",
        contrast = 1.2,
        adaptive_dim = 1.5,
        dark = { tint_color = 0x02142aa9 },
    })
end

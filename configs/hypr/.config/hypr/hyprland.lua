-- ==========================
-- Hyprland Main Config
-- ==========================

local config_dir = os.getenv("HOME") .. "/.config/hypr/"

dofile(config_dir .. "hyprautostart.lua")
dofile(config_dir .. "hyprenvs.lua")
dofile(config_dir .. "hyprinput.lua")
dofile(config_dir .. "hyprlooknfeel.lua")
dofile(config_dir .. "hyprbindings.lua")
dofile(config_dir .. "hyprwindows.lua")
dofile(config_dir .. "hyprglass.lua")

-- ==========================
-- Hyprland monitor
-- ==========================

hl.monitor({ output = "DP-1", mode = "1920x1080@180", position = "0x0", scale = 1 })

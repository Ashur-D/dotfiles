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

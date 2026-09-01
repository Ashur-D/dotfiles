-- ==========================
-- Hyprland bindings
-- ==========================
local terminal = "kitty"
local scripts  = "~/.config/scripts/"
local mod = "ALT"

-- ---------------- terminal & yazi ----------------
hl.bind(mod .. " + return", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind(mod .. " + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })

-- ---------------- Close windows ----------------
hl.bind(mod .. " + W", hl.dsp.window.close(), { description = "Close active window" })

-- ---------------- Rofi Menus ----------------
hl.bind(mod .. " + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind(mod .. " + Escape", hl.dsp.exec_cmd(scripts .. "/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind(mod .. " + SHIFT + Escape", hl.dsp.exec_cmd(scripts .. "/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind(mod .. " + SUPER + SPACE", hl.dsp.exec_cmd(scripts .. "/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind(mod .. " + V", hl.dsp.exec_cmd(scripts .. "rofi-clipboard.sh"), { description = "Clipboard history" })

-- ---------------- media ----------------
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd("~/.config/scripts/mako-media.sh play-pause"))
hl.bind("XF86AudioNext", hl.dsp.exec_cmd("~/.config/scripts/mako-media.sh next"))

-- ---------------- screenshots & recording ----------------
hl.bind("PRINT", hl.dsp.exec_cmd([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-1 -o ~/Pictures"), { description = "Screenshot DP-1 monitor" })
hl.bind(mod .. " + SHIFT + R", hl.dsp.exec_cmd("~/.config/scripts/recording.sh"), {description = "recording"})

-- ---------------- nightlight ----------------
hl.bind(mod .. " + CTRL + N", hl.dsp.exec_cmd("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })

-- ---------------- waybar ----------------
hl.bind(mod .. " + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -x waybar || waybar"), { description = "Toggle top bar" })

-- ---------------- Control tiling ----------------
hl.bind(mod .. " + J", hl.dsp.layout("togglesplit"), { description = "toggle split" })
hl.bind(mod .. " + P", hl.dsp.window.pseudo(), { description = "Pseudo window" })
hl.bind(mod .. " + T", hl.dsp.window.float(), { description = "Toggle window floating/tiling" })
hl.bind(mod .. " + F", hl.dsp.window.fullscreen({ mode = "maximized" }), { description = "Full width" })
hl.bind(mod .. " + SUPER + F", hl.dsp.window.fullscreen({ mode = "fullscreen" }), { description = "Full screen" })

-- ---------------- workspaces ----------------
for i = 1, 10 do
    local code = "code:" .. (9 + i)
    hl.bind(mod .. " + " .. code, hl.dsp.focus({ workspace = i }), { description = "Switch to workspace " .. i })
    hl.bind(mod .. " + SHIFT + " .. code, hl.dsp.window.move({ workspace = i }), { description = "Move window to workspace " .. i })
end

-- ----------------  Scratchpads ----------------
local keys = { "A", "S", "D" }

for _, key in ipairs(keys) do
    hl.bind(mod .. " + " .. key, hl.dsp.workspace.toggle_special(key))
        hl.bind(mod .. " + SUPER + " .. key, hl.dsp.window.move({ workspace = "special:" .. key, follow = false }))
end

-- ---------------- Move focus and windows ----------------
local directions = { "left", "right", "up", "down" }
for _, dir in ipairs(directions) do
    hl.bind(mod .. " + " .. dir, hl.dsp.focus({ direction = dir }), { description = "Move focus " .. dir })
    hl.bind(mod .. " + SHIFT + " .. dir, hl.dsp.window.swap({ direction = dir }), { description = "Swap window " .. dir })
end

-- ---------------- Resize active window ----------------
hl.bind(mod .. " + code:20", hl.dsp.window.resize({ x = -100, y = 0, relative = true }), { description = "Expand window left" })       -- - key
hl.bind(mod .. " + code:21", hl.dsp.window.resize({ x = 100, y = 0, relative = true }),  { description = "Shrink window left" })       -- = key
hl.bind(mod .. " + SHIFT + code:20", hl.dsp.window.resize({ x = 0, y = -100, relative = true }), { description = "Shrink window up" })
hl.bind(mod .. " + SHIFT + code:21", hl.dsp.window.resize({ x = 0, y = 100, relative = true }),  { description = "Expand window down" })

-- ---------------- Scroll through existing workspaces withmod .. "" + scroll ----------------
hl.bind(mod .. " + mouse_down", hl.dsp.focus({ workspace = "e+1" }), { description = "Scroll active workspace forward" })
hl.bind(mod .. " + mouse_up",   hl.dsp.focus({ workspace = "e-1" }), { description = "Scroll active workspace backward" })

-- ---------------- Move/resize windows with mainMod + LMB/RMB and dragging ----------------
hl.bind(mod .. " + mouse:272", hl.dsp.window.drag(),   { mouse = true, description = "Move window" })
hl.bind(mod .. " + mouse:273", hl.dsp.window.resize(), { mouse = true, description = "Resize window" })

-- ----------------  groups/tabs ----------------
hl.bind(mod .. " + G", hl.dsp.group.toggle(), { description = "Toggle window grouping" })
hl.bind(mod .. " + SUPER + G", hl.dsp.window.move({ out_of_group = true }), { description = "Move active window out of group" })

hl.bind(mod .. " + SHIFT + A", hl.dsp.group.prev(), { description = "Move grouped window focus left" })
hl.bind(mod .. " + SHIFT + D", hl.dsp.group.next(), { description = "Move grouped window focus right" })

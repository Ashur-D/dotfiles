-- ==========================
-- Hyprland bindings (Lua)
-- ==========================

-- Variables
local terminal = "kitty"
local osd_client = "swayosd-client"
local mod = "SUPER"

-- ---------------- Terminal & Yazi ----------------
hl.bind(mod .. ", return", hl.dsp.exec(terminal), { description = "Terminal" })
hl.bind(mod .. ", E", hl.dsp.exec(terminal .. " -e yazi"), { description = "File manager" })

-- ---------------- Close windows ----------------
hl.bind(mod .. ", W", hl.dsp.window.kill(), { description = "Close active window" })

-- ---------------- Rofi Menus ----------------
hl.bind(mod .. ", SPACE", hl.dsp.exec("rofi -show drun"), { description = "Launch apps" })
hl.bind(mod .. ", Escape", hl.dsp.exec("~/.config/scripts/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind(mod .. " + SHIFT, Escape", hl.dsp.exec("~/.config/scripts/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind(mod .. " + ALT, SPACE", hl.dsp.exec("~/.config/scripts/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind(mod .. ", V", hl.dsp.exec("bash " .. hl.env.HOME .. "/.config/scripts/rofi-clipboard.sh"), { description = "Clipboard history" })

-- ---------------- Screenshots & Recording ----------------
-- Use [[ ]] for complex bash strings with quotes and $ signs
hl.bind(", PRINT", hl.dsp.exec([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT, PRINT", hl.dsp.exec("hyprshot -m output -m DP-2 -o ~/Pictures"), { description = "Screenshot DP-2 monitor" })

-- ---------------- System Controls ----------------
hl.bind(mod .. " + CTRL, N", hl.dsp.exec("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })
hl.bind(mod .. " + SHIFT, SPACE", hl.dsp.exec("pkill -x waybar || waybar"), { description = "Toggle top bar" })

-- ---------------- Control Tiling ----------------
hl.bind(mod .. ", J", hl.dsp.layout.toggle_split(), { description = "Toggle split" })
hl.bind(mod .. ", P", hl.dsp.layout.pseudo(), { description = "Pseudo window" })
hl.bind(mod .. ", T", hl.dsp.window.toggle_floating(), { description = "Toggle window floating/tiling" })
hl.bind(mod .. ", F", hl.dsp.window.fullscreen({ action = "maximized" }), { description = "Full width" })
hl.bind(mod .. " + ALT, F", hl.dsp.window.fullscreen({ action = "fullscreen" }), { description = "Full screen" })

-- ---------------- Move Focus ----------------
hl.bind(mod .. ", left", hl.dsp.window.focus({ direction = "l" }), { description = "Move focus left" })
hl.bind(mod .. ", right", hl.dsp.window.focus({ direction = "r" }), { description = "Move focus right" })
hl.bind(mod .. ", up", hl.dsp.window.focus({ direction = "u" }), { description = "Move focus up" })
hl.bind(mod .. ", down", hl.dsp.window.focus({ direction = "d" }), { description = "Move focus down" })

-- ---------------- Swap Windows ----------------
hl.bind(mod .. " + SHIFT, left", hl.dsp.window.move({ direction = "l" }), { description = "Swap window left" })
hl.bind(mod .. " + SHIFT, right", hl.dsp.window.move({ direction = "r" }), { description = "Swap window right" })
hl.bind(mod .. " + SHIFT, up", hl.dsp.window.move({ direction = "u" }), { description = "Swap window up" })
hl.bind(mod .. " + SHIFT, down", hl.dsp.window.move({ direction = "d" }), { description = "Swap window down" })

-- ---------------- Resize Active Window ----------------
hl.bind(mod .. ", code:20", hl.dsp.window.resize({ x = -100, y = 0 }), { description = "Expand window left" })
hl.bind(mod .. ", code:21", hl.dsp.window.resize({ x = 100, y = 0 }), { description = "Shrink window left" })
hl.bind(mod .. " + SHIFT, code:20", hl.dsp.window.resize({ x = 0, y = -100 }), { description = "Shrink window up" })
hl.bind(mod .. " + SHIFT, code:21", hl.dsp.window.resize({ x = 0, y = 100 }), { description = "Expand window down" })

-- ---------------- Workspace Controls ----------------
-- Scroll through workspaces
hl.bind(mod .. ", mouse_down", hl.dsp.workspace.focus({ workspace = "e+1" }), { description = "Scroll active workspace forward" })
hl.bind(mod .. ", mouse_up", hl.dsp.workspace.focus({ workspace = "e-1" }), { description = "Scroll active workspace backward" })

-- Mouse Dragging
hl.bind(mod .. ", mouse:272", hl.dsp.window.drag(), { mouse = true, description = "Move window" })
hl.bind(mod .. ", mouse:273", hl.dsp.window.resize(), { mouse = true, description = "Resize window" })

-- Switch to Workspace (1-10) using keycodes
for i = 0, 9 do
    local code = 10 + i
    local ws = i + 1
    hl.bind(mod .. ", code:" .. code, hl.dsp.workspace.focus({ workspace = tostring(ws) }), { description = "Switch to workspace " .. ws })
    hl.bind(mod .. " + SHIFT, code:" .. code, hl.dsp.window.move_to_workspace({ workspace = tostring(ws) }), { description = "Move window to workspace " .. ws })
end

-- ---------------- Media Controls ----------------
-- bindld (locked + repeat)
hl.bind(", XF86AudioNext", hl.dsp.exec(osd_client .. " --playerctl next"), { locked = true, repeat_key = true, description = "Next track" })
hl.bind(", XF86AudioPause", hl.dsp.exec(osd_client .. " --playerctl play-pause"), { locked = true, repeat_key = true, description = "Pause" })
hl.bind(", XF86AudioPlay", hl.dsp.exec(osd_client .. " --playerctl play-pause"), { locked = true, repeat_key = true, description = "Play" })
hl.bind(", XF86AudioPrev", hl.dsp.exec(osd_client .. " --playerctl previous"), { locked = true, repeat_key = true, description = "Previous track" })

-- ---------------- Special Workspaces ----------------
hl.workspace_rule("special:anything", { gaps_in = 0, gaps_out = 0 })
hl.workspace_rule("special:spotify", { gaps_in = 0, gaps_out = 0 })
hl.workspace_rule("special:discord", { gaps_in = 0, gaps_out = 0 })

hl.bind(mod .. ", A", hl.dsp.workspace.toggle_special("anything"))
hl.bind(mod .. ", S", hl.dsp.workspace.toggle_special("spotify"))
hl.bind(mod .. ", D", hl.dsp.workspace.toggle_special("discord"))

-- Move windows silently to scratchpads
hl.bind(mod .. " + ALT, A", hl.dsp.window.move_to_workspace({ workspace = "special:anything", silent = true }))
hl.bind(mod .. " + ALT, S", hl.dsp.window.move_to_workspace({ workspace = "special:spotify", silent = true }))
hl.bind(mod .. " + ALT, D", hl.dsp.window.move_to_workspace({ workspace = "special:discord", silent = true }))

-- ---------------- Groups/Tabs ----------------
hl.bind(mod .. ", G", hl.dsp.group.toggle(), { description = "Toggle window grouping" })
hl.bind(mod .. " + ALT, G", hl.dsp.group.move_out(), { description = "Move active window out of group" })
hl.bind(mod .. " + SHIFT, A", hl.dsp.group.cycle_active({ direction = "b" }), { description = "Move grouped window focus left" })
hl.bind(mod .. " + SHIFT, D", hl.dsp.group.cycle_active({ direction = "f" }), { description = "Move grouped window focus right" })

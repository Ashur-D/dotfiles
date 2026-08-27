-- ==========================
-- Hyprland bindings
-- ==========================
local terminal  = "kitty"

-- ---------------- terminal & yazi ----------------
hl.bind("SUPER + return", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind("SUPER + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })

-- ---------------- Close windows ----------------
hl.bind("SUPER + W", hl.dsp.window.close(), { description = "Close active window" })

-- ---------------- Rofi Menus ----------------
hl.bind("SUPER + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind("SUPER + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind("SUPER + SHIFT + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind("SUPER + ALT + SPACE", hl.dsp.exec_cmd("~/.config/scripts/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind("SUPER + V", hl.dsp.exec_cmd("/bin/bash $HOME/.config/scripts/rofi-clipboard.sh"), { description = "Clipboard history" })

-- ---------------- media ----------------
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd("~/.config/scripts/mako-media.sh play-pause"))
hl.bind("XF86AudioNext", hl.dsp.exec_cmd("~/.config/scripts/mako-media.sh next"))

-- ---------------- screenshots & recording ----------------
hl.bind("PRINT", hl.dsp.exec_cmd([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-1 -o ~/Pictures"), { description = "Screenshot DP-1 monitor" })
hl.bind("SUPER + SHIFT + R", hl.dsp.exec_cmd("~/.config/scripts/recording.sh"), {description = "recording"})

-- ---------------- nightlight ----------------
hl.bind("SUPER + CTRL + N", hl.dsp.exec_cmd("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })

-- ---------------- waybar ----------------
hl.bind("SUPER + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -x waybar || waybar"), { description = "Toggle top bar" })

-- ---------------- Control tiling ----------------
hl.bind("SUPER + J", hl.dsp.layout("togglesplit"), { description = "toggle split" })
hl.bind("SUPER + P", hl.dsp.window.pseudo(), { description = "Pseudo window" })
hl.bind("SUPER + T", hl.dsp.window.float(), { description = "Toggle window floating/tiling" })
hl.bind("SUPER + F", hl.dsp.window.fullscreen({ mode = "maximized" }), { description = "Full width" })
hl.bind("SUPER + ALT + F", hl.dsp.window.fullscreen({ mode = "fullscreen" }), { description = "Full screen" })

-- ---------------- Move focus ----------------
hl.bind("SUPER + left",  hl.dsp.focus({ direction = "left" }),  { description = "Move focus left" })
hl.bind("SUPER + right", hl.dsp.focus({ direction = "right" }), { description = "Move focus right" })
hl.bind("SUPER + up",    hl.dsp.focus({ direction = "up" }),    { description = "Move focus up" })
hl.bind("SUPER + down",  hl.dsp.focus({ direction = "down" }),  { description = "Move focus down" })

-- ---------------- Swap active windows ----------------
hl.bind("SUPER + SHIFT + left",  hl.dsp.window.swap({ direction = "left" }),  { description = "Swap window to the left" })
hl.bind("SUPER + SHIFT + right", hl.dsp.window.swap({ direction = "right" }), { description = "Swap window to the right" })
hl.bind("SUPER + SHIFT + up",    hl.dsp.window.swap({ direction = "up" }),    { description = "Swap window up" })
hl.bind("SUPER + SHIFT + down",  hl.dsp.window.swap({ direction = "down" }),  { description = "Swap window down" })

-- ---------------- Resize active window ----------------
hl.bind("SUPER + code:20", hl.dsp.window.resize({ x = -100, y = 0, relative = true }), { description = "Expand window left" })       -- - key
hl.bind("SUPER + code:21", hl.dsp.window.resize({ x = 100, y = 0, relative = true }),  { description = "Shrink window left" })       -- = key
hl.bind("SUPER + SHIFT + code:20", hl.dsp.window.resize({ x = 0, y = -100, relative = true }), { description = "Shrink window up" })
hl.bind("SUPER + SHIFT + code:21", hl.dsp.window.resize({ x = 0, y = 100, relative = true }),  { description = "Expand window down" })
-- ---------------- Scroll through existing workspaces with SUPER + scroll ----------------
hl.bind("SUPER + mouse_down", hl.dsp.focus({ workspace = "e+1" }), { description = "Scroll active workspace forward" })
hl.bind("SUPER + mouse_up",   hl.dsp.focus({ workspace = "e-1" }), { description = "Scroll active workspace backward" })

-- ---------------- Move/resize windows with mainMod + LMB/RMB and dragging ----------------
hl.bind("SUPER + mouse:272", hl.dsp.window.drag(),   { mouse = true, description = "Move window" })
hl.bind("SUPER + mouse:273", hl.dsp.window.resize(), { mouse = true, description = "Resize window" })

-- ---------------- workspaces ----------------
-- Switch workspaces with SUPER + [0-9], move windows with SUPER + SHIFT + [0-9]
for i = 1, 10 do
    local code = "code:" .. (9 + i)
    hl.bind("SUPER + " .. code, hl.dsp.focus({ workspace = i }), { description = "Switch to workspace " .. i })
    hl.bind("SUPER + SHIFT + " .. code, hl.dsp.window.move({ workspace = i }), { description = "Move window to workspace " .. i })
end

-- ---------------- special workspaces ----------------
hl.workspace_rule({ workspace = "special:anything" })
hl.workspace_rule({ workspace = "special:spotify" })
hl.workspace_rule({ workspace = "special:discord" })

-- ---------------- Toggle specific scratchpads ----------------
hl.bind("SUPER + A", hl.dsp.workspace.toggle_special("anything"))
hl.bind("SUPER + S", hl.dsp.workspace.toggle_special("spotify"))
hl.bind("SUPER + D", hl.dsp.workspace.toggle_special("discord"))

-- ---------------- Move windows silently to those exact same scratchpads ----------------
hl.bind("SUPER + ALT + A", hl.dsp.window.move({ workspace = "special:anything", follow = false }), { description = "Move window to scratchpad 1" })
hl.bind("SUPER + ALT + S", hl.dsp.window.move({ workspace = "special:spotify",  follow = false }), { description = "Move window to scratchpad 2" })
hl.bind("SUPER + ALT + D", hl.dsp.window.move({ workspace = "special:discord",  follow = false }), { description = "Move window to scratchpad 3" })

-- ----------------  groups/tabs ----------------
hl.bind("SUPER + G", hl.dsp.group.toggle(), { description = "Toggle window grouping" })
hl.bind("SUPER + ALT + G", hl.dsp.window.move({ out_of_group = true }), { description = "Move active window out of group" })

hl.bind("SUPER + SHIFT + A", hl.dsp.group.prev(), { description = "Move grouped window focus left" })
hl.bind("SUPER + SHIFT + D", hl.dsp.group.next(), { description = "Move grouped window focus right" })

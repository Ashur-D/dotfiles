-- ==========================
-- Hyprland bindings
-- ==========================

local terminal = "kitty"
local osdclient = "swayosd-client"
local mainMod = "SUPER"

hl.bind(mainMod .. " + RETURN", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind(mainMod .. " + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })
hl.bind(mainMod .. " + W", hl.dsp.window.close(), { description = "Close active window" })

hl.bind(mainMod .. " + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind(mainMod .. " + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind(mainMod .. " + SHIFT + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind(mainMod .. " + ALT + SPACE", hl.dsp.exec_cmd("~/.config/scripts/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind(mainMod .. " + V", hl.dsp.exec_cmd("/bin/bash $HOME/.config/scripts/rofi-clipboard.sh"), { description = "Clipboard history" })

hl.bind("", "PRINT", hl.dsp.exec_cmd([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_\$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-2 -o ~/Pictures"), { description = "Screenshot DP-2 monitor" })

hl.bind(mainMod .. " + CTRL + N", hl.dsp.exec_cmd("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })
hl.bind(mainMod .. " + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -x waybar || waybar"), { description = "Toggle top bar" })

hl.bind(mainMod .. " + J", hl.dsp.layout("togglesplit"), { description = "toggle split" })
hl.bind(mainMod .. " + P", hl.dsp.window.pseudo(), { description = "Pseudo window" })
hl.bind(mainMod .. " + T", hl.dsp.window.float({ action = "toggle" }), { description = "Toggle window floating/tiling" })
hl.bind(mainMod .. " + F", hl.dsp.window.fullscreen({ mode = 1 }), { description = "Full width" })
hl.bind(mainMod .. " + ALT + F", hl.dsp.window.fullscreen({ mode = 0 }), { description = "Full screen" })

hl.bind(mainMod .. " + left", hl.dsp.focus({ direction = "left" }), { description = "Move focus left" })
hl.bind(mainMod .. " + right", hl.dsp.focus({ direction = "right" }), { description = "Move focus right" })
hl.bind(mainMod .. " + up", hl.dsp.focus({ direction = "up" }), { description = "Move focus up" })
hl.bind(mainMod .. " + down", hl.dsp.focus({ direction = "down" }), { description = "Move focus down" })

hl.bind(mainMod .. " + SHIFT + left", hl.dsp.window.move({ direction = "left" }), { description = "Swap window to the left" })
hl.bind(mainMod .. " + SHIFT + right", hl.dsp.window.move({ direction = "right" }), { description = "Swap window to the right" })
hl.bind(mainMod .. " + SHIFT + up", hl.dsp.window.move({ direction = "up" }), { description = "Swap window up" })
hl.bind(mainMod .. " + SHIFT + down", hl.dsp.window.move({ direction = "down" }), { description = "Swap window down" })

-- Workspaces 1-10 (10 maps to key 0)
for i = 1, 10 do
    local key = tostring(i % 10)
    hl.bind(mainMod .. " + " .. key, hl.dsp.focus({ workspace = i }))
    hl.bind(mainMod .. " + SHIFT + " .. key, hl.dsp.window.move({ workspace = i }))
end

hl.bind("XF86AudioNext", hl.dsp.exec_cmd(osdclient .. " --playerctl next"), { description = "Next track" })
hl.bind("XF86AudioPause", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Pause" })
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Play" })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd(osdclient .. " --playerctl previous"), { description = "Previous track" })

-- Scratchpads
hl.bind(mainMod .. " + A", hl.dsp.workspace.toggle_special("anything"))
hl.bind(mainMod .. " + S", hl.dsp.workspace.toggle_special("spotify"))
hl.bind(mainMod .. " + D", hl.dsp.workspace.toggle_special("discord"))

hl.bind(mainMod .. " + ALT + A", hl.dsp.window.move({ workspace = "special:anything" }))
hl.bind(mainMod .. " + ALT + S", hl.dsp.window.move({ workspace = "special:spotify" }))
hl.bind(mainMod .. " + ALT + D", hl.dsp.window.move({ workspace = "special:discord" }))

-- Groups / Tabs
hl.bind(mainMod .. " + G", hl.dsp.group.toggle(), { description = "Toggle window grouping" })
hl.bind(mainMod .. " + ALT + G", hl.dsp.group.moveout(), { description = "Move active window out of group" })
hl.bind(mainMod .. " + SHIFT + A", hl.dsp.group.change_active("b"), { description = "Move grouped window focus left" })
hl.bind(mainMod .. " + SHIFT + D", hl.dsp.group.change_active("f"), { description = "Move grouped window focus right" })

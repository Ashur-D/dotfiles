-- ==========================
-- Hyprland bindings
-- ==========================

local terminal = "kitty"
local osdclient = "swayosd-client"

hl.bind("SUPER + RETURN", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind("SUPER + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })
hl.bind("SUPER + W", hl.dsp.window.close(), { description = "Close active window" })

hl.bind("SUPER + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind("SUPER + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind("SUPER + SHIFT + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind("SUPER + ALT + SPACE", hl.dsp.exec_cmd("~/.config/scripts/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind("SUPER + V", hl.dsp.exec_cmd("/bin/bash $HOME/.config/scripts/rofi-clipboard.sh"), { description = "Clipboard history" })

hl.bind("PRINT", hl.dsp.exec_cmd([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_\$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-2 -o ~/Pictures"), { description = "Screenshot DP-2 monitor" })

hl.bind("SUPER + CTRL + N", hl.dsp.exec_cmd("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })
hl.bind("SUPER + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -x waybar || waybar"), { description = "Toggle top bar" })

hl.bind("SUPER + J", hl.dsp.layout("togglesplit"), { description = "toggle split" })
hl.bind("SUPER + P", hl.dsp.window.pseudo(), { description = "Pseudo window" })
hl.bind("SUPER + T", hl.dsp.window.float({ action = "toggle" }), { description = "Toggle window floating/tiling" })
hl.bind("SUPER + F", hl.dsp.window.fullscreen({ mode = 1 }), { description = "Full width" })
hl.bind("SUPER + ALT + F", hl.dsp.window.fullscreen({ mode = 0 }), { description = "Full screen" })

hl.bind("SUPER + left", hl.dsp.focus({ direction = "l" }), { description = "Move focus left" })
hl.bind("SUPER + right", hl.dsp.focus({ direction = "r" }), { description = "Move focus right" })
hl.bind("SUPER + up", hl.dsp.focus({ direction = "u" }), { description = "Move focus up" })
hl.bind("SUPER + down", hl.dsp.focus({ direction = "d" }), { description = "Move focus down" })

hl.bind("SUPER + SHIFT + left", hl.dsp.window.move({ direction = "l" }), { description = "Swap window to the left" })
hl.bind("SUPER + SHIFT + right", hl.dsp.window.move({ direction = "r" }), { description = "Swap window to the right" })
hl.bind("SUPER + SHIFT + up", hl.dsp.window.move({ direction = "u" }), { description = "Swap window up" })
hl.bind("SUPER + SHIFT + down", hl.dsp.window.move({ direction = "d" }), { description = "Swap window down" })

for i = 1, 10 do
    local keycode = "code:" .. tostring(i + 9)
    hl.bind("SUPER + " .. keycode, hl.dsp.focus({ workspace = tostring(i) }), { description = "Switch to workspace " .. i })
    hl.bind("SUPER + SHIFT + " .. keycode, hl.dsp.window.movetoworkspace({ workspace = tostring(i) }), { description = "Move window to workspace " .. i })
end

hl.bind("XF86AudioNext", hl.dsp.exec_cmd(osdclient .. " --playerctl next"), { description = "Next track" })
hl.bind("XF86AudioPause", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Pause" })
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Play" })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd(osdclient .. " --playerctl previous"), { description = "Previous track" })

hl.workspace("special:anything")
hl.workspace("special:spotify")
hl.workspace("special:discord")

hl.bind("SUPER + A", hl.dsp.workspace({ name = "special:anything" }))
hl.bind("SUPER + S", hl.dsp.workspace({ name = "special:spotify" }))
hl.bind("SUPER + D", hl.dsp.workspace({ name = "special:discord" }))

hl.bind("SUPER + ALT + A", hl.dsp.window.movetoworkspacesilent({ workspace = "special:anything" }), { description = "Move window to scratchpad 1" })
hl.bind("SUPER + ALT + S", hl.dsp.window.movetoworkspacesilent({ workspace = "special:spotify" }), { description = "Move window to scratchpad 2" })
hl.bind("SUPER + ALT + D", hl.dsp.window.movetoworkspacesilent({ workspace = "special:discord" }), { description = "Move window to scratchpad 3" })

hl.bind("SUPER + G", hl.dsp.group.toggle(), { description = "Toggle window grouping" })
hl.bind("SUPER + ALT + G", hl.dsp.group.moveout(), { description = "Move active window out of group" })
hl.bind("SUPER + SHIFT + A", hl.dsp.group.change_active("b"), { description = "Move grouped window focus left" })
hl.bind("SUPER + SHIFT + D", hl.dsp.group.change_active("f"), { description = "Move grouped window focus right" })


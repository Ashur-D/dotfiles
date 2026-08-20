-- ==========================
-- Hyprland bindings
-- ==========================

local osdclient = "swayosd-client"
local terminal = "kitty"

-- Terminal & yazi
hl.bind("SUPER + RETURN", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind("SUPER + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })

-- Close windows
hl.bind("SUPER + W", hl.dsp.killactive(), { description = "Close active window" })

-- Rofi Menus
hl.bind("SUPER + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind("SUPER + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-power.sh"), { description = "Launch powermenu" })
hl.bind("SUPER + SHIFT + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-performance.sh"), { description = "Launch performance menu" })
hl.bind("SUPER + ALT + SPACE", hl.dsp.exec_cmd("~/.config/scripts/rofi-wallpaper.sh"), { description = "Launch wallpaper" })
hl.bind("SUPER + V", hl.dsp.exec_cmd("/bin/bash $HOME/.config/scripts/rofi-clipboard.sh"), { description = "Clipboard history" })

-- Screenshots & recording
hl.bind("PRINT", hl.dsp.exec_cmd([[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_\$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]]))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-2 -o ~/Pictures"), { description = "Screenshot DP-2 monitor" })

-- Nightlight
hl.bind("SUPER + CTRL + N", hl.dsp.exec_cmd("~/.config/scripts/hypr-nightlight.sh"), { description = "Toggle nightlight" })

-- Waybar
hl.bind("SUPER + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -x waybar || waybar"), { description = "Toggle top bar" })

-- Control tiling
hl.bind("SUPER + J", hl.dsp.layoutmsg("togglesplit"), { description = "toggle split" })
hl.bind("SUPER + P", hl.dsp.pseudo(), { description = "Pseudo window" })
hl.bind("SUPER + T", hl.dsp.togglefloating(), { description = "Toggle window floating/tiling" })
hl.bind("SUPER + F", hl.dsp.fullscreen("1"), { description = "Full width" })
hl.bind("SUPER + ALT + F", hl.dsp.fullscreen("0"), { description = "Full screen" })

-- Move focus
hl.bind("SUPER + left", hl.dsp.movefocus("l"), { description = "Move focus left" })
hl.bind("SUPER + right", hl.dsp.movefocus("r"), { description = "Move focus right" })
hl.bind("SUPER + up", hl.dsp.movefocus("u"), { description = "Move focus up" })
hl.bind("SUPER + down", hl.dsp.movefocus("d"), { description = "Move focus down" })

-- Swap active windows
hl.bind("SUPER + SHIFT + left", hl.dsp.swapwindow("l"), { description = "Swap window to the left" })
hl.bind("SUPER + SHIFT + right", hl.dsp.swapwindow("r"), { description = "Swap window to the right" })
hl.bind("SUPER + SHIFT + up", hl.dsp.swapwindow("u"), { description = "Swap window up" })
hl.bind("SUPER + SHIFT + down", hl.dsp.swapwindow("d"), { description = "Swap window down" })

-- Resize active window
hl.bind("SUPER + code:20", hl.dsp.resizeactive("-100 0"), { description = "Expand window left" })
hl.bind("SUPER + code:21", hl.dsp.resizeactive("100 0"), { description = "Shrink window left" })
hl.bind("SUPER + SHIFT + code:20", hl.dsp.resizeactive("0 -100"), { description = "Shrink window up" })
hl.bind("SUPER + SHIFT + code:21", hl.dsp.resizeactive("0 100"), { description = "Expand window down" })

-- Scroll through workspaces
hl.bind("SUPER + mouse_down", hl.dsp.workspace("e+1"), { description = "Scroll active workspace forward" })
hl.bind("SUPER + mouse_up", hl.dsp.workspace("e-1"), { description = "Scroll active workspace backward" })

-- Mouse move/resize
hl.bind("SUPER + mouse:272", hl.dsp.movewindow(), { mouse = true, drag = true, description = "Move window" })
hl.bind("SUPER + mouse:273", hl.dsp.resizewindow(), { mouse = true, drag = true, description = "Resize window" })

-- Workspaces loop
for i = 1, 10 do
    local keycode = "code:" .. tostring(i + 9)
    hl.bind("SUPER + " .. keycode, hl.dsp.workspace(tostring(i)), { description = "Switch to workspace " .. i })
    hl.bind("SUPER + SHIFT + " .. keycode, hl.dsp.movetoworkspace(tostring(i)), { description = "Move window to workspace " .. i })
end

-- Media
hl.bind("XF86AudioNext", hl.dsp.exec_cmd(osdclient .. " --playerctl next"), { description = "Next track" })
hl.bind("XF86AudioPause", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Pause" })
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { description = "Play" })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd(osdclient .. " --playerctl previous"), { description = "Previous track" })

-- Scratchpads
hl.workspace("special:anything")
hl.workspace("special:spotify")
hl.workspace("special:discord")

hl.bind("SUPER + A", hl.dsp.togglespecialworkspace("anything"))
hl.bind("SUPER + S", hl.dsp.togglespecialworkspace("spotify"))
hl.bind("SUPER + D", hl.dsp.togglespecialworkspace("discord"))

hl.bind("SUPER + ALT + A", hl.dsp.movetoworkspacesilent("special:anything"), { description = "Move window to scratchpad 1" })
hl.bind("SUPER + ALT + S", hl.dsp.movetoworkspacesilent("special:spotify"), { description = "Move window to scratchpad 2" })
hl.bind("SUPER + ALT + D", hl.dsp.movetoworkspacesilent("special:discord"), { description = "Move window to scratchpad 3" })

-- Groups / Tabs
hl.bind("SUPER + G", hl.dsp.togglegroup(), { description = "Toggle window grouping" })
hl.bind("SUPER + ALT + G", hl.dsp.moveoutofgroup(), { description = "Move active window out of group" })
hl.bind("SUPER + SHIFT + A", hl.dsp.changegroupactive("b"), { description = "Move grouped window focus left" })
hl.bind("SUPER + SHIFT + D", hl.dsp.changegroupactive("f"), { description = "Move grouped window focus right" })

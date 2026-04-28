-- ==========================
-- Hyprland bindings
-- ==========================

local osdclient = "swayosd-client --monitor \"$(hyprctl monitors -j | jq -r '.[] | select(.focused == true).name')\""
local terminal = "kitty"

-- ---------------- terminal & yazi ----------------
hl.bind("SUPER + return", hl.dsp.exec_cmd(terminal), { description = "Terminal" })
hl.bind("SUPER + E", hl.dsp.exec_cmd(terminal .. " -e yazi"), { description = "File manager" })

-- ---------------- Close windows ----------------
hl.bind("SUPER + W", hl.dsp.killactive(), { description = "Close active window" })

-- ---------------- rofi menus ----------------
hl.bind("SUPER + SPACE", hl.dsp.exec_cmd("rofi -show drun"), { description = "Launch apps" })
hl.bind("SUPER + ALT + SPACE", hl.dsp.exec_cmd("~/.config/scripts/rofi-wallpaper.sh"),
    { description = "Launch wallpaper" })
hl.bind("SUPER + Escape", hl.dsp.exec_cmd("~/.config/scripts/rofi-powermenu.sh"), { description = "Launch powermenu" })
hl.bind("SUPER + V", hl.dsp.exec_cmd("~/.config/scripts/rofi-clipboard.sh"))

-- ---------------- screenshots & recording ----------------
hl.bind("PRINT", hl.dsp.exec_cmd("bash -c 'hyprshot -m region --raw | satty --filename -'"))
hl.bind("SHIFT + PRINT", hl.dsp.exec_cmd("hyprshot -m output -m DP-2"), { description = "Screenshot DP-2 monitor" })

-- ---------------- nightlight ----------------
hl.bind("SUPER + CTRL + N", hl.dsp.exec_cmd("hypr-nightlight.sh"), { description = "Toggle nightlight" })

-- ---------------- waybar ----------------
hl.bind("SUPER + SHIFT + SPACE", hl.dsp.exec_cmd("pkill -SIGUSR1 waybar"), { description = "Toggle top bar" })

-- ---------------- Control tiling ----------------
hl.bind("SUPER + J", hl.dsp.togglesplit(), { description = "Toggle split" })
hl.bind("SUPER + P", hl.dsp.pseudo(), { description = "Pseudo window" })
hl.bind("SUPER + T", hl.dsp.togglefloating(), { description = "Toggle window floating/tiling" })
hl.bind("SUPER + F", hl.dsp.fullscreen(0), { description = "Full screen" })

-- ---------------- Move focus ----------------
hl.bind("SUPER + left", hl.dsp.movefocus("l"), { description = "Move focus left" })
hl.bind("SUPER + right", hl.dsp.movefocus("r"), { description = "Move focus right" })
hl.bind("SUPER + up", hl.dsp.movefocus("u"), { description = "Move focus up" })
hl.bind("SUPER + down", hl.dsp.movefocus("d"), { description = "Move focus down" })

-- ---------------- Swap active windows ----------------
hl.bind("SUPER + SHIFT + left", hl.dsp.swapwindow("l"), { description = "Swap window to the left" })
hl.bind("SUPER + SHIFT + right", hl.dsp.swapwindow("r"), { description = "Swap window to the right" })
hl.bind("SUPER + SHIFT + up", hl.dsp.swapwindow("u"), { description = "Swap window up" })
hl.bind("SUPER + SHIFT + down", hl.dsp.swapwindow("d"), { description = "Swap window down" })

-- ---------------- Resize active window ----------------
hl.bind("SUPER + code:20", hl.dsp.resizeactive("-100 0"), { description = "Shrink window left" })
hl.bind("SUPER + code:21", hl.dsp.resizeactive("100 0"), { description = "Expand window right" })
hl.bind("SUPER + SHIFT + code:20", hl.dsp.resizeactive("0 -100"), { description = "Shrink window up" })
hl.bind("SUPER + SHIFT + code:21", hl.dsp.resizeactive("0 100"), { description = "Expand window down" })

-- ---------------- Scroll workspaces ----------------
hl.bind("SUPER + mouse_down", hl.dsp.workspace("e+1"), { description = "Scroll active workspace forward" })
hl.bind("SUPER + mouse_up", hl.dsp.workspace("e-1"), { description = "Scroll active workspace backward" })

-- ---------------- Mouse window control ----------------
hl.bind("SUPER + mouse:272", hl.dsp.movewindow(), { description = "Move window" })
hl.bind("SUPER + mouse:273", hl.dsp.resizewindow(), { description = "Resize window" })

-- ---------------- Workspaces ----------------
-- Instead of repeating lines, we can use a standard Lua loop!
for i = 1, 10 do
    -- map codes 10-19 to workspaces 1-10
    local keycode = 9 + i
    hl.bind("SUPER + code:" .. keycode, hl.dsp.workspace(tostring(i)), { description = "Switch to workspace " .. i })
    hl.bind("SUPER + SHIFT + code:" .. keycode, hl.dsp.movetoworkspace(tostring(i)),
        { description = "Move window to workspace " .. i })
end

-- ---------------- media ----------------
-- Using the `locked = true` flag replaces the old `l` modifier in `bindld`
hl.bind("XF86AudioNext", hl.dsp.exec_cmd(osdclient .. " --playerctl next"), { locked = true, description = "Next track" })
hl.bind("XF86AudioPause", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"),
    { locked = true, description = "Pause" })
hl.bind("XF86AudioPlay", hl.dsp.exec_cmd(osdclient .. " --playerctl play-pause"), { locked = true, description = "Play" })
hl.bind("XF86AudioPrev", hl.dsp.exec_cmd(osdclient .. " --playerctl previous"),
    { locked = true, description = "Previous track" })

-- ---------------- special workspaces ----------------
hl.config({
    workspace = {
        "special:anything",
        "special:spotify",
        "special:discord"
    }
})

hl.bind("SUPER + A", hl.dsp.togglespecialworkspace("anything"))
hl.bind("SUPER + S", hl.dsp.togglespecialworkspace("spotify"))
hl.bind("SUPER + D", hl.dsp.togglespecialworkspace("discord"))

hl.bind("SUPER + ALT + A", hl.dsp.movetoworkspacesilent("special:anything"),
    { description = "Move window to scratchpad 1" })
hl.bind("SUPER + ALT + S", hl.dsp.movetoworkspacesilent("special:spotify"),
    { description = "Move window to scratchpad 2" })
hl.bind("SUPER + ALT + D", hl.dsp.movetoworkspacesilent("special:discord"),
    { description = "Move window to scratchpad 3" })

-- ---------------- groups/tabs ----------------
hl.bind("SUPER + G", hl.dsp.togglegroup(), { description = "Toggle window grouping" })
hl.bind("SUPER + ALT + G", hl.dsp.moveoutofgroup(), { description = "Move active window out of group" })

hl.bind("SUPER + SHIFT + A", hl.dsp.changegroupactive("b"), { description = "Move grouped window focus left" })
hl.bind("SUPER + SHIFT + D", hl.dsp.changegroupactive("f"), { description = "Move grouped window focus right" })

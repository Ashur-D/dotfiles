-- ==========================
-- Hyprland bindings
-- ==========================

local terminal = "kitty"
local osdclient = "swayosd-client"

hl.bind("SUPER", "RETURN", "Terminal", "exec", terminal)
hl.bind("SUPER", "E", "File manager", "exec", terminal .. " -e yazi")
hl.bind("SUPER", "W", "Close active window", "killactive", "")

hl.bind("SUPER", "SPACE", "Launch apps", "exec", "rofi -show drun")
hl.bind("SUPER", "Escape", "Launch powermenu", "exec", "~/.config/scripts/rofi-power.sh")
hl.bind("SUPER SHIFT", "Escape", "Launch performance menu", "exec", "~/.config/scripts/rofi-performance.sh")
hl.bind("SUPER ALT", "SPACE", "Launch wallpaper", "exec", "~/.config/scripts/rofi-wallpaper.sh")
hl.bind("SUPER", "V", "Clipboard history", "exec", "/bin/bash $HOME/.config/scripts/rofi-clipboard.sh")

hl.bind("", "PRINT", "exec", [[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_\$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]])
hl.bind("SHIFT", "PRINT", "Screenshot DP-2 monitor", "exec", "hyprshot -m output -m DP-2 -o ~/Pictures")

hl.bind("SUPER CTRL", "N", "Toggle nightlight", "exec", "~/.config/scripts/hypr-nightlight.sh")
hl.bind("SUPER SHIFT", "SPACE", "Toggle top bar", "exec", "pkill -x waybar || waybar")

hl.bind("SUPER", "J", "toggle split", "layoutmsg", "togglesplit")
hl.bind("SUPER", "P", "Pseudo window", "pseudo", "")
hl.bind("SUPER", "T", "Toggle window floating/tiling", "togglefloating", "")
hl.bind("SUPER", "F", "Full width", "fullscreen", "1")
hl.bind("SUPER ALT", "F", "Full screen", "fullscreen", "0")

hl.bind("SUPER", "left", "Move focus left", "movefocus", "l")
hl.bind("SUPER", "right", "Move focus right", "movefocus", "r")
hl.bind("SUPER", "up", "Move focus up", "movefocus", "u")
hl.bind("SUPER", "down", "Move focus down", "movefocus", "d")

hl.bind("SUPER SHIFT", "left", "Swap window to the left", "swapwindow", "l")
hl.bind("SUPER SHIFT", "right", "Swap window to the right", "swapwindow", "r")
hl.bind("SUPER SHIFT", "up", "Swap window up", "swapwindow", "u")
hl.bind("SUPER SHIFT", "down", "Swap window down", "swapwindow", "d")

hl.bind("SUPER", "code:20", "Expand window left", "resizeactive", "-100 0")
hl.bind("SUPER", "code:21", "Shrink window left", "resizeactive", "100 0")
hl.bind("SUPER SHIFT", "code:20", "Shrink window up", "resizeactive", "0 -100")
hl.bind("SUPER SHIFT", "code:21", "Expand window down", "resizeactive", "0 100")

hl.bind("SUPER", "mouse_down", "Scroll active workspace forward", "workspace", "e+1")
hl.bind("SUPER", "mouse_up", "Scroll active workspace backward", "workspace", "e-1")

hl.bind("SUPER", "mouse:272", "Move window", "movewindow")
hl.bind("SUPER", "mouse:273", "Resize window", "resizewindow")

for i = 1, 10 do
    local keycode = "code:" .. tostring(i + 9)
    hl.bind("SUPER", keycode, "Switch to workspace " .. i, "workspace", tostring(i))
    hl.bind("SUPER SHIFT", keycode, "Move window to workspace " .. i, "movetoworkspace", tostring(i))
end

hl.bind("", "XF86AudioNext", "Next track", "exec", osdclient .. " --playerctl next")
hl.bind("", "XF86AudioPause", "Pause", "exec", osdclient .. " --playerctl play-pause")
hl.bind("", "XF86AudioPlay", "Play", "exec", osdclient .. " --playerctl play-pause")
hl.bind("", "XF86AudioPrev", "Previous track", "exec", osdclient .. " --playerctl previous")

hl.workspace("special:anything")
hl.workspace("special:spotify")
hl.workspace("special:discord")

hl.bind("SUPER", "A", "togglespecialworkspace", "anything")
hl.bind("SUPER", "S", "togglespecialworkspace", "spotify")
hl.bind("SUPER", "D", "togglespecialworkspace", "discord")

hl.bind("SUPER ALT", "A", "Move window to scratchpad 1", "movetoworkspacesilent", "special:anything")
hl.bind("SUPER ALT", "S", "Move window to scratchpad 2", "movetoworkspacesilent", "special:spotify")
hl.bind("SUPER ALT", "D", "Move window to scratchpad 3", "movetoworkspacesilent", "special:discord")

hl.bind("SUPER", "G", "Toggle window grouping", "togglegroup", "")
hl.bind("SUPER ALT", "G", "Move active window out of group", "moveoutofgroup", "")
hl.bind("SUPER SHIFT", "A", "Move grouped window focus left", "changegroupactive", "b")
hl.bind("SUPER SHIFT", "D", "Move grouped window focus right", "changegroupactive", "f")

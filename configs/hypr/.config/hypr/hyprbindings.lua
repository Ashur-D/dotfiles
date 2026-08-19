-- ==========================
-- Hyprland bindings
-- ==========================

-- Variables
local osdclient = "swayosd-client"
local terminal = "kitty"

-- ---------------- terminal & yazi ----------------
hl.bindd("SUPER", "return", "Terminal", "exec", terminal)
hl.bindd("SUPER", "E", "File manager", "exec", terminal .. " -e yazi")

-- ---------------- Close windows ----------------
hl.bindd("SUPER", "W", "Close active window", "killactive", "")

-- ---------------- Rofi Menus ----------------
hl.bindd("SUPER", "SPACE", "Launch apps", "exec", "rofi -show drun")
hl.bindd("SUPER", "Escape", "Launch powermenu", "exec", "~/.config/scripts/rofi-power.sh")
hl.bindd("SUPER SHIFT", "Escape", "Launch performance menu", "exec", "~/.config/scripts/rofi-performance.sh")
hl.bindd("SUPER ALT", "SPACE", "Launch wallpaper", "exec", "~/.config/scripts/rofi-wallpaper.sh")
hl.bindd("SUPER", "V", "Clipboard history", "exec", "/bin/bash $HOME/.config/scripts/rofi-clipboard.sh")

-- ---------------- screenshots & recording ----------------
hl.bind("", "PRINT", "exec", [[bash -c "hyprshot -m region --raw | satty --filename - --output-filename ~/Pictures/screenshot_\$(date '+%Y-%m-%d_%H-%M-%S').png --copy-command wl-copy --early-exit"]])
hl.bindd("SHIFT", "PRINT", "Screenshot DP-2 monitor", "exec", "hyprshot -m output -m DP-2 -o ~/Pictures")

-- ---------------- nightlight ----------------
hl.bindd("SUPER CTRL", "N", "Toggle nightlight", "exec", "~/.config/scripts/hypr-nightlight.sh")

-- ---------------- waybar ----------------
hl.bindd("SUPER SHIFT", "SPACE", "Toggle top bar", "exec", "pkill -x waybar || waybar")

-- ---------------- Control tiling ----------------
hl.bindd("SUPER", "J", "toggle split", "layoutmsg", "togglesplit")
hl.bindd("SUPER", "P", "Pseudo window", "pseudo", "")
hl.bindd("SUPER", "T", "Toggle window floating/tiling", "togglefloating", "")
hl.bindd("SUPER", "F", "Full width", "fullscreen", "1")
hl.bindd("SUPER ALT", "F", "Full screen", "fullscreen", "0")

-- ---------------- Move focus ----------------
hl.bindd("SUPER", "left", "Move focus left", "movefocus", "l")
hl.bindd("SUPER", "right", "Move focus right", "movefocus", "r")
hl.bindd("SUPER", "up", "Move focus up", "movefocus", "u")
hl.bindd("SUPER", "down", "Move focus down", "movefocus", "d")

-- ---------------- Swap active windows ----------------
hl.bindd("SUPER SHIFT", "left", "Swap window to the left", "swapwindow", "l")
hl.bindd("SUPER SHIFT", "right", "Swap window to the right", "swapwindow", "r")
hl.bindd("SUPER SHIFT", "up", "Swap window up", "swapwindow", "u")
hl.bindd("SUPER SHIFT", "down", "Swap window down", "swapwindow", "d")

-- ---------------- Resize active window ----------------
hl.bindd("SUPER", "code:20", "Expand window left", "resizeactive", "-100 0")     -- - key
hl.bindd("SUPER", "code:21", "Shrink window left", "resizeactive", "100 0")      -- = key
hl.bindd("SUPER SHIFT", "code:20", "Shrink window up", "resizeactive", "0 -100")
hl.bindd("SUPER SHIFT", "code:21", "Expand window down", "resizeactive", "0 100")

-- ---------------- Scroll through existing workspaces ----------------
hl.bindd("SUPER", "mouse_down", "Scroll active workspace forward", "workspace", "e+1")
hl.bindd("SUPER", "mouse_up", "Scroll active workspace backward", "workspace", "e-1")

-- ---------------- Move/resize windows with mouse ----------------
hl.bindmd("SUPER", "mouse:272", "Move window", "movewindow")
hl.bindmd("SUPER", "mouse:273", "Resize window", "resizewindow")

-- ---------------- workspaces ----------------
-- Switch workspaces and move active windows with SUPER + [0-9] using a Lua loop
for i = 1, 10 do
    local keycode = "code:" .. tostring(i + 9)
    hl.bindd("SUPER", keycode, "Switch to workspace " .. i, "workspace", tostring(i))
    hl.bindd("SUPER SHIFT", keycode, "Move window to workspace " .. i, "movetoworkspace", tostring(i))
end

-- ---------------- media ----------------
hl.bindld("", "XF86AudioNext", "Next track", "exec", osdclient .. " --playerctl next")
hl.bindld("", "XF86AudioPause", "Pause", "exec", osdclient .. " --playerctl play-pause")
hl.bindld("", "XF86AudioPlay", "Play", "exec", osdclient .. " --playerctl play-pause")
hl.bindld("", "XF86AudioPrev", "Previous track", "exec", osdclient .. " --playerctl previous")

-- ---------------- special workspaces ----------------
hl.workspace("special:anything")
hl.workspace("special:spotify")
hl.workspace("special:discord")

-- ---------------- Toggle specific scratchpads ----------------
hl.bind("SUPER", "A", "togglespecialworkspace", "anything")
hl.bind("SUPER", "S", "togglespecialworkspace", "spotify")
hl.bind("SUPER", "D", "togglespecialworkspace", "discord")

-- ---------------- Move windows silently to those exact same scratchpads ----------------
hl.bindd("SUPER ALT", "A", "Move window to scratchpad 1", "movetoworkspacesilent", "special:anything")
hl.bindd("SUPER ALT", "S", "Move window to scratchpad 2", "movetoworkspacesilent", "special:spotify")
hl.bindd("SUPER ALT", "D", "Move window to scratchpad 3", "movetoworkspacesilent", "special:discord")

-- ---------------- groups/tabs ----------------
hl.bindd("SUPER", "G", "Toggle window grouping", "togglegroup", "")
hl.bindd("SUPER ALT", "G", "Move active window out of group", "moveoutofgroup", "")

hl.bindd("SUPER SHIFT", "A", "Move grouped window focus left", "changegroupactive", "b")
hl.bindd("SUPER SHIFT", "D", "Move grouped window focus right", "changegroupactive", "f")

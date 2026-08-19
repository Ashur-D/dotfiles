local mod = "SUPER"

-- Core Apps & Utilities
hl.bind({ mod = mod, key = "Return", dispatcher = "exec", arg = "kitty" })
hl.bind({ mod = mod, key = "Q", dispatcher = "killactive" })
hl.bind({ mod = mod, key = "E", dispatcher = "exec", arg = "yazi" })
hl.bind({ mod = mod, key = "V", dispatcher = "togglefloating" })
hl.bind({ mod = mod, key = "Space", dispatcher = "exec", arg = "rofi -show drun" })
hl.bind({ mod = mod, key = "P", dispatcher = "exec", arg = "~/.config/scripts/rofi-power.sh" })
hl.bind({ mod = mod, key = "W", dispatcher = "exec", arg = "~/.config/scripts/rofi-wallpaper.sh" })
hl.bind({ mod = mod, key = "C", dispatcher = "exec", arg = "~/.config/scripts/rofi-clipboard.sh" })
hl.bind({ mod = mod .. " SHIFT", key = "S", dispatcher = "exec", arg = "swayosd-client --screenshot" })

-- Directional Focus (Arrow Keys & Vim Motions)
local directions = {
  left = "l", right = "r", up = "u", down = "d",
  h = "l", l = "r", k = "u", j = "d"
}
for key, dir in pairs(directions) do
  hl.bind({ mod = mod, key = key, dispatcher = "movefocus", arg = dir })
end

-- Workspaces Navigation & Moving
for i = 1, 9 do
  local ws = tostring(i)
  hl.bind({ mod = mod, key = ws, dispatcher = "workspace", arg = ws })
  hl.bind({ mod = mod .. " SHIFT", key = ws, dispatcher = "movetoworkspace", arg = ws })
end

-- Mouse Bindings
hl.bindm({ mod = mod, key = "mouse:272", dispatcher = "movewindow" })
hl.bindm({ mod = mod, key = "mouse:273", dispatcher = "resizewindow" })

-- SwayOSD Media & Brightness Controls
hl.bindel({ mod = "", key = "XF86AudioRaiseVolume", dispatcher = "exec", arg = "swayosd-client --output-volume raise" })
hl.bindel({ mod = "", key = "XF86AudioLowerVolume", dispatcher = "exec", arg = "swayosd-client --output-volume lower" })
hl.bindel({ mod = "", key = "XF86AudioMute", dispatcher = "exec", arg = "swayosd-client --output-volume mute-toggle" })
hl.bindel({ mod = "", key = "XF86MonBrightnessUp", dispatcher = "exec", arg = "swayosd-client --brightness raise" })
hl.bindel({ mod = "", key = "XF86MonBrightnessDown", dispatcher = "exec", arg = "swayosd-client --brightness lower" })

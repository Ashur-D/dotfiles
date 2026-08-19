local mod = "SUPER"

-- Core Apps & Utilities
hl.bind(mod, "Return", "exec", "kitty")
hl.bind(mod, "Q", "killactive", "")
hl.bind(mod, "E", "exec", "yazi")
hl.bind(mod, "V", "togglefloating", "")
hl.bind(mod, "Space", "exec", "rofi -show drun")
hl.bind(mod, "P", "exec", "~/.config/scripts/rofi-power.sh")
hl.bind(mod, "W", "exec", "~/.config/scripts/rofi-wallpaper.sh")
hl.bind(mod, "C", "exec", "~/.config/scripts/rofi-clipboard.sh")
hl.bind(mod .. " SHIFT", "S", "exec", "swayosd-client --screenshot")

-- Directional Focus (Arrow Keys & Vim Motions)
local directions = {
  left = "l", right = "r", up = "u", down = "d",
  h = "l", l = "r", k = "u", j = "d"
}
for key, dir in pairs(directions) do
  hl.bind(mod, key, "movefocus", dir)
end

-- Workspaces Navigation & Moving
for i = 1, 9 do
  local ws = tostring(i)
  hl.bind(mod, ws, "workspace", ws)
  hl.bind(mod .. " SHIFT", ws, "movetoworkspace", ws)
end

-- Mouse Bindings
hl.bindm(mod, "mouse:272", "movewindow")
hl.bindm(mod, "mouse:273", "resizewindow")

-- SwayOSD Media & Brightness Controls
hl.bindel("", "XF86AudioRaiseVolume", "exec", "swayosd-client --output-volume raise")
hl.bindel("", "XF86AudioLowerVolume", "exec", "swayosd-client --output-volume lower")
hl.bindel("", "XF86AudioMute", "exec", "swayosd-client --output-volume mute-toggle")
hl.bindel("", "XF86MonBrightnessUp", "exec", "swayosd-client --brightness raise")
hl.bindel("", "XF86MonBrightnessDown", "exec", "swayosd-client --brightness lower")

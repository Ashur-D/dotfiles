local mod = "SUPER"

-- Core Apps & Utilities
hl.bind(mod, "Return", function() hl.dispatch("exec", "kitty") end)
hl.bind(mod, "Q", function() hl.dispatch("killactive", "") end)
hl.bind(mod, "E", function() hl.dispatch("exec", "yazi") end)
hl.bind(mod, "V", function() hl.dispatch("togglefloating", "") end)
hl.bind(mod, "Space", function() hl.dispatch("exec", "rofi -show drun") end)
hl.bind(mod, "P", function() hl.dispatch("exec", "~/.config/scripts/rofi-power.sh") end)
hl.bind(mod, "W", function() hl.dispatch("exec", "~/.config/scripts/rofi-wallpaper.sh") end)
hl.bind(mod, "C", function() hl.dispatch("exec", "~/.config/scripts/rofi-clipboard.sh") end)
hl.bind(mod .. " SHIFT", "S", function() hl.dispatch("exec", "swayosd-client --screenshot") end)

-- Directional Focus (Arrow Keys & Vim Motions)
local directions = {
  left = "l", right = "r", up = "u", down = "d",
  h = "l", l = "r", k = "u", j = "d"
}
for key, dir in pairs(directions) do
  hl.bind(mod, key, function() hl.dispatch("movefocus", dir) end)
end

-- Workspaces Navigation & Moving
for i = 1, 9 do
  local ws = tostring(i)
  hl.bind(mod, ws, function() hl.dispatch("workspace", ws) end)
  hl.bind(mod .. " SHIFT", ws, function() hl.dispatch("movetoworkspace", ws) end)
end

-- Mouse Bindings
hl.bindm(mod, "mouse:272", "movewindow")
hl.bindm(mod, "mouse:273", "resizewindow")

-- SwayOSD Media & Brightness Controls
hl.bindel("", "XF86AudioRaiseVolume", function() hl.dispatch("exec", "swayosd-client --output-volume raise") end)
hl.bindel("", "XF86AudioLowerVolume", function() hl.dispatch("exec", "swayosd-client --output-volume lower") end)
hl.bindel("", "XF86AudioMute", function() hl.dispatch("exec", "swayosd-client --output-volume mute-toggle") end)
hl.bindel("", "XF86MonBrightnessUp", function() hl.dispatch("exec", "swayosd-client --brightness raise") end)
hl.bindel("", "XF86MonBrightnessDown", function() hl.dispatch("exec", "swayosd-client --brightness lower") end)

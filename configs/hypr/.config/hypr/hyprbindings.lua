local mod = "SUPER"

-- Core Apps & Utilities
hl.bind(mod, "Return", hl.dsp.exec("kitty"))
hl.bind(mod, "Q", hl.dsp.close())
hl.bind(mod, "E", hl.dsp.exec("yazi"))
hl.bind(mod, "V", hl.dsp.toggle_floating())
hl.bind(mod, "Space", hl.dsp.exec("rofi -show drun"))
hl.bind(mod, "P", hl.dsp.exec("~/.config/scripts/rofi-power.sh"))
hl.bind(mod, "W", hl.dsp.exec("~/.config/scripts/rofi-wallpaper.sh"))
hl.bind(mod, "C", hl.dsp.exec("~/.config/scripts/rofi-clipboard.sh"))
hl.bind(mod .. " SHIFT", "S", hl.dsp.exec("swayosd-client --screenshot"))

-- Directional Focus (Arrow Keys & Vim Motions)
local directions = {
  left = "l", right = "r", up = "u", down = "d",
  h = "l", l = "r", k = "u", j = "d"
}
for key, dir in pairs(directions) do
  hl.bind(mod, key, hl.dsp.focus.move(dir))
end

-- Workspaces Navigation & Moving
for i = 1, 9 do
  local ws = tostring(i)
  hl.bind(mod, ws, hl.dsp.workspace.switch(ws))
  hl.bind(mod .. " SHIFT", ws, hl.dsp.workspace.move_to(ws))
end

-- Mouse Bindings
hl.bindm(mod, "mouse:272", hl.dsp.mouse.move())
hl.bindm(mod, "mouse:273", hl.dsp.mouse.resize())

-- SwayOSD Media & Brightness Controls
hl.bindel("", "XF86AudioRaiseVolume", hl.dsp.exec("swayosd-client --output-volume raise"))
hl.bindel("", "XF86AudioLowerVolume", hl.dsp.exec("swayosd-client --output-volume lower"))
hl.bindel("", "XF86AudioMute", hl.dsp.exec("swayosd-client --output-volume mute-toggle"))
hl.bindel("", "XF86MonBrightnessUp", hl.dsp.exec("swayosd-client --brightness raise"))
hl.bindel("", "XF86MonBrightnessDown", hl.dsp.exec("swayosd-client --brightness lower"))

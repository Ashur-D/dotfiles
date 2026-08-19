local mod = "SUPER"

-- Core Binds Table
local binds = {
  -- Core Apps & Utilities
  mod .. ", Return, exec, kitty",
  mod .. ", Q, killactive,",
  mod .. ", E, exec, yazi",
  mod .. ", V, togglefloating,",
  mod .. ", Space, exec, rofi -show drun",
  mod .. ", P, exec, ~/.config/scripts/rofi-power.sh",
  mod .. ", W, exec, ~/.config/scripts/rofi-wallpaper.sh",
  mod .. ", C, exec, ~/.config/scripts/rofi-clipboard.sh",
  mod .. " SHIFT, S, exec, swayosd-client --screenshot",

  -- Directional Focus (Arrow Keys & Vim Motions)
  mod .. ", left, movefocus, l",
  mod .. ", right, movefocus, r",
  mod .. ", up, movefocus, u",
  mod .. ", down, movefocus, d",
  mod .. ", h, movefocus, l",
  mod .. ", l, movefocus, r",
  mod .. ", k, movefocus, u",
  mod .. ", j, movefocus, d",
}

-- Workspace Navigation & Moving (1 to 9)
for i = 1, 9 do
  local ws = tostring(i)
  table.insert(binds, mod .. ", " .. ws .. ", workspace, " .. ws)
  table.insert(binds, mod .. " SHIFT, " .. ws .. ", movetoworkspace, " .. ws)
end

hl.config({
  bind = binds,
  bindm = {
    mod .. ", mouse:272, movewindow",
    mod .. ", mouse:273, resizewindow",
  },
  bindel = {
    ", XF86AudioRaiseVolume, exec, swayosd-client --output-volume raise",
    ", XF86AudioLowerVolume, exec, swayosd-client --output-volume lower",
    ", XF86AudioMute, exec, swayosd-client --output-volume mute-toggle",
    ", XF86MonBrightnessUp, exec, swayosd-client --brightness raise",
    ", XF86MonBrightnessDown, exec, swayosd-client --brightness lower",
  },
})

hl.config({
  general = {
    gaps_in = 4,
    gaps_out = 8,
    border_size = 2,
    ["col.active_border"] = "rgba(bb9af7ff) rgba(7aa2f7ff) 45deg",
    ["col.inactive_border"] = "rgba(414868aa)",
    layout = "dwindle",
    resize_on_border = true,
  },
  decoration = {
    rounding = 10,
    active_opacity = 0.95,
    inactive_opacity = 0.85,
    blur = {
      enabled = true,
      size = 5,
      passes = 2,
      vibrancy = 0.1696,
      new_optimizations = true,
    },
    shadow = {
      enabled = true,
      range = 12,
      render_power = 3,
      color = "rgba(1a1a1aee)",
    },
  },
  animations = {
    enabled = true,
    bezier = {
      { name = "wind", p1 = 0.05, p2 = 0.9, p3 = 0.1, p4 = 1.05 },
      { name = "winIn", p1 = 0.1, p2 = 1.1, p3 = 0.1, p4 = 1.1 },
      { name = "winOut", p1 = 0.3, p2 = -0.3, p3 = 0, p4 = 1 },
      { name = "liner", p1 = 1, p2 = 1, p3 = 1, p4 = 1 },
    },
    animation = {
      { "windows", 1, 6, "wind", "slide" },
      { "windowsIn", 1, 6, "winIn", "slide" },
      { "windowsOut", 1, 5, "winOut", "slide" },
      { "windowsMove", 1, 5, "wind", "slide" },
      { "border", 1, 1, "liner" },
      { "borderangle", 1, 30, "liner", "loop" },
      { "fade", 1, 7, "wind" },
      { "workspaces", 1, 5, "wind" },
    },
  },
  dwindle = {
    pseudotile = true,
    preserve_split = true,
  },
  misc = {
    force_default_wallpaper = 0,
    disable_hyprland_logo = true,
  },
})

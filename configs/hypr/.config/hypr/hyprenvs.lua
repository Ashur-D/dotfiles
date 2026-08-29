-- ==========================
-- Hyprland envs
-- ==========================

-- ----------------cursors------------------
hl.env("XCURSOR_SIZE", "24")
hl.env("XCURSOR_THEME", "Bibata-Modern-Classic")
hl.env("HYPRCURSOR_SIZE", "24")
hl.env("HYPRCURSOR_THEME", "Bibata-Modern-Classic")

-- ---------------toolkit backend variables-------------------
hl.env("GDK_BACKEND", "wayland,x11,*")
hl.env("GDK_SCALE", "1")
hl.env("SDL_VIDEODRIVER", "wayland")

-- -------------------xdg specifications-----------------------
hl.env("XDG_CURRENT_DESKTOP", "Hyprland")
hl.env("XDG_SESSION_DESKTOP", "Hyprland")
hl.env("XDG_SESSION_TYPE", "wayland")

-- -----------------------qt variables-------------------------

-- hl.env("QT_AUTO_SCREEN_SCALE_FACTOR", "1")
-- hl.env("QT_QPA_PLATFORM", "wayland;xcb")
-- hl.env("QT_QPA_PLATFORMTHEME", "qt6ct")
-- hl.env("QT_WAYLAND_DISABLE_WINDOWDECORATION", "1")
-- hl.env("QT_SCALE_FACTOR", "1")
-- hl.env("QT_QPA_PLATFORMTHEME", "qt5ct")
-- hl.env("QT_STYLE_OVERRIDE", "kvantum")
-- hl.env("QT_QUICK_CONTROLS_STYLE", "org.hyprland.style")

-- ----------------------browsers & apps------------------------
hl.env("MOZ_ENABLE_WAYLAND", "1")
hl.env("ELECTRON_OZONE_PLATFORM_HINT", "auto")
hl.env("OZONE_PLATFORM", "wayland")

-- ----------------------nvidia-----------------------
-- hl.env("LIBVA_DRIVER_NAME", "nvidia")
-- hl.env("__GLX_VENDOR_LIBRARY_NAME", "nvidia")
-- hl.env("GBM_BACKEND", "nvidia-drm")

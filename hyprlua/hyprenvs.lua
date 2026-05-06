-- ==========================
-- Hyprland envs
-- ==========================

-- Cursors
hl.set("env", "XCURSOR_SIZE,24")
hl.set("env", "XCURSOR_THEME,catppuccin-mocha-dark-cursors")
hl.set("env", "HYPRCURSOR_SIZE,24")
hl.set("env", "HYPRCURSOR_THEME,catppuccin-mocha-dark-cursors")

-- Toolkit backend variables
hl.set("env", "GDK_BACKEND,wayland,x11,*")
hl.set("env", "GDK_SCALE,1")
hl.set("env", "SDL_VIDEODRIVER,wayland")

-- XDG specifications
hl.set("env", "XDG_CURRENT_DESKTOP,Hyprland")
hl.set("env", "XDG_SESSION_DESKTOP,Hyprland")
hl.set("env", "XDG_SESSION_TYPE,wayland")

-- QT variables
-- hl.set("env", "QT_AUTO_SCREEN_SCALE_FACTOR,1")
-- hl.set("env", "QT_QPA_PLATFORM,wayland;xcb")
-- hl.set("env", "QT_QPA_PLATFORMTHEME,qt6ct")
-- hl.set("env", "QT_WAYLAND_DISABLE_WINDOWDECORATION,1")
-- hl.set("env", "QT_SCALE_FACTOR,1")
-- hl.set("env", "QT_STYLE_OVERRIDE,kvantum")
-- hl.set("env", "QT_QUICK_CONTROLS_STYLE,org.hyprland.style")

-- Browsers & apps
hl.set("env", "MOZ_ENABLE_WAYLAND,1")
hl.set("env", "ELECTRON_OZONE_PLATFORM_HINT,auto")
hl.set("env", "OZONE_PLATFORM,wayland")

-- Nvidia
-- hl.set("env", "LIBVA_DRIVER_NAME,nvidia")
-- hl.set("env", "__GLX_VENDOR_LIBRARY_NAME,nvidia")
-- hl.set("env", "GBM_BACKEND,nvidia-drm")

-- GTK theme
hl.set("env", "GTK_THEME,adw-gtk3-dark")
hl.set("env", "GTK_THEME,Adwaita:dark")


# 🛠️ Recommended Arch Install Options
- **Disk Configuration:** default structure: yes + use compression
- **Kernel:** zen-kernel
- **Profile:** minimal
- **Applications:** none
- **Additional packages:** git & multilib


---

# 🚀 Post Arch Install  

Once in the TTY, please run the following command:

```bash
git clone https://github.com/Ashur-D/dotfiles && ./dotfiles/install/run.sh
```

- **(Optional):** Before running the install script, uncomment any packages you may need in `install/packages.sh`.
- **Restart your system** after the installer completes.

---

# 🎨 Themes
> [!NOTE]
> Some themes may need to be manually turned on.
- *For example:* `vesktop`, `btop`, `zed`, etc., will need you to go into their respective theme sections and select the Matugen version.
- For `vesktop`, this theme is called **"midnight"**.

---

# 📝 To-Do

- [ ] Get `starship` colors working with Matugen *(mostly done, just need better colors for the dir and system icons)*.

# Future
- [ ] Looking to switch into Noctalia and its wayland compositor Umbriel.


---

# 🖼️ Previews

## Desktop Overview
<!-- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8d69b2db-53c5-4944-b423-f2749750e1d5" /> -->
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d19a4015-f51a-49a6-8190-a0f645f13c6a" />

## Rofi Wallpaper Selector
<!-- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/08a543f1-9d84-4e78-8ef9-a8ed12dc574b" /> -->
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/30008799-29dc-467d-96f8-9abffde3ece9" />

## Rofi App Launcher
<!-- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/8d8e4370-7d54-4366-9ffb-9b5cf9798470" /> -->
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2ac20908-33e9-45bd-a7dd-c8e633bc7657" />

## Rofi Power Menu
<!-- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/99bd5858-1c32-4129-be43-2653779952cf" /> -->
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a9e7c25f-24f3-4e50-b99c-3a1857333c75" />

## Rofi Performance Menu
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ddfb8c2d-050a-46a2-9a37-668becbf647d" />

## Rofi Clipboard 
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dd4c57d5-f834-4eb5-ba2d-84a5687180d2" />

## Wifi & Audio TUI's
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9b53bd8f-37ac-4417-b3ad-6772e6a48794" />

## Hypr Lockscreen
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/5b034cf2-0c85-408b-a50d-3a8345766106" />






# ⌨️ Keybindings

### System & Applications
| Keybind | Action |
| :--- | :--- |
| `SUPER` + `Return` | Open Terminal (Kitty) |
| `SUPER` + `E` | Open File Manager (Yazi) |
| `SUPER` + `Space` | Launch Apps (Rofi) |
| `SUPER` + `Escape` | Launch Powermenu |
| `SUPER` + `SHIFT` + `Escape` | Launch Performance Menu |
| `SUPER` + `ALT` + `Space` | Launch Wallpaper Menu |
| `SUPER` + `V` | Open Clipboard Manager (with rofi) |
| `SUPER` + `CTRL` + `N` | Toggle Nightlight |
| `SUPER` + `SHIFT` + `Space` | Toggle Top Bar (Waybar) |

### Window Management
| Keybind | Action |
| :--- | :--- |
| `SUPER` + `W` | Close active window |
| `SUPER` + `J` | Toggle split |
| `SUPER` + `P` | Pseudo window |
| `SUPER` + `T` | Toggle floating/tiling |
| `SUPER` + `F` | Full width (Fullscreen 1) |
| `SUPER` + `ALT` + `F` | Full screen (Fullscreen 0) |
| `SUPER` + `Arrow Keys` | Move focus (Left/Right/Up/Down) |
| `SUPER` + `SHIFT` + `Arrow Keys` | Swap window (Left/Right/Up/Down) |
| `SUPER` + `-` | Expand window left |
| `SUPER` + `=` | Shrink window left |
| `SUPER` + `SHIFT` + `-` | Shrink window up |
| `SUPER` + `SHIFT` + `=` | Expand window down |
| `SUPER` + `LMB` (Drag) | Move window |
| `SUPER` + `RMB` (Drag) | Resize window |

### Workspaces
| Keybind | Action |
| :--- | :--- |
| `SUPER` + `[0-9]` | Switch to workspace 1-10 |
| `SUPER` + `SHIFT` + `[0-9]` | Move active window to workspace 1-10 |
| `SUPER` + `scroll` | Move active window to workspace 1-10 |

### Scratchpads (Special Workspaces)
| Keybind | Action |
| :--- | :--- |
| `SUPER` + `A` | Toggle scratchpad A |
| `SUPER` + `S` | Toggle scratchpad S |
| `SUPER` + `D` | Toggle scratchpad D |
| `SUPER` + `ALT` + `A` | Move window silently to scratchpad A |
| `SUPER` + `ALT` + `S` | Move window silently to scratchpad S |
| `SUPER` + `ALT` + `D` | Move window silently to scratchpad D |

### Groups / Tabs
| Keybind | Action |
| :--- | :--- |
| `SUPER` + `G` | Toggle window grouping |
| `SUPER` + `ALT` + `G` | Move active window out of group |
| `SUPER` + `SHIFT` + `A` | Move grouped window focus left |
| `SUPER` + `SHIFT` + `D` | Move grouped window focus right |

### Media & Screenshots
| Keybind | Action |
| :--- | :--- |
| `Print Screen` | Regional screenshot (copies to clipboard) |
| `SHIFT` + `Print Screen` | Fullscreen screenshot |
| Media Keys | Play/Pause/Next/Previous track |

</details>

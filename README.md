
# 🛠️ Recommended Arch Install Options

- **Disk Configuration:** default structure: yes + use compression
- **Bootloader:** grub
- **Kernel:** zen-kernel
- **Profile:** minimal
- **Applications:** none
- **Additional packages:** git & multilib

---

# 🚀 Post Arch Install  

Once in the TTY, please run the following command in your `HOME` directory:

```bash
git clone https://github.com/Ashur-D/dotfiles && cd dotfiles && chmod +x install/run.sh && ./install/run.sh
```

- **(Optional):** Before running the install script, review and uncomment your desired packages in `install/packages.sh`.
- **(Optional):** If you need NVIDIA packages, go to `install/hypr.sh` and uncomment the NVIDIA script.
- **Restart your system** after the installer completes.

---

# 🎨 Themes

- Some themes may need to be manually turned on.
- *For example:* `vesktop`, `btop`, `kitty`, etc., will need you to go into their respective theme sections and select the Matugen version.
- For `vesktop`, this theme is called **"midnight"**.

---

# 📝 To-Do

- [ ] Get `starship` colors working with Matugen *(mostly done, just need better colors for the dir and system icons)*.
- [ ] Get GTK working with Matugen *(I think it works?)*.

---

# 🔍 Look Into

- [Windows 11 Clipboard History For Linux](https://github.com/gustavosett/Windows-11-Clipboard-History-For-Linux)
- [wayle](https://github.com/wayle-rs/wayle)
- Installing the cachyOS kernel.


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
| `SUPER` + `V` | Open Clipboard Manager (Clipse) |
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
| `SUPER` + `Scroll Wheel` | Scroll through active workspaces |

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
| `SHIFT` + `Print Screen` | Fullscreen screenshot of DP-2 |
| Media Keys | Play/Pause/Next/Previous track |

</details>

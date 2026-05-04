# recommended arch install options

- Disk Configuration > default structure: yes + use compression
- Bootloader > grub
- Kernel > zen-kernel
- Profile > minimal
- Applications > none
- Additional packages > git & multilib

# post arch install  

- Once in the TTY please follow the commands below in your HOME dir.

`git clone https://github.com/Ashur-D/dotfiles && cd dotfiles && chmod +x install/run.sh && ./install/run.sh`
- (Optional) Before running `./install.sh`, review and uncomment desired packages in `install/packages.sh`.
- (Optional) If you need NVIDIA packages, go to `install/hypr.sh` and uncomment the NVIDIA script.
- Restart your system after the installer completes.


# themes
- Some themes may need to be manually turned on
- For ex: vesktop,btop,kitty,etc will need to go into their themes section, and select a matugen version.
- For vesktop this is called "midnight"

# todo
- Get starship colors working with matugen(mostly done just get dir and system icon better colors)
- Get gtk working with matugen (I think it works?)


# look into
- https://github.com/gustavosett/Windows-11-Clipboard-History-For-Linux
- https://github.com/wayle-rs/wayle
- installing the cachyOS kernel

---


<details>
<summary><b>⌨️ Keybindings (Click to expand)</b></summary>

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
| `SUPER` + `A` | Toggle *Anything* scratchpad |
| `SUPER

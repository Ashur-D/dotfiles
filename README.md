# recommended arch install options

- Disk Configuration > default structure: yes + use compression
- Bootloader > grub
- kernel > zen-kernel
- profile > minimal
- Applications > none
- additional packages > git & multilib

# post arch install  

- once in the TTY please follow the commands below in your HOME dir.

`git clone https://github.com/Ashur-D/dotfiles && cd dotfiles && chmod +x scripts/run.sh && ./scripts/run.sh`
- (Optional) Before running `./install.sh`, review and uncomment desired packages in `scripts/packages.sh`.
- (Optional) If you need NVIDIA packages, go to `scripts/hypr.sh` and uncomment the NVIDIA script.
- Restart your system after the installer completes.


# themes
- some themes may need to be manually turned on
- for ex: vesktop,btop,kitty,etc will need to go into their themes section, and select a matugen version.
- for vesktop this is called "midnight"

# todo
- get starship colors working with matugen(mostly done just get dir and system icon better colors)
- get gtk working with matugen (I think it works?)


# look into
- https://github.com/gustavosett/Windows-11-Clipboard-History-For-Linux
- https://github.com/wayle-rs/wayle
- installing the cachyOS kernel

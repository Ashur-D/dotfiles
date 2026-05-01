# recommended arch install options

- Disk Configuration > default structure: yes + use compression
- Bootloader > grub
- kernel > zen-kernel
- profile > minimal
- Applications > none
- additional packages > git

# post arch install  

- once in the TTY please follow the commands below in your HOME dir.
1. `git clone https://github.com/Ashur-D/dotfiles`
    - (optional) before running the script there are optional packages you may uncomment packages in `dotfiles/scripts/packages.sh` 
    - (optional) if you need nvidia packages go to `dotfiles/scripts/hypr.sh` and uncomment out the nvidia script. 
2. `cd dotfiles/scripts` 
3. `chmod +x run.sh`
4. `./run.sh`
5. then restart after the installer is done.

# themes
- some themes may need to be manually turned on
- for ex: vesktop,btop,kitty,etc will need to go into their themes section, and select a matugen version.
- for vesktop this is called "midnight"

# todo
- get starship colors working with matugen
- get gtk working with matugen


# look into
- https://github.com/gustavosett/Windows-11-Clipboard-History-For-Linux
- installing the cachyOS kernel

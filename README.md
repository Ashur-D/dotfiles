# recommended arch install options

- Disk Configuration > default structure: yes + use compression
- Bootloader > grub
- kernal > zen-kernal
- profile > minimal
- Applications > none
- additional packages > git

# post arch install  

- once in the TTY please follow the commands below
- `git clone https://github.com/Ashur-D/dotfiles`
- before running the script there are optional packages you may uncomment packages in `dotfiles/scripts/packages.sh` 
- if you need nvidia packages go to `dotfiles/scripts/run.sh` and uncomment out the nvidia script. 
- `cd dotfiles/scripts` 
- `chmod +x run.sh`
- `./run.sh`
- then restart after the installer is done.

# themes
- some themes may need to be manually turned on
- for ex: vesktop,btop,kitty,etc will need to go into their themes section, and select a matugen version.
- for vesktop this is called "midnight"

# todo
- get gtk/qt working with matugen ( already kinda works?)
- get neovim working with matugen (nvm this is too much work)
- get starship colors working
- multilib
- look into more hyprland animations: https://github.com/HyDE-Project/HyDE/tree/master/Configs/.config/hypr/animations

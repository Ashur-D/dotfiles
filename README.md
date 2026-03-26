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
-  before running the script there are optional packages you may uncomment in `dotfiles/scripts/packages.sh` as well as `dotfiles/scripts/run.sh` you may want to comment out the nvidia script. 
- `cd dotfiles/scripts` 
- `chmod +x run.sh`
- `./run.sh`
- then restart after the installer is done.

# themes
- some themes may need to be manually turned on
- for ex: vesktop,btop,kitty,etc will need to go into their themes section, and select a matugen version.
- for vesktop this is called "midnight"

# todo
- get gtk/qt working with matugen
- get neovim working with matugen
- get starship colors working

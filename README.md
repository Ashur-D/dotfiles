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

# todo
- get gtk/qt working with matugen
- get cliphist working with rofi
- get neovim working with matugen

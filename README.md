

might need -  libnotify /
no display manager, later might add > lemurs/ly/lidm or SDDM/greet

# get started recommended arch install 

- Mirrors and repositories >	Select your region
- Disk Configuration > default structure: yes + use compression
- Bootloader > grub
- kernal > zen-kernal
- profile > minimal
- Applications > none
- additional packages > git

# pre script install

- There are optional packages you may uncomment in 

# post arch install  

- once in the TTY please follow the commands below
- `git clone https://github.com/Ashur-D/dotfiles`
-  before running the script there are optional packages you may uncomment in `dotfiles/scripts/packages.sh` as well as `dotfiles/scripts/run.sh` you may want to comment out the nvidia script. 
- `cd dotfiles/scripts` 
- `chmod +x run.sh`
- `./run.sh`
- then restart after the installer is done.

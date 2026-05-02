# If not running interactively, don't do anything (leave this at the top of this file)
[[ $- != *i* ]] && return

###------------------- test -----------------------###
export GTK_THEME=adw-gtk3
export ADW_DISABLE_PORTAL=1

###------------------- always open in home -----------------------###
cd ~

###------------------- Technicolor -----------------------###
force_color_prompt=yes
color_prompt=yes

###------------------- Editor used by CLI -----------------------###
export EDITOR="nvim"
export SUDO_EDITOR="$EDITOR"

###------------------- starship -----------------------###
eval "$(starship init bash)"

###------------------- prompt -----------------------###
#PS1="\[\e[1;31m\]\$(parse_git_branch)\[\033[34m\]\$(parse_git_dirty)\n\[\033[1;33m\] \[\e[1;37m\] \w \[\e[1;33m\]󰅂\[\e[0;37m\] "
#PS1=$'\uf0a9 '
#PS1="\[\e]0;\w\a\]$PS1"

###------------------- aliases -----------------------###
alias f="fastfetch"
alias ga='git add .'
alias gp='git push'
alias gcm='git commit -m "updated"'

function gc() {
    MESSAGE=$(gum input --placeholder "Enter commit message..." --width 50)
    if [ -n "$MESSAGE" ]; then
        git commit -m "$MESSAGE"
    else
        echo "Commit aborted."
    fi
}

###------------------- hyprland -----------------------###
alias hyprland='start-hyprland'

if [ "$(tty)" = "/dev/tty1" ]; then
  exec start-hyprland
fi

###------------------- shell wrapper -----------------------###
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
  yazi "$@" --cwd-file="$tmp"
  IFS= read -r -d '' cwd <"$tmp"
  [ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
  rm -f -- "$tmp"
}

###------------------- uninstall apps -----------------------###
function apps() {
    clear
    gum style --border normal --margin "1" --padding "1 2" --border-foreground 212 "📦 Package Uninstaller"
    echo "Fetching installed packages..."

    # Use 'local' so these variables don't bleed into your active terminal session
    local PACKAGES=$(yay -Qeq)
    local SELECTED=$(echo "$PACKAGES" | gum filter --no-limit --placeholder "Search packages... (TAB to select multiple, ENTER to confirm)")

    # If you press ESC or don't select anything, exit safely
    if [ -z "$SELECTED" ]; then
        gum style --foreground 212 "No packages selected. Exiting."
        # CRITICAL: Use 'return' instead of 'exit'.
        # 'exit' in a .bashrc function will completely close your terminal!
        return 0
    fi

    # Show what is about to be deleted
    clear
    gum style --foreground 212 "⚠️ You selected the following packages for removal:"
    echo "$SELECTED" | sed 's/^/ - /'
    echo ""

    # Final confirmation before breaking anything
    if gum confirm "Are you sure you want to completely remove these packages and their unneeded dependencies?"; then
        local TO_REMOVE=$(echo "$SELECTED" | tr '\n' ' ')
        yay -Rns $TO_REMOVE
        echo ""
        gum style --foreground 212 "✨ Cleanup complete!"
    else
        gum style --foreground 212 "Operation cancelled. Nothing was uninstalled."
    fi
}

# If not running interactively, don't do anything (leave this at the top of this file)
[[ $- != *i* ]] && return

###------------------- Technicolor -----------------------###
force_color_prompt=yes
color_prompt=yes

###------------------- Editor used by CLI -----------------------###
export EDITOR="nvim"
export SUDO_EDITOR="$EDITOR"
export BAT_THEME=ansi

###------------------- starship -----------------------###
#eval "$(starship init bash)"

###------------------- prompt -----------------------###
PS1="\[\e[1;31m\]\$(parse_git_branch)\[\033[34m\]\$(parse_git_dirty)\n\[\033[1;33m\] \[\e[1;37m\] \w \[\e[1;33m\]󰅂\[\e[0;37m\] "
#PS1=$'\uf0a9 '
#PS1="\[\e]0;\w\a\]$PS1"

###------------------- yazi shell wrapper -----------------------###
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
  yazi "$@" --cwd-file="$tmp"
  IFS= read -r -d '' cwd <"$tmp"
  [ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
  rm -f -- "$tmp"
}

###------------------- aliases -----------------------###
# git config --global alias.aa 'add .'
# git config --global alias.p 'push'
# git config --global alias.ci 'commit'

alias ga='git add .'
alias gp='git push'
alias gc='git commit -m "updated"'

###------------------- launcher hyprland after logging in -----------------------###
if [ "$(tty)" = "/dev/tty1" ]; then
  exec Hyprland
fi

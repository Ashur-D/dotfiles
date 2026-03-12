# ~/.bashrc

# Technicolor dreams
force_color_prompt=yes
color_prompt=yes

# Simple prompt with path in the window/pane title and caret for typing line
PS1=$'\uf0a9 '
PS1="\[\e]0;\w\a\]$PS1"

eval "$(starship init bash)"

# ====== yazi shell wrapper ======
function y() {
  local tmp="$(mktemp -t "yazi-cwd.XXXXXX")" cwd
  yazi "$@" --cwd-file="$tmp"
  IFS= read -r -d '' cwd <"$tmp"
  [ -n "$cwd" ] && [ "$cwd" != "$PWD" ] && builtin cd -- "$cwd"
  rm -f -- "$tmp"
}

# ====== Editor used by CLI ======
export EDITOR="nvim"
export SUDO_EDITOR="$EDITOR"
export BAT_THEME=ansi

# ====== aliases ======
# git config --global alias.aa 'add .'
# git config --global alias.p 'push'
# git config --global alias.ci 'commit'

alias ga='git add .'
alias gp='git push'
alias gc='git commit -m "updates"'

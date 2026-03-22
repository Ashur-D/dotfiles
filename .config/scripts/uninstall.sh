#!/bin/bash

# Clear the screen for a clean UI
clear

gum style --border normal --margin "1" --padding "1 2" --border-foreground 212 "📦 Package Uninstaller"
echo "Fetching installed packages..."

# Grab explicitly installed packages (yay -Qeq gets just the names, avoiding clutter)
PACKAGES=$(yay -Qeq)

# Pipe the packages into gum filter
# --no-limit allows you to select multiple packages at once using the TAB key
SELECTED=$(echo "$PACKAGES" | gum filter --no-limit --placeholder "Search packages... (TAB to select multiple, ENTER to confirm)")

# If you press ESC or don't select anything, exit safely
if [ -z "$SELECTED" ]; then
    gum style --foreground 212 "No packages selected. Exiting."
    exit 0
fi

# Show what is about to be deleted
clear
gum style --foreground 212 "⚠️ You selected the following packages for removal:"
echo "$SELECTED" | sed 's/^/ - /' # Adds a nice bullet point to each line
echo ""

# Final confirmation before breaking anything
if gum confirm "Are you sure you want to completely remove these packages and their unneeded dependencies?"; then

    # Convert the list into a single-line string of package names
    TO_REMOVE=$(echo "$SELECTED" | tr '\n' ' ')

    # Run the removal command
    # -Rns removes the package, its configuration files, and any dependencies that are no longer needed
    yay -Rns $TO_REMOVE

    echo ""
    gum style --foreground 212 "✨ Cleanup complete!"
else
    gum style --foreground 212 "Operation cancelled. Nothing was uninstalled."
fi

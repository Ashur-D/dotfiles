#!/bin/bash

# ==========================
# Enable system services
# ==========================

services=(
    bluetooth.service
    iwd.service
    power-profiles-daemon.service
)

echo "Enabling and starting system services..."

# We use || true so that if one service fails (e.g. no bluetooth chip),
# it doesn't crash the entire installation script.
sudo systemctl enable --now "${services[@]}" || true

echo "Service setup complete."

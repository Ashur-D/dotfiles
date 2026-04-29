#!/bin/bash

# ==========================
# Enable system services
# ==========================

services=(
    bluetooth.service
    iwd.service
    power-profiles-daemon.service
)

for service in "${services[@]}"; do
    echo "Enabling and starting $service..."
    if sudo systemctl enable --now "$service"; then
        echo "$service enabled successfully."
    else
        echo "Failed to enable $service."
    fi
done

echo "Service setup complete."

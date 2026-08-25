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
sudo systemctl enable --now "${services[@]}" || true

echo "------------------------------------------------------------"
echo "✨ All services enabled and started ✨"
echo "------------------------------------------------------------"

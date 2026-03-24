#!/bin/bash

if pgrep -f "^gpu-screen-recorder-ui" >/dev/null; then
  echo '{"text": "󰻂 ", "tooltip": "Stop recording", "class": "active"}'
else
  echo '{"text": ""}'
fi

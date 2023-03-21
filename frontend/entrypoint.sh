#!/bin/sh

if [ "$RUN_MODE" = "dev" ]; then
    EXPOSE $VITE_PORT
    npm run dev -- --host
elif [ "$RUN_MODE" = "prod" ]; then
    EXPOSE $VITE_PREVIEW_PORT
    npm run preview -- --host
else
    npm run dev -- --host
    exit 1
fi

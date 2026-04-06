#!/bin/bash
set -e

PROJECT_LOCAL="/Users/abdullah/Downloads/Printing-Auto"
REMOTE_HOST="ubuntu@16.16.218.28"
SSH_KEY="/Users/abdullah/Downloads/mvg-key.pem"
REMOTE_PATH="~/printit"

SSH="ssh -i $SSH_KEY"
RSYNC_SSH="ssh -i $SSH_KEY"

# Allow syncing only api, only web, or both (default: both)
TARGET="${1:-all}"

if [[ "$TARGET" == "api" || "$TARGET" == "all" ]]; then
    echo "==> Building API locally..."
    cd "$PROJECT_LOCAL/apps/api"
    npm run build

    echo "==> Syncing API dist to server..."
    rsync -avz --delete \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/api/dist/" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/api/dist/"

    echo "==> Syncing API config and Prisma schema to server..."
    rsync -avz \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/api/package.json" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/api/"

    rsync -avz \
      --exclude 'dev.db' \
      --exclude 'dev.db-journal' \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/api/prisma/" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/api/prisma/"

    echo "==> Installing API dependencies and migrating Database..."
    $SSH $REMOTE_HOST "cd $REMOTE_PATH/apps/api && npm install && npx prisma generate && npx prisma db push"

    echo "==> Restarting printit-api..."
    $SSH $REMOTE_HOST "pm2 restart printit-api"
fi

if [[ "$TARGET" == "web" || "$TARGET" == "all" ]]; then
    echo "==> Building Web locally..."
    cd "$PROJECT_LOCAL/apps/web"
    npm run build

    echo "==> Syncing Web .next to server..."
    rsync -avz --delete \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/web/.next/" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/web/.next/"

    echo "==> Syncing next.config.js to server..."
    rsync -avz \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/web/next.config.js" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/web/next.config.js"

    echo "==> Syncing public/ to server..."
    rsync -avz \
      -e "$RSYNC_SSH" \
      "$PROJECT_LOCAL/apps/web/public/" \
      "$REMOTE_HOST:$REMOTE_PATH/apps/web/public/"

    echo "==> Restarting printit-web..."
    $SSH $REMOTE_HOST "pm2 restart printit-web"
fi

echo ""
echo "==> Live status:"
$SSH $REMOTE_HOST "pm2 list | grep printit"
echo ""
echo "NOTE: printit-kiosk should NOT run on AWS — run it on the Windows PC with the printer."
echo "      Stop it on AWS with: ssh (mvg-ssh) then: pm2 stop printit-kiosk && pm2 delete printit-kiosk"

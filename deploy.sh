#!/bin/bash
# Deploy script for Soft Synergy Systems website

set -e

PROJECT_DIR="/home/ubuntu/projects/SOFT-SYNERGY-SYSTEMS"
LOG_FILE="/var/log/soft-synergy-deploy.log"
BACKUP_DIR="/var/backups/soft-synergy-systems"
WEB_DIR="/var/www/softsynergysystems.com"
CADDY_CONFIG="/etc/caddy/Caddyfile"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "=== Starting deployment ==="

# Ensure log file exists
sudo touch "$LOG_FILE"
sudo chmod 666 "$LOG_FILE"

# Create backup if site exists
if [ -d "$WEB_DIR" ] && [ "$(ls -A $WEB_DIR 2>/dev/null)" ]; then
    log "Creating backup..."
    sudo mkdir -p "$BACKUP_DIR"
    sudo tar -czf "$BACKUP_DIR/web-$(date +%Y%m%d-%H%M%S).tar.gz" -C "$WEB_DIR" .
    log "Backup created"
fi

# Pull latest code
log "Pulling latest changes..."
cd "$PROJECT_DIR"
git fetch origin
git reset --hard origin/main
log "Code updated"

# Install dependencies
log "Installing dependencies..."
export PATH="/home/ubuntu/.bun/bin:$PATH"
bun install --frozen-lockfile
log "Dependencies installed"

# Build project
log "Building project..."
bun run build
log "Build completed"

# Deploy build files
log "Deploying to $WEB_DIR..."
sudo rm -rf "$WEB_DIR"/*
sudo mkdir -p "$WEB_DIR"
sudo cp -r "$PROJECT_DIR/dist/"* "$WEB_DIR/"
log "Files copied"

# Set permissions
log "Setting permissions..."
sudo chown -R www-data:www-data "$WEB_DIR"
sudo chmod -R 755 "$WEB_DIR"
log "Permissions set"

# Update Caddy config
log "Updating Caddy config..."
if [ -f "$PROJECT_DIR/Caddyfile" ]; then
    sudo cp "$PROJECT_DIR/Caddyfile" "$CADDY_CONFIG"
    log "Caddyfile updated"
else
    log "Warning: No Caddyfile found"
fi

# Restart Caddy (important)
log "Restarting Caddy..."
sudo systemctl restart caddy
log "Caddy restarted"

log "=== Deployment SUCCESS ✅ ==="
#!/bin/bash
# Deploy script for Soft Synergy Systems website
# Purpose: Pull latest changes, build, and deploy to web directory
# Web server: Caddy (serves from /var/www/softsynergysystems.com)

set -e  # Exit on error

PROJECT_DIR="/home/deployer/projects/SOFT-SYNERGY-SYSTEMS"
LOG_FILE="/var/log/soft-synergy-deploy.log"
BACKUP_DIR="/var/backups/soft-synergy-systems"
WEB_DIR="/var/www/softsynergysystems.com"

log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

log "=== Starting deployment ==="

# Create backup of current web files if exists
if [ -d "$WEB_DIR" ] && [ "$(ls -A $WEB_DIR 2>/dev/null)" ]; then
    log "Creating backup..."
    sudo -n mkdir -p "$BACKUP_DIR"
    sudo -n tar -czf "$BACKUP_DIR/web-$(date +%Y%m%d-%H%M%S).tar.gz" -C "$WEB_DIR" .
    log "Backup created"
fi

# Pull latest changes
log "Pulling latest changes from repository..."
cd "$PROJECT_DIR"
git fetch origin
git reset --hard origin/main
log "Changes pulled successfully"

# Install dependencies
log "Installing dependencies..."
~/.bun/bin/bun install --frozen-lockfile
log "Dependencies installed"

# Build the application
log "Building application..."
~/.bun/bin/bun run build
log "Build completed successfully"

# Copy to web directory (Caddy serves this path)
log "Copying to web directory ($WEB_DIR)..."
sudo -n rm -rf "$WEB_DIR"/*
sudo -n cp -r "$PROJECT_DIR/dist/"* "$WEB_DIR/"
log "Files copied successfully"

# Set proper permissions for Caddy
log "Setting permissions..."
sudo -n chown -R www-data:www-data "$WEB_DIR"
sudo -n chmod -R 755 "$WEB_DIR"
log "Permissions set"

# Reload Caddy to pick up new files
log "Reloading Caddy..."
sudo -n systemctl reload caddy
log "Caddy reloaded successfully"

log "=== Deployment completed successfully ==="

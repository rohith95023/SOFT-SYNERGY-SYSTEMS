# SOFT-SYNERGY-SYSTEMS - Deployment Reference

## SERVER_CONFIG
OCI Ubuntu 24.04 aarch64. SSH alias `ssh oci` → ubuntu@10.0.0.183 (private IP). Public IP required for GitHub Actions. Deployer user (uid:1003) with restricted sudo. Bun at `/home/deployer/.bun/bin/bun`. Git repo at `/home/deployer/projects/SOFT-SYNERGY-SYSTEMS`. Web root `/var/www/softsynergysystems.com` served by Caddy. Backups at `/var/backups/soft-synergy-systems`. Logs at `/var/log/soft-synergy-deploy.log`.

## GITHUB_SECRETS
`SSH_HOST`: Server IP (use public IP if Actions run outside OCI). `SSH_PORT`: 22. `SSH_USER`: deployer. `SSH_PRIVATE_KEY`: Use deployer's ed25519 key below. `SSH_PASSPHRASE`: Empty (key has no passphrase). Add via GitHub → Settings → Secrets → Actions.

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW
QyNTUxOQAAACDM/3qeKHT9aeYEoqOubvVM72qh3CiDH5lxOdqSUY152QAAAKCA819CgPNf
QgAAAAtzc2gtZWQyNTUxOQAAACDM/3qeKHT9aeYEoqOubvVM72qh3CiDH5lxOdqSUY152Q
AAAEBsYn9irpfjRbsQ0lSIW4MBJbhUwnIcEmAaqL1C5XcfHsz/ep4odP1p5gSio65u9Uzv
aqHcKIMfmXE52pJRjXnZAAAAG2RlcGxveWVyQHNvZnRzeW5lcmd5c3lzdGVtcwEC
-----END OPENSSH PRIVATE KEY-----
```

## SUDOERS_CONFIG
File: `/etc/sudoers.d/deployer`, mode 440. Deployer can ONLY run whitelisted commands without password. Content: `deployer ALL=(ALL) NOPASSWD: /usr/bin/tar, /bin/chown, /bin/chmod, /bin/rm, /bin/cp, /bin/systemctl, /bin/mkdir` plus `Defaults:deployer !requiretty, !use_pty`. Validate with `sudo visudo -c`. Check permissions with `sudo -l -U deployer`.

## DEPLOY_FLOW
GitHub push → Action triggers → SSH as deployer → `/home/deployer/projects/deploy.sh`. Script: (1) Backup existing web files to `/var/backups`, (2) Git fetch + reset --hard origin/main, (3) Bun install dependencies, (4) Bun run build (Vite), (5) Copy dist/* to web root, (6) Set www-data:www-data ownership, (7) Reload Caddy. All steps logged with timestamps.

## CADDY_CONFIG
Serves `softsynergysystems.com` from `/var/www/softsynergysystems.com`. Www redirects to non-www. Features: gzip/zstd compression, security headers (X-Content-Type, X-Frame-Options, Referrer-Policy), static asset caching (1 year immutable). Access logs to `/var/log/caddy/softsynergysystems-access.log`. Reload after deploy: `sudo systemctl reload caddy`. Config in `/etc/caddy/Caddyfile`.

## MANUAL_DEPLOY
SSH to server: `ssh oci`. Run as deployer: `sudo -u deployer bash -c 'export PATH=/home/deployer/.bun/bin:$PATH && /home/deployer/projects/deploy.sh'`. View logs: `sudo cat /var/log/soft-synergy-deploy.log`. List backups: `ls -la /var/backups/soft-synergy-systems/`. Restore: `sudo tar -xzf /var/backups/.../web-TIMESTAMP.tar.gz -C /var/www/softsynergysystems.com`.

## GIT_CONFIG
Repo: `rohith95023/SOFT-SYNERGY-SYSTEMS`. Branch: `main`. Remote on server uses PAT for auto-pull: `https://ghp_TOKEN@github.com/rohith95023/SOFT-SYNERGY-SYSTEMS.git`. GitHub Actions: `.github/workflows/deploy.yml` uses `appleboy/ssh-action@v1.0.3`. Triggers: push to main, workflow_dispatch.

## TECH_STACK
React 19.2.4, Vite 7.3.1, Tailwind CSS 4.2.1, React Router DOM 7.13.1, Framer Motion 12.35.2, React Hook Form 7.71.2, Zod 4.3.6. Bun 1.3.10 for runtime. Caddy for static file serving with HTTPS. Single-page app with client-side routing. Build outputs to `dist/` directory.

## TROUBLESHOOTING
Check deployer sudo: `ssh oci "sudo -l -U deployer"`. Validate sudoers: `sudo visudo -c`. Caddy status: `sudo systemctl status caddy`. View Caddy config: `sudo cat /etc/caddy/Caddyfile | grep -A 30 softsynergy`. If deploy fails, check logs first. Common issues: wrong SSH key, missing PAT in git remote, bun not in PATH, sudoers misconfigured.

## SECURITY_NOTES
Deployer user has restricted sudo - only deployment commands allowed. SSH key auth required. Git PAT in remote URL - consider GitHub deploy key instead for rotation. Caddy runs as root, drops to www-data for serving. All deployments logged. Backups created before each deploy. No shell access for deployer from external networks (use bastion).

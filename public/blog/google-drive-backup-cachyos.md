# Automated Google Drive Incremental Backup on CachyOS

I recently documented my full Google Drive backup workflow for CachyOS, and this post is a practical summary you can apply quickly.

The setup uses `rclone`, `fish`, `wofi`, and `systemd --user` timers to create a reliable hourly backup pipeline from local storage to Google Drive.

## Why This Setup Works Well

- Incremental uploads with `rclone copy`
- Safe one-way backup flow (local deletions do not remove cloud files)
- Manual backup command for instant sync when needed
- Automated hourly backups in the background
- Easy monitoring with `systemctl --user` and `journalctl`

## Stack and Backup Flow

| Component | Value |
| --- | --- |
| OS | CachyOS (Arch-based) |
| Shell | Fish |
| Launcher | Wofi |
| Tool | Rclone |
| Local Source | `/mnt/Files/Backup` |
| Remote Path | `ousl-bkp2026:BackUp/ousl-bkp2026` |
| Scheduler | `systemd --user` timer |

## 1. Configure Google Drive Remote in Rclone

Run the interactive setup:

```bash
rclone config
```

Create a remote named `ousl-bkp2026`, choose Google Drive storage, and complete browser OAuth.

Once done, your active config will be at:

```bash
~/.config/rclone/rclone.conf
```

## 2. Add a Fast Manual Backup Command in Fish

Edit Fish config:

```bash
nano ~/.config/fish/config.fish
```

Add this alias:

```fish
alias gbkp 'rclone copy /mnt/Files/Backup ousl-bkp2026:BackUp/ousl-bkp2026 --progress'
```

Reload Fish and run it anytime:

```bash
source ~/.config/fish/config.fish
gbkp
```

## 3. Create Hourly Automated Backups with Systemd User Timer

Create the service file:

```bash
mkdir -p ~/.config/systemd/user
nano ~/.config/systemd/user/rclone-backup.service
```

Use this content:

```ini
[Unit]
Description=Automated Hourly Google Drive Incremental Backup
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
ExecStart=/usr/bin/rclone copy /mnt/Files/Backup ousl-bkp2026:BackUp/ousl-bkp2026

[Install]
WantedBy=default.target
```

Create the timer file:

```bash
nano ~/.config/systemd/user/rclone-backup.timer
```

```ini
[Unit]
Description=Triggers Rclone Backup Service Every 1 Hour

[Timer]
OnCalendar=hourly
Persistent=true

[Install]
WantedBy=timers.target
```

Enable it:

```bash
systemctl --user daemon-reload
systemctl --user enable --now rclone-backup.timer
```

## 4. Verify and Monitor

Check timers:

```bash
systemctl --user list-timers
```

Run a manual service test:

```bash
systemctl --user start rclone-backup.service
```

Check logs:

```bash
journalctl --user -u rclone-backup.service -n 50 --no-pager
```

## Common Fixes

- Timer not triggering:

```bash
systemctl --user restart rclone-backup.timer
systemctl --user status rclone-backup.timer
```

- Re-authenticate Google Drive remote:

```bash
rclone config
```

- Update Rclone on CachyOS:

```bash
sudo pacman -Syu rclone
systemctl --user daemon-reload
```

## In-Depth Reading

For the full step-by-step documentation, prompts, recovery commands, and maintenance checklist, read the complete guide here:

[Automated Google Drive Incremental Backup Setup Guide (Full Documentation)](https://github.com/AsithaKanchana1/doc/blob/master/setup-guides/google-drive-backup-cachyos.md)

---

_Published on June 19, 2026_

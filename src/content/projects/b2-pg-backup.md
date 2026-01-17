---
name: 'Backblaze Postgres Backup'
description: 'A Docker image for backing up Postgres databases using PG Dump and Backblaze'
type: 'personal'
category: 'tool'
sourceUrl: https://github.com/brpaz/b2-pg-backup
technologies:
  - 'Docker'
  - 'Postgres'
  - 'Shell scripting'
coverImage: 'cover.png'
images: []
sortOrder: 3
---

## Key Features

- **Automated Backups**: Schedule regular backups using cron-like syntax
- **Cloud Storage**: Direct integration with Backblaze B2 for secure offsite storage
- **Compression**: Automatic compression of backup files to save storage space
- **Retention Policies**: Configurable backup retention to manage storage costs
- **Easy Deployment**: Simple Docker-based deployment with environment variable configuration
- **Secure**: Encrypted connections and secure credential management

## Use Cases

- **Production Database Backups**: Reliable backup solution for production PostgreSQL instances
- **Disaster Recovery**: Offsite backups for disaster recovery scenarios
- **Development Environments**: Automated backups for staging and development databases
- **Self-Hosted Applications**: Ideal for homelab and self-hosted setups

## Technical Architecture

Built as a lightweight Docker image combining:

- **pg_dump**: Official PostgreSQL backup utility for consistent dumps
- **Backblaze B2 CLI**: Direct integration with B2 cloud storage
- **Shell Scripts**: Automation and orchestration logic
- **Cron**: Scheduled execution for unattended operation

Perfect for anyone running PostgreSQL databases and seeking a cost-effective, reliable backup solution.

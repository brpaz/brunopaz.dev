---
name: 'FreshRSS Cleaner'
description: 'A CLI tool to clean up old articles in FreshRSS, based on user-defined rules.'
type: 'personal'
category: 'tool'
sourceUrl: https://github.com/brpaz/freshrss-cleaner
technologies:
  - 'Golang'
coverImage: 'cover.png'
images: []
sortOrder: 2
---

## Problem It Solves

FreshRSS is an excellent self-hosted RSS aggregator, but over time, accumulated articles can slow down performance and consume storage. Manual cleanup is time-consuming and error-prone.

## Features

- **Rule-Based Cleanup**: Define custom rules for article retention based on age, feed, or other criteria
- **Dry-Run Mode**: Preview what will be deleted before making changes
- **Safe Operations**: Ensures data integrity during cleanup operations
- **Flexible Configuration**: YAML-based configuration for easy customization
- **Performance Focused**: Efficiently handles large article databases

## Use Cases

- Automate article cleanup in scheduled cron jobs
- Maintain optimal FreshRSS database size
- Keep only relevant articles based on custom retention policies
- Free up disk space on self-hosted instances

## Technical Implementation

Built with Go for performance and cross-platform compatibility. Leverages the FreshRSS API for efficient data access and manipulation.

---
name: 'Ulauncher VSCode Projects'
description: 'Extension to allow to open VSCode projects directly from Ulauncher'
type: 'personal'
category: 'tool'
sourceUrl: https://github.com/brpaz/ulauncher-vscode-projects
technologies:
  - 'Python'
coverImage: 'cover.png'
images: []
sortOrder: 6
---

A productivity extension for [Ulauncher](https://ulauncher.io/) that enables instant access to your Visual Studio Code projects.

## Overview

This extension bridges Ulauncher and VS Code, allowing you to search and open your projects without navigating through file browsers or the VS Code interface.

## Key Features

- **Instant Project Search**: Fuzzy search through all your VS Code projects
- **One-Step Opening**: Open projects directly in VS Code from Ulauncher
- **Recent Projects**: Quick access to recently opened projects
- **Workspace Support**: Works with both individual folders and VS Code workspaces
- **Keyboard Workflow**: Fully keyboard-driven for maximum efficiency

## The Problem It Solves

Developers often work on multiple projects simultaneously. Switching between them typically involves:

1. Opening VS Code
2. Navigating through "Open Recent" or file dialogs
3. Finding the right project folder

This extension reduces that to a single keyboard shortcut and search query.

## Use Cases

- **Project Switching**: Rapidly switch between active projects
- **Context Switching**: Quickly open a project for reference while working on another
- **Workspace Management**: Organize and access multiple VS Code workspaces
- **Keyboard Productivity**: Maintain flow without touching the mouse

## Technical Implementation

- Written in Python for Ulauncher compatibility
- Integrates with VS Code's configuration and recent projects data
- Implements fuzzy search for flexible project matching
- Automatically detects VS Code installation and project paths
- Lightweight with minimal performance overhead

Ideal for developers who value keyboard-driven workflows and want to eliminate friction when switching between VS Code projects.

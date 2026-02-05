# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **koompi.com** - the official website for KOOMPI's products and initiatives. The site showcases:

- **KOOMPI Onelab** - Fully functional computer labs with ICT curriculum for schools
- **KOOMPI Content Server** - Offline learning hub with STEM videos, Wiki Khmer, and educational content
- **KOOMPI OS** - Linux-based operating system optimized for education
- **KOOMPI Edu Suite** - Educational software and tools

The site also features a **markdown-powered blog** for updates and news.

## Development Commands

```bash
# Install dependencies
bun install

# Start development server (frontend on :3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Architecture

### Frontend (Vite + React + TypeScript)

- **Framework**: React 18 with TypeScript
- **Routing**: react-router-dom v7
- **Styling**: Tailwind CSS with KOOMPI brand colors
- **Maps**: Leaflet + react-leaflet for Cambodia province visualization

### Key Pages

- `/` - Homepage with product overview
- `/onelab` - KOOMPI Onelab product page
- `/content-server` - KOOMPI Content Server product page
- `/os` - KOOMPI OS product page
- `/edu-suite` - KOOMPI Edu Suite product page
- `/blog` - Markdown-powered blog
- `/blog/:slug` - Individual blog post

### Type System

All shared types are in `src/types.ts`:

- **SchoolStatus**: `'none' | 'lab' | 'lab-content' | 'full-solar'`
- **STATUS_CONFIG**: UI configuration (labels, colors, icons) for each status level
- School, Donation, ImpactStats, Province, BarayIntent interfaces

## Color System

KOOMPI brand colors are defined in `tailwind.config.js`:
- `koompi-primary`: #021C40 (dark blue - signature)
- `koompi-secondary`: #035F5F (teal)
- `accent-blue`: #38ACD9
- `accent-orange`: #F1811B
- `accent-yellow`: #EEEE81
- `cream`: #FFF9F0 (background)

Use these semantic classes rather than arbitrary values.

## Blog System

Blog posts are markdown files stored in `src/content/blog/`. Each post requires frontmatter:

```yaml
---
title: Post Title
slug: post-slug
date: 2025-01-15
author: Author Name
category: update | onelab | content-server | os | edu-suite
excerpt: Brief description
---
```

## School Status Levels

| Status | Meaning |
|--------|---------|
| `none` | Awaiting support (no equipment) |
| `lab` | Lab only (computers installed) |
| `lab-content` | Lab + Content Server (offline educational content) |
| `full-solar` | Full solar powered (lab + content + renewable energy) |

## Onelab Map

The Onelab page uses Leaflet.js with OpenStreetMap tiles to display installed computer lab locations across Cambodia's 25 provinces. Markers are color-coded by funding progress.

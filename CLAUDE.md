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

Official KOOMPI brand colors (from `koompi-color-system.png`), defined in `tailwind.config.js`:

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Primary | `koompi-primary` | #263c5c | 60% — Navy Blue (backgrounds, text, dark sections) |
| Secondary | `koompi-secondary` | #38A7C8 | 30% — Teal/Cyan (highlights, links, secondary elements) |
| Accent | `koompi-accent-pink` | #F16179 | 10% — Fiery Pink (CTAs, badges, accents) |
| Accent | `koompi-accent-yellow` | #FFD700 | 10% — Gold Yellow (sparingly, highlights) |
| Background | `cream` | #f7f7f7 | Light gray background |

Use these semantic classes rather than arbitrary color values.

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

# lab.koompi.com

Bringing digital education to every school in Cambodia.

## Overview

One lab. Every school.

This platform enables donors to fund computer labs, content servers, and solar power systems for schools across Cambodia. Built in partnership with the Ministry of Education, Youth and Sport (MoEYS).

## Features

- **School Directory**: Browse 1,743 priority schools from MoEYS database
- **Transparent Pricing**: See exactly what your donation provides
- **Impact Tracking**: Real-time stats on schools equipped and students reached
- **Baray Payment**: Accepts ABA Bank, ACLEDA, and Wing via KHQR
- **CSV Import**: Bulk import school data from MoEYS

## Tech Stack

- **Frontend**: Vite + React + TypeScript + Tailwind CSS
- **Backend**: Express + MongoDB
- **Payment**: Baray API (Cambodian banks)
- **Deployment**: Docker on kconsole.koompi.cloud

## Development

```bash
# Install dependencies
npm install

# Start frontend (port 3000)
npm run dev

# Start backend (port 3001)
npm run server
```

## Deployment

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## License

© KOOMPI 2026. All rights reserved.

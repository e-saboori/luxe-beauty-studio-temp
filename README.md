# Sepid Beauty Studio

A multi-page luxury beauty website built with Next.js. Booking links route to Square, while services and prices can be synced server-side from Square Catalog data.

## Setup

```bash
npm.cmd install
npm.cmd run dev
```

Create `.env.local` from `.env.example` when Square API credentials are available.

Without `SQUARE_ACCESS_TOKEN`, the site uses mock services so design and content work can continue.

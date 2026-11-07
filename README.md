# Kiki's Kitchen — prototype

A mobile-first, single-page restaurant site for **Kiki's Kitchen** in Kitengela. Built with Next.js (App Router), React, TypeScript, Tailwind CSS v4, and `lucide-react`.

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production check:

```bash
npm run build
npm start
```

## What's here

- **Sticky header** with mobile menu and an "Order Now" jump link.
- **Hero** with food photography, direct-ordering pitch, and a "Today's pot" ticket.
- **Featured menu** with a reusable `MenuItem` component. Every order button builds a pre-filled WhatsApp message.
- **Catering section** with a quote form that opens WhatsApp with the guest's details.
- **Footer** with location, hours, phone, and the "Powered by direct local ordering" line.

## Swap before pitching

1. **WhatsApp number** — edit `whatsappNumber` in `src/lib/site.ts` (currently the placeholder `254700000000`).
2. **Menu items and prices** — edit the `menuItems` array in `src/app/page.tsx`.
3. **Photos** — replace the files in `public/images/` with Kiki's own photography. Placeholder credits are in `public/images/CREDITS.md`.
4. **Location / hours / phone** — edit the `site` object in `src/lib/site.ts`.

## Notes

- The prototype has no database or backend. Menu data lives in `page.tsx`, and all ordering/catering actions are WhatsApp deep links.
- Images are stored locally so the prototype renders without third-party image requests.
- The date field accepts any date; add a `min` value when the real booking flow is built.
# KikiKitchen

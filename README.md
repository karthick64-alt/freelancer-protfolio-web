# FreelanceHub – Freelance Services Directory (Front‑End Prototype)

A clean, trust‑focused freelance marketplace UI built with **HTML5**, **Tailwind CSS (CDN)**, and a small amount of **vanilla JavaScript**.  
This is a visual prototype showing the full product vision (home, listings, profiles, dashboards, blog, legal), ready to be wired to a backend.

## Features

- **Home**: Hero with global search, popular categories, featured freelancers, how‑it‑works, testimonials, and strong CTAs.
- **Service categories**: Collapsible sections with sub‑categories (e.g. Web Design → UI/UX, Landing Pages, Branding).
- **Freelancer listing**: Filter sidebar (skill, budget, rating, location, availability) plus cards with pricing, tags, and ratings.
- **Freelancer profile**: About, skills, portfolio highlights, service packages (Basic / Standard / Premium), reviews & ratings, hire CTA.
- **Dashboards (preview)**: Client and freelancer dashboard “cards” showcasing how orders, messages, earnings, and requests will appear.
- **Resources**: Blog / guides section for freelancing tips and hiring guides.
- **Legal & platform modules**: Footer copy blocks for Terms, Privacy, Refund policy, and key platform modules (auth, messaging, payments, admin).

> Note: Authentication, real search, messaging, escrow payments, and admin are **not implemented yet** – they require a backend/API.

## Tech stack

- **HTML5** – single `index.html` with sections for each module.
- **Tailwind CSS (CDN)** – for layout, spacing, colors, responsive design.
- **Custom CSS** in `styles.css` – fonts (Inter, Poppins) and a few bespoke styles to make the UI feel “wow”.
- **Vanilla JS** in `main.js` – mobile nav toggle, dashboard tab switch, hero tag shortcuts, and small UX touches.

## Getting started

1. Open the project folder:

   ```bash
   cd "Freelance services directory"
   ```

2. Open `index.html` directly in your browser:

   - On Windows, you can double‑click `index.html`, or
   - Right‑click → “Open with” → choose your browser.

3. Optional: run a lightweight local server (recommended for future APIs):

   ```bash
   # Using Python 3
   python -m http.server 8000
   # then visit http://localhost:8000 in the browser
   ```

## Customization

- **Brand & colors**: Adjust the Tailwind config inside `<script>` in `index.html` (the `primary` color palette) for different blue tones.
- **Typography**: Change Google Fonts in the `<head>` of `index.html` and update `.font-display` in `styles.css` if you want different headings.
- **Sections**: Each major module is a `<section>` with an `id`:
  - `#home`, `#categories`, `#service-categories`, `#freelancer-list`,
    `#freelancer-profile`, `#services-gigs`, `#dashboards`, `#blog`,
    plus footer legal anchors `#terms`, `#privacy`, `#refund`.

You can now hand this UI to a backend developer to connect **real data, authentication, chat, and payments**, or continue evolving the front‑end look in Figma based on this structure.









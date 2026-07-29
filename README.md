# ShipNow Frontend Assignment

Responsive ShipNow logistics dashboard implementation using React + Vite + Tailwind CSS.

## Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Recharts
- Local mock data only
- No API, server route, database, or pre-styled component library

## Demo login

```text
Email: sadib@shipnow.com
Password: 1234
```

The app stores a simulated session in `localStorage`.

## Setup

```bash
npm install
npm run dev
```

Vite will normally print:

```text
http://localhost:5173
```

Production build:

```bash
npm run build
npm run preview
```

## Routes

- `/login`
- `/dashboard`
- `/shipments?view=table`
- `/shipments?view=grid`
- `/shipments/new`
- `/invoices`
- `/warehouse`

Required navigation-only placeholder routes are also included:
Analytics, Calendar, Tracking, Fleets, Drivers, Message, Notification, Settings.

## Screen status

| Screen | Status |
| --- | --- |
| Login | Complete |
| Dashboard | Complete |
| Shipments - Table | Complete |
| Shipments - Grid | Complete |
| Create New Shipment | Complete against supplied Figma reference |
| Invoices & Billing | Complete |
| Warehouse | Complete from written specification |

## Functional requirements implemented

- Simulated login session
- Login validation: required, email format, password length, show/hide password
- Shared dashboard application shell
- Desktop full sidebar, tablet icon rail, mobile hamburger drawer
- Shipments view switcher on a single `/shipments` route
- Search and status filtering
- Shipment table sorting and row selection
- Pagination and page size selection
- Data-driven Recharts charts
- Create Shipment validation and clearing errors after correction
- Invoice row selection updates detail
- Invoice totals calculated from line items
- Interactive warehouse floor tabs
- Responsive internal table scrolling without horizontal page scrolling
- Semantic labels, alt text, and visible focus states

## Breakpoints

The implementation is designed around the assignment reference widths:

- Desktop reference: 1440px
- Tablet reference: 768px
- Mobile reference: 375px

Behaviour between these widths is fluid.

## Design assumptions / known limitations

The supplied visual references clearly show Login, Dashboard, Shipments Table,
Shipments Grid, and Invoices & Billing at the required breakpoints.

A full desktop/tablet/mobile Figma visual reference is now included for
**Create New Shipment**, and that screen has been matched to the supplied frame,
including the deliberately shown validation errors.

A full Figma visual frame for **Warehouse** has not yet been supplied in the current
project package. Warehouse therefore follows the written assignment requirements and
reuses the ShipNow design system until that exact frame is available.

## Submission checklist

- [ ] Push to a public GitHub repository
- [ ] Commit incrementally with descriptive commit messages
- [ ] Add the live deployment URL here
- [ ] Deploy to Vercel/Netlify/equivalent
- [ ] Test the deployed app in a private/incognito browser
- [ ] Confirm all screen status entries are accurate
- [ ] Submit both repository and live URL through the required Google Form

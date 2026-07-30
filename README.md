# ShipNow — Logistics Management Dashboard

# ShipNow — Logistics Management Dashboard

## Demo Login Credentials

> **Email:** `sadib@shipnow.com`  
> **Password:** `1234`  
> **Live Website:** [shipnow-ridwan.netlify.app](https://shipnow-ridwan.netlify.app)


These credentials are for demonstration purposes only.

---

## Project Overview

**ShipNow** is a responsive logistics management dashboard developed as a frontend project. It provides interfaces for managing shipments, invoices, warehouse information, tracking, analytics, fleets, drivers, messages, and notifications.

The application follows the supplied Figma design and supports desktop, tablet, and mobile screen sizes.

## Technologies Used

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- React Icons
- Recharts
- JavaScript
- Local mock data
- Local Storage for the simulated login session

No backend server, external API, or database is used in this project.

## Main Features

- Responsive login page
- Form validation
- Password show/hide functionality
- Simulated authentication
- Protected dashboard routes
- Desktop sidebar
- Tablet icon sidebar
- Mobile navigation drawer
- Dashboard statistics and charts
- Shipment table view
- Shipment grid view
- Shipment searching and filtering
- Shipment sorting and row selection
- Pagination and page-size controls
- Create New Shipment form
- Invoice and billing management
- Dynamic invoice details
- Invoice amount calculation
- Warehouse management interface
- Responsive desktop, tablet, and mobile layouts

## Available Pages

- Login
- Dashboard
- Analytics
- Calendar
- Shipments
- Create New Shipment
- Tracking
- Warehouse
- Fleets
- Drivers
- Invoices & Billing
- Messages
- Notifications
- Settings

## Project Routes

```text
/login
/dashboard
/analytics
/calendar
/shipments
/shipments?view=table
/shipments?view=grid
/shipments/new
/tracking
/warehouse
/fleets
/drivers
/invoices
/message
/notification
/settings
```

## Installation

Make sure that Node.js and npm are installed on your computer.

Clone the repository:

```bash
git clone <your-repository-url>
```

Open the project directory:

```bash
cd shipnow-frontend
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will display a local URL similar to:

```text
http://localhost:5173/
```

Open that URL in your browser.

## Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Login Instructions

Use the following credentials on the login page:

```text
Email: sadib@shipnow.com
Password: 1234
```

After a successful login, the application redirects the user to the dashboard.

The login session is stored in the browser's `localStorage`. Therefore, refreshing or reopening the application may take the user directly to the dashboard.

To clear the saved session, open the browser console and run:

```javascript
localStorage.removeItem("shipnow-session");
location.reload();
```

## Responsive Design

The application is optimized for the following reference screen sizes:

```text
Desktop: 1440px
Tablet: 768px
Mobile: 375px
```

The layouts remain fluid between these screen sizes.

## Project Structure

```text
src/
├── components/
│   ├── common/
│   ├── dashboard/
│   ├── forms/
│   ├── invoices/
│   ├── layout/
│   ├── shipments/
│   └── warehouse/
├── context/
│   └── AuthContext.jsx
├── data/
├── pages/
│   ├── Analytics/
│   ├── Calendar/
│   ├── CreateShipment/
│   ├── Dashboard/
│   ├── Drivers/
│   ├── Fleets/
│   ├── Invoices/
│   ├── Login/
│   ├── Messages/
│   ├── Notifications/
│   ├── Shipments/
│   ├── Tracking/
│   └── Warehouse/
├── App.jsx
├── index.css
└── main.jsx
```

## Important Notes

- This project contains frontend functionality only.
- Authentication is simulated and is not secure for production use.
- Data is loaded from local mock-data files.
- The project does not use a database or backend API.
- The demo credentials must not be used as real production credentials.
- Do not open `index.html` directly or use VS Code Live Server.
- Always run the application using `npm run dev`.

## Author

**Ridwan Jamal Sadib**

## License

This project was developed for educational and assignment purposes.

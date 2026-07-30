ShipNow — Logistics Management Dashboard

Demo Login Credentials

Email: sadib@shipnow.comPassword: 1234Live Demo: shipnow-ridwan.netlify.app

These credentials are provided for demonstration purposes only.

Project Overview

ShipNow is a complete and responsive logistics management dashboard developed as a frontend project. It provides interfaces for managing shipments, invoices, warehouses, fleets, drivers, tracking, analytics, calendars, messages, notifications, and application settings.

The application was developed by following the supplied Figma design and project requirements. It supports desktop, tablet, and mobile devices.

Since no backend API or complete dataset was provided, local JSON data was created and used to populate the application screens.

Technologies Used

React 18

Vite

Tailwind CSS

React Router DOM

React Icons

Recharts

JavaScript

Local JSON data

Local Storage

No backend server, external API, or database is used in this project.

Main Features

Responsive login page

Login form validation

Password show-and-hide functionality

Simulated authentication

Protected application routes

Persistent login session using Local Storage

Responsive desktop sidebar

Responsive tablet sidebar

Mobile navigation drawer

Dashboard statistics and charts

Shipment table view

Shipment grid view

Shipment search and filtering

Shipment sorting

Row selection

Pagination and page-size controls

Create New Shipment form

Shipment tracking interface

Warehouse management

Fleet management

Driver management

Invoice and billing management

Dynamic invoice details

Invoice amount calculations

Analytics interface

Calendar interface

Messages interface

Notifications interface

Settings interface

Responsive layouts across all screens

Available Pages

Login

Dashboard

Analytics

Calendar

Shipments Table View

Shipments Grid View

Create New Shipment

Tracking

Warehouse

Fleets

Drivers

Invoices & Billing

Messages

Notifications

Settings

Project Routes

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

Screen-by-Screen Status

Screen

Status

Details

Login

Complete

Includes validation, password visibility, simulated authentication, and responsive design

Dashboard

Complete

Includes statistics, charts, shipment information, and responsive layouts

Analytics

Complete

Includes analytics cards, charts, and locally prepared JSON data

Calendar

Complete

Includes a complete calendar interface and local demonstration data

Shipments Table View

Complete

Includes search, filtering, sorting, row selection, and pagination

Shipments Grid View

Complete

Includes a responsive card-based shipment layout

Create New Shipment

Complete

Includes shipment form fields, validation, and responsive design

Tracking

Complete

Includes shipment tracking details and status information

Warehouse

Complete

Includes warehouse information loaded from local JSON data

Fleets

Complete

Includes fleet information loaded from local JSON data

Drivers

Complete

Includes driver information loaded from local JSON data

Invoices & Billing

Complete

Includes invoice lists, invoice details, calculations, and responsive action buttons

Messages

Complete

Includes message conversations and local JSON data

Notifications

Complete

Includes notification items and local JSON data

Settings

Complete

Includes the settings interface and responsive layout

All required screens have been completed and made responsive for desktop, tablet, and mobile devices.

Installation and Setup

Make sure that Node.js and npm are installed on your computer.

1. Clone the Repository

git clone <your-repository-url>

2. Open the Project Directory

cd shipnow-frontend

3. Install Dependencies

npm install

4. Start the Development Server

npm run dev

Vite will display a local development URL similar to:

http://localhost:5173/

Open the displayed URL in your browser.

Production Build

Create a production build using:

npm run build

Preview the production build using:

npm run preview

Login Instructions

Use the following credentials on the login page:

Email: sadib@shipnow.com
Password: 1234

After a successful login, the user is redirected to the dashboard.

The login session is saved in the browser using localStorage. Therefore, refreshing or reopening the application may keep the user logged in.

To clear the saved login session, open the browser console and run:

localStorage.removeItem("shipnow-session");
location.reload();

Data Source

The project does not use a live API or database.

Local JSON data was created and used for the following screens:

Dashboard

Analytics

Calendar

Shipments

Tracking

Warehouse

Fleets

Drivers

Invoices & Billing

Messages

Notifications

Settings

The JSON data is used to demonstrate the user interface, interactions, charts, tables, cards, and other frontend functionality.

Responsive Design

The application includes responsive layouts for:

Desktop devices

Tablet devices

Mobile devices

Navigation, cards, tables, forms, charts, buttons, and content sections adapt according to the available screen size.

Project Structure

src/
├── assets/
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
│   ├── Settings/
│   ├── Shipments/
│   ├── Tracking/
│   └── Warehouse/
├── App.jsx
├── index.css
└── main.jsx

Known Issues

The application is frontend-only and does not use a real backend server.

Authentication is simulated using fixed demonstration credentials.

Application data is loaded from local JSON files instead of a live API or database.

Data changes are not permanently stored in a database.

Some actions that normally require server-side processing are demonstrated through frontend interactions.

Clearing browser storage removes the saved login session.

Minor visual differences may appear depending on the browser, operating system, or device dimensions.

Production-level authentication, authorization, security, and data persistence are not included.

Assumptions

The supplied Figma design was used as the main visual reference.

No backend API, database, or complete data source was provided.

Local JSON files were created to provide realistic demonstration data for all application screens.

The local JSON data represents mock logistics information and is not connected to real users, shipments, invoices, warehouses, fleets, or drivers.

The login credentials are fixed and used only for project demonstration.

The login session is stored using browser localStorage.

Buttons and actions that normally require backend processing are implemented as frontend simulations.

Charts and analytics are generated from locally prepared demonstration data.

All required screens were implemented based on the available design references and assignment requirements.

Important Notes

Do not open index.html directly.

Do not run the project using VS Code Live Server.

Always install the dependencies before starting the project.

Always run the application using:

npm run dev

Author

Ridwan Jamal Sadib

License

This project was developed for educational and assignment purposes.

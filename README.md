## MERN E‑Commerce

Full‑stack e‑commerce web app built with MongoDB, Express, React, and Node.js. It includes user auth, product catalog, cart, checkout, orders, reviews, admin product/order management, Cloudinary image uploads, and PayPal payments.

### Tech Stack
- **Frontend**: React + Vite, Redux Toolkit, Tailwind CSS, shadcn/ui
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Payments**: PayPal (server + client integration)
- **Media**: Cloudinary

---

## Monorepo Layout
```
mern-ecommerce/
  client/        # React app (Vite)
  server/        # Express API (Node.js + MongoDB)
```

Key client paths:
- `client/src/pages/shopping-view/` customer‑facing pages
- `client/src/pages/admin-view/` admin pages
- `client/src/components/` shared UI and feature components
- `client/src/store/` Redux Toolkit slices and API helper

Key server paths:
- `server/models/` Mongoose models (`User`, `Product`, `Order`, `Cart`, `Address`, `Review`, `Feature`)
- `server/controllers/` route controllers grouped by domain
- `server/routes/` Express routes grouped by domain
- `server/helpers/` `cloudinary.js`, `paypal.js`
- `server/server.js` Express bootstrap

---

## Prerequisites
- Node.js 18+
- npm 9+ (or pnpm/yarn)
- MongoDB instance (local or Atlas)
- Cloudinary account (for images)
- PayPal REST app (for checkout)

---

## Quick Start
Open two terminals at the repo root.

1) Install dependencies
```bash
cd client && npm install
cd ../server && npm install
```

2) Configure environment variables

Create `server/.env`:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern_ecommerce
JWT_SECRET=replace_with_strong_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox  # or live

# CORS
CLIENT_URL=http://localhost:5173
```

Optionally, create `client/.env` (Vite uses VITE_ prefix):
```bash
VITE_API_BASE_URL=http://localhost:5000
```

3) Run development servers
```bash
# Terminal A (API)
cd server
npm run dev

# Terminal B (Web)
cd client
npm run dev
```

Default URLs:
- Client: `http://localhost:5173`
- Server: `http://localhost:5000`

---

## Available Scripts

Client (`client/`):
- `npm run dev` – start Vite dev server
- `npm run build` – production build
- `npm run preview` – preview built app

Server (`server/`):
- `npm run dev` – start with nodemon
- `npm start` – start server

---

## Environment Variables Reference

Server `.env`:
- **PORT**: API port
- **MONGODB_URI**: MongoDB connection string
- **JWT_SECRET**: JWT signing secret
- **CLOUDINARY_CLOUD_NAME | CLOUDINARY_API_KEY | CLOUDINARY_API_SECRET**: for image uploads
- **PAYPAL_CLIENT_ID | PAYPAL_CLIENT_SECRET | PAYPAL_MODE**: for PayPal payments
- **CLIENT_URL**: allowed CORS origin (client URL)

Client `.env`:
- **VITE_API_BASE_URL**: base URL for API requests

---

## Features Overview

User‑facing:
- Browse products with filters, search, and sorting
- Product details, ratings & reviews
- Cart and address management
- Checkout with PayPal
- Order history and order details

Admin:
- Product list and management (with Cloudinary image uploads)
- Orders list and order management

Auth:
- Register, login, protected routes

---

## API Overview

Routes are grouped under:
- `auth/` – login/register
- `shop/` – products, cart, order, address, review, search
- `common/` – feature images
- `admin/` – products, orders

Examples (prefix with `/api` or `/` depending on `server.js` mounting):
- `GET /shop/products/get` – list products (supports filters & sort)
- `GET /shop/products/get/:id` – product details
- `POST /shop/cart/add` – add to cart
- `GET /shop/order/user/:userId` – user orders
- `POST /common/feature/add` – add feature image (admin)

Review `server/routes/**` for the full set.

---

## Payments (PayPal)
- Client initiates order -> Server creates PayPal order and returns `approvalURL`
- User approves on PayPal, then return/success pages handle capture
- See `server/helpers/paypal.js` and `client/src/pages/shopping-view/paypal-return.jsx` and `payment-success.jsx`

Roadmap: Stripe support can be added alongside PayPal if required.

---

## Cloudinary Media
- Server uses `server/helpers/cloudinary.js`
- Admin image uploads via client component `client/src/components/admin-view/image-upload.jsx`

---

## Styling & UI
- Tailwind CSS configured in `client/tailwind.config.js`
- shadcn/ui components under `client/src/components/ui/`

---

## Deployment

Server:
- Provide production `.env`
- Build and run with `npm start`
- Ensure MongoDB, Cloudinary, and PayPal credentials are configured
- Configure CORS `CLIENT_URL`

Client:
- `npm run build` to produce static assets in `dist/`
- Serve via static host (e.g., Nginx, Netlify, Vercel). Configure `VITE_API_BASE_URL` to backend URL

---

## Troubleshooting
- 404s on client routes in production: configure fallback to `index.html`
- CORS issues: ensure `CLIENT_URL` matches the frontend origin
- PayPal errors: verify sandbox vs live mode and credentials
- Images not appearing: validate Cloudinary credentials and upload presets

---

## License
This project is provided as‑is for educational and personal use. Add a license here if you plan to distribute.



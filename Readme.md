# Soubhagya Clothing Online Store

Soubhagya Clothing is a fully-functional e-commerce website built with modern web technologies. This project was developed to showcase my skills as a software developer while creating a professional online store for my traditional clothing business.

## Project Overview

This project is built using the following technologies:

- **Frontend**: [Next.js](https://nextjs.org/)
- **Backend**: [Express.js](https://expressjs.com/) with [Node.js](https://nodejs.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) (hosted on MongoDB Atlas)
- **Payment Processing**: [Stripe](https://stripe.com/)
- **Deployment**:
  - **Frontend**: [Vercel](https://vercel.com/)
  - **Backend**: [Heroku](https://www.heroku.com/)
  - **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

## Features

- **User Authentication**: Secure login and registration using JWT (JSON Web Tokens).
- **Product Management**: Admin dashboard to add, edit, and remove products.
- **Shopping Cart**: Add items to the cart, update quantities, and remove items.
- **Checkout**: Secure payment processing with Stripe.
- **Order Management**: View past orders and order details.
- **Responsive Design**: Mobile-first design to ensure a great user experience across all devices.
- **SEO Optimized**: Server-side rendering with Next.js for better search engine rankings.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/soubhagya-clothing.git
   cd soubhagya-clothing

soubhagya-clothing/
│
├── backend/                      # Backend folder (Express.js)
│   ├── controllers/              # Controller functions for handling logic
│   │   ├── productController.js  # Logic for product management
│   │   ├── authController.js     # Logic for authentication
│   │   └── orderController.js    # Logic for order processing
│   ├── models/                   # Database models
│   │   ├── User.js               # User model
│   │   ├── Product.js            # Product model
│   │   └── Order.js              # Order model
│   ├── routes/                   # API routes
│   │   ├── productRoutes.js      # Routes for products
│   │   ├── authRoutes.js         # Routes for authentication
│   │   └── orderRoutes.js        # Routes for orders
│   ├── config/                   # Configuration files
│   │   └── db.js                 # Database connection file
│   ├── middleware/               # Middleware functions
│   ├── server.js                 # Main server file
│   └── .env                      # Environment variables
│
├── frontend/                     # Frontend folder (Next.js)
│   ├── components/               # Reusable React components
│   │   ├── Header.js             # Header component
│   │   ├── Footer.js             # Footer component
│   │   ├── ProductList.js        # Product list component
│   │   └── ProductCard.js        # Product card component
│   ├── pages/                    # Next.js pages (each file represents a route)
│   │   ├── index.js              # Home page
│   │   ├── products.js           # Products page
│   │   ├── product/[id].js       # Dynamic product detail page
│   │   ├── checkout.js           # Checkout page
│   │   └── api/                  # API routes in Next.js
│   ├── styles/                   # Global and component-specific styles
│   │   └── globals.css           # Global CSS
│   ├── public/                   # Public assets (images, videos, etc.)
│   ├── next.config.js            # Next.js configuration
│   ├── package.json              # NPM dependencies
│   └── .env.local                # Environment variables for frontend
│
└── README.md                     # Project documentation

# Set up development environment



## Installed 
1. Installed Node.js
2. Installed Visual Studio Code
3. Installed Git

## Set up project
1. React.js, Next.js
2. Express.js, Node.js
3. MongoDB

## Learn and Implement FrontEnd(Next.js with React.js)

## Learn and Implement BackEnd(Express.js with Node.js)
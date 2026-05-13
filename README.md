# Online Shop

E-commerce web application built with React, TypeScript, and Vite.

## Live Demo

View the live site here:

https://jsfw-2025-v1-jorgen-jsfw.vercel.app/

https://dynamic-kelpie-c1884d.netlify.app/

##

## Project Description

This project is an online shopping application built as part of a front-end development assignment.

Users can:

- Browse products
- Search for products dynamically
- View detailed product information
- Add products to cart
- Adjust quantities in cart
- Remove products from cart
- Complete checkout
- Submit a contact form with validation

The application is fully responsive for desktop, tablet, and mobile devices.

##

## Features

Home Page

- Fetches products from the Noroff Online Shop API
- Displays:
  - Product image
  - Product title
  - Product price
  - Discounted price
  - Discount percentage badge
  - Product rating
- Dynamic search filtering

##

## Product Details Page

- Fetches a single product using product ID
- Displays:
  - Product image
  - Description
  - Tags
  - Reviews
  - Ratings
  - Discount information
- Add to cart functionality
- Toast notification when adding item to cart

## Shopping Cart

- Cart item counter in header
- Add/remove products
- Increase/decrease quantity
- Total price calculation
- Cart saved in localStorage
- Checkout functionality
- Toast notification when removing items

## Checkout Success Page

- Displays order confirmation message
- Clears cart after checkout

## Contact Page

Includes form validation for:

- Full name
- Subject
- Email
- Message

Validation errors are displayed clearly to the user.

## Technologies Used

- React
- TypeScript
- Vite
- React Router
- CSS Modules
- React Toastify

## Responsive Design

The website is responsive across:

- Desktop
- Tablet
- Mobile

Responsive layouts are created using CSS media queries and flexible grid layouts.

## API

Data is fetched from the Noroff Online Shop API:

https://v2.api.noroff.dev/online-shop

## Installation

1. Clone the repository
   git clone https://github.com/NoroffFEU/jsfw-2025-v1-jorgen-jsfw.git

2. Navigate into the project/ if needed.

   cd jsfw-2025-v1-jorgen-jsfw

3. Install dependencies

   npm install

4. Start development server

   npm run dev

## Author

Jørgen Bjørnethun

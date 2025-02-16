# MERN E-Commerce Backend

This is the backend for the MERN E-Commerce project, built with Node.js, Express, and MongoDB.

## Features
- User Authentication (JWT-based)
- Product Management (CRUD operations)
- Cart and Wishlist Functionality
- Order Processing

## 📌 Working of the Project

## 1️⃣ User Authentication
-Signup: Users can register with name, email, and password.
-Login: Users authenticate using email & password, receiving a JWT token for secure  access.
-Protected Routes: Users need authentication (JWT) to access certain routes, like order placement.

## 2️⃣ Product Management
-Get All Products: GET /api/products → Fetches all products.
-Get Product by ID: GET /api/products/:id → Fetches details of a single product.
-Admin CRUD Operations:
-Add new products.
-Update product details.
-Delete products.

## 3️⃣ Cart & Wishlist Functionality
-Users can add products to the cart.
-Update cart quantity or remove items.
-Cart data is stored in MongoDB.

## 4️⃣ Order Processing
-Place an Order: POST /api/orders → Users place an order with products from their cart.
-View Orders: GET /api/orders → Users can view their past orders.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication


## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
2. Navigate to the project directory:
    cd your-repo-name
3. Install dependencies:
    npm install
4. Set up environment variables:
    Create a .env file in the root directory.
    Add the following values:
    PORT=5000
    MONGO_URI=your-mongodb-connection-string
    JWT_SECRET=your-secret-key
5. Run the server:
    npm start
    The server will run on http://localhost:5000.



## Author
Thejaswini K
GitHub: Thejaswinik19

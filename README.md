🍔 Food Delivery Website (MERN Stack)

A full-stack Food Delivery Web Application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).
The project includes:

👨‍💼 Admin Panel

👤 Customer (Delivery) Website

🖥 Backend API

💳 Stripe Payment Integration

☁ MongoDB Atlas Database

📁 Project Structure
Food-Delivery-Website/
│
├── admin/        → Admin Panel (React + Vite)
├── backend/      → Backend Server (Node + Express + MongoDB)
├── delivery/     → Customer Frontend (React + Vite)
└── README.md
🚀 Features
👤 Customer (Delivery Website)

Browse food items

Add to cart

User authentication (JWT)

Place orders

Stripe payment integration

View order history

👨‍💼 Admin Panel

Add new food items

Upload food images

View all orders

Update order status

Manage food items

🖥 Backend API

RESTful API

MongoDB Atlas connection

JWT Authentication

Stripe payment handling

Image upload using Multer

🛠 Tech Stack
Frontend

React.js

Vite

Axios

React Router

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

JWT

Bcrypt

Stripe

Multer

Dotenv

⚙️ Installation & Setup Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/Food-Delivery-Website.git
cd Food-Delivery-Website
🖥 Backend Setup
Step 1: Go to backend folder
cd backend
Step 2: Install dependencies
npm install
Step 3: Create .env file inside backend folder
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
Step 4: Start backend server
npm start

Server runs on:

http://localhost:5000
👨‍💼 Admin Panel Setup

Open new terminal:

cd admin
npm install

Create .env file inside admin folder:

VITE_BACKEND_URL=http://localhost:5000

Start admin panel:

npm run dev

Runs on:

http://localhost:5173
👤 Delivery Frontend Setup

Open another terminal:

cd delivery
npm install

Create .env file inside delivery folder:

VITE_BACKEND_URL=http://localhost:5000

Start frontend:

npm run dev

Runs on:

http://localhost:5174
🌐 MongoDB Atlas Setup

Create account on MongoDB Atlas

Create cluster (Free M0)

Create Database User

Add IP Address (0.0.0.0/0 for development)

Get connection string

Add it to backend .env

Example:

mongodb+srv://username:password@cluster0.mongodb.net/foodApp?retryWrites=true&w=majority
💳 Stripe Setup

Create Stripe account

Go to Developers → API Keys

Copy Secret Key

Add it to backend .env

STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
🔥 Common Issues & Fixes
❌ ERR_CONNECTION_REFUSED

Make sure frontend backend URL matches backend port.

❌ Database authentication failed

Check MongoDB username/password and network access.

❌ Stripe API error

Make sure STRIPE_SECRET_KEY is added in .env.


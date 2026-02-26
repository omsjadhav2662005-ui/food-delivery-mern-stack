# 🍔 Food Delivery Website (MERN Stack)

A full-stack Food Delivery Web Application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.

This project includes:
- 🖥 Backend REST API
- 👨‍💼 Admin Dashboard
- 👤 Customer (Delivery) Website
- 💳 Stripe Payment Integration
- ☁ MongoDB Atlas Database

---

## 📌 Project Overview

The Food Delivery Website allows customers to browse food items, add them to cart, and place orders securely using Stripe payments.  

The Admin Panel enables administrators to manage food items and track customer orders.

---

## 🏗 Project Structure


Food-Delivery-Website/
│
├── backend/ # Node.js + Express API
├── admin/ # Admin Panel (React + Vite)
├── delivery/ # Customer Frontend (React + Vite)
└── README.md


---

## 🚀 Features

### 👤 Customer (Delivery Website)
- User registration & login (JWT Authentication)
- Browse food items
- Add to cart
- Place orders
- Stripe payment integration
- View order history

### 👨‍💼 Admin Panel
- Add new food items
- Upload food images
- View all orders
- Update order status
- Manage food items

### 🖥 Backend API
- RESTful API architecture
- MongoDB Atlas integration
- Secure password hashing (bcrypt)
- JWT-based authentication
- Stripe payment handling
- Image upload with Multer

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (Authentication)
- Bcrypt (Password Hashing)
- Stripe (Payments)
- Multer (File Upload)
- Dotenv (Environment Variables)

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Food-Delivery-Website.git
cd Food-Delivery-Website
🖥 Backend Setup
Step 1: Navigate to backend
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

Backend runs at:

http://localhost:5000
👨‍💼 Admin Panel Setup

Open a new terminal:

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
🌐 MongoDB Atlas Configuration

Create a MongoDB Atlas account

Create a Free M0 Cluster

Add Database User

Allow Network Access (0.0.0.0/0 for development)

Copy connection string

Add it to backend .env

Example:

mongodb+srv://username:password@cluster.mongodb.net/foodApp?retryWrites=true&w=majority
💳 Stripe Configuration

Create a Stripe account

Go to Developers → API Keys

Copy Secret Key

Add it to backend .env

STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
❗ Common Issues & Solutions
ERR_CONNECTION_REFUSED

Ensure frontend backend URL matches backend port (default: 5000).

MongoDB Authentication Failed

Check username/password and network access settings.

Stripe API Error

Verify STRIPE_SECRET_KEY in backend .env.


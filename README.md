# 🍔 FoodieExpress – Full Stack Food Delivery App

A scalable and responsive **food delivery platform** built with the **MERN stack** that includes a customer-facing interface, a dedicated admin panel, and a robust backend API. Built to simulate real-world food ordering and management systems.

---

## 🚀 Live Demo (Coming Soon)

> Hosted frontend + backend link will go here

---

## 🧩 Project Structure

FoodieExpress/
├── frontend/
│ ├── admin/ → Admin dashboard (React)
│ └── user/ → User-facing app (React)
├── backend/ → API server (Node.js, Express)


---

## ✨ Features

### 🧑 User App
- 🔐 Authentication (Login/Signup)
- 🛒 Add to Cart & Checkout
- 📦 Order placement and history
- 🧭 Order status updates (e.g., Preparing → Out for delivery)
- 📱 Mobile-first responsive UI

### 👨‍🍳 Admin Panel
- 📋 Manage orders and users
- 🍽 Add, edit, remove menu items
- 📊 View order stats (future)
- 🔐 Role-based access

### 🛠 Backend
- RESTful APIs with Node.js & Express
- MongoDB with Mongoose
- JWT authentication
- Secure `.env` config handling

---

## ⚙️ Tech Stack

| Layer      | Technologies |
|------------|--------------|
| Frontend   | React, Tailwind CSS |
| Backend    | Node.js, Express |
| Database   | MongoDB (Mongoose) |
| Auth       | JWT, bcrypt |
| Other      | Axios, React Router, Context API |

---

## 🖥️ Getting Started (Local Setup)

### 🧰 Prerequisites:
- Node.js
- MongoDB
- Git

---

### 📦 Clone the Repo

```bash
git clone https://github.com/taufiquekhan3/FoodieExpress.git
cd FoodieExpress

🔧 Backend Setup
cd backend
npm install
# Create a .env file with Mongo URI and JWT secret
npm run dev

💻 Frontend (User)
cd frontend/user
npm install
npm start

🧑‍💼 Frontend (Admin)
cd frontend/admin
npm install
npm start


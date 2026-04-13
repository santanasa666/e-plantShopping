# 🌿 Paradise Nursery - Houseplant Shopping Application

## 📋 Project Information
**Project Name:** Paradise Nursery
**Developer:** santanasa666
**Environment:** React + Vite

---

## 🚀 Overview
Paradise Nursery is a responsive, multi-page React application designed for houseplant enthusiasts. It allows users to explore a diverse collection of plants, categorize them by their needs (Low Light, High Humidity, Succulents), and manage a shopping cart for their potential greenery additions.

## 🚀 Live Demo
You can view the live application here: [https://santanasa666.github.io/e-plantShopping/]

## ✨ Features
- **Landing Page**: An immersive welcome screen with a lush background and an introduction to our mission.
- **Product Listing**:
    - Browse 6+ unique plant species.
    - Organized into 3 distinct categories.
    - Real-time "Add to Cart" functionality.
- **Interactive Shopping Cart**:
    - Dynamic cart icon in the header showing total item count.
    - Adjust plant quantities (increase/decrease) directly in the cart.
    - Automatic calculation of sub-totals and grand total.
    - Remove individual plant types entirely.
- **Responsive Navigation**: Seamless transitions between the landing, product, and cart pages using React Router.

## 🛠️ Tech Stack
- **React.js**: Frontend framework.
- **Vite**: Modern frontend build tool for fast development.
- **React Router**: For client-side routing and navigation.
- **Context API**: Global state management for the shopping cart.
- **CSS3**: Custom styling with a focus on responsive grids and plant-themed aesthetics.

## 📂 Project Structure
```text
src/
├── components/       # Reusable UI elements (Header, PlantCard, CartItem)
├── context/          # CartContext for global state management
├── data/             # Mock inventory data (plants.js)
├── pages/            # Page components (Landing, ProductList, CartPage)
├── App.jsx           # Main routing configuration
└── main.jsx          # App entry point and Context Provider wrapping
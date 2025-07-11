import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Context Providers
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';

// Pages
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Products from './pages/Products/Products';
import ProductDetail from './pages/Products/ProductDetail';
import Categories from './pages/Categories/Categories';
import Agriculture from './pages/Agriculture/Agriculture';
import Handicrafts from './pages/Handicrafts/Handicrafts';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import Orders from './pages/Orders/Orders';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Deals from './pages/Deals/Deals';
import NotFound from './pages/NotFound/NotFound';

// Protected Route Component
import ProtectedRoute from './components/ProtectedRoute';

// Styles
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/agriculture" element={<Agriculture />} />
                <Route path="/handicrafts" element={<Handicrafts />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/categories/:slug" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />

                {/* Protected Routes */}
                <Route path="/checkout" element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
                <Route path="/orders" element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute allowedRoles={['vendor', 'admin']}>
                    <Dashboard />
                  </ProtectedRoute>
                } />

                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            
            {/* Toast Notifications */}
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;

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

// Pages
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Agriculture from './pages/Agriculture/Agriculture';
import Handicrafts from './pages/Handicrafts/Handicrafts';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Cart from './pages/Cart/Cart';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Deals from './pages/Deals/Deals';
import Dashboard from './pages/Dashboard/Dashboard';

// Styles
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <div className="App">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/agriculture" element={<Agriculture />} />
                <Route path="/handicrafts" element={<Handicrafts />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/deals" element={<Deals />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

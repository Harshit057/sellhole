import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import websiteStructure from '../../data/websiteStructure';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { cartItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { navigation, brand } = websiteStructure;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Brand */}
          <Link to="/" className="navbar-brand" onClick={closeMenu}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {brand.name}
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop-nav">
            {navigation.mainMenu.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link ${isActivePath(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="navbar-actions">
            {/* Cart */}
            <Link to="/cart" className="cart-link">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cart-icon-container"
              >
                <FaShoppingCart className="cart-icon" />
                {cartItemsCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="cart-badge"
                  >
                    {cartItemsCount}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="user-menu">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="user-info"
                >
                  <FaUser className="user-icon" />
                  <span className="user-name">{user?.name}</span>
                </motion.div>
                <div className="dropdown-menu">
                  <Link to="/dashboard" className="dropdown-item">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <Link to="/orders" className="dropdown-item">
                    Orders
                  </Link>
                  <button onClick={handleLogout} className="dropdown-item logout-btn">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="auth-buttons">
                <Link to="/login" className="btn btn-outline">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu-overlay"
              onClick={closeMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="mobile-menu"
            >
              <div className="mobile-menu-header">
                <h3>{brand.name}</h3>
                <button onClick={closeMenu} className="close-btn">
                  <FaTimes />
                </button>
              </div>

              <div className="mobile-menu-content">
                {/* Navigation Links */}
                <div className="mobile-nav-links">
                  {navigation.mainMenu.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`mobile-nav-link ${isActivePath(item.path) ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* User Section */}
                {isAuthenticated ? (
                  <div className="mobile-user-section">
                    <div className="mobile-user-info">
                      <FaUser className="user-icon" />
                      <span>{user?.name}</span>
                    </div>
                    <div className="mobile-user-links">
                      <Link to="/dashboard" className="mobile-nav-link" onClick={closeMenu}>
                        Dashboard
                      </Link>
                      <Link to="/profile" className="mobile-nav-link" onClick={closeMenu}>
                        Profile
                      </Link>
                      <Link to="/orders" className="mobile-nav-link" onClick={closeMenu}>
                        Orders
                      </Link>
                      <button onClick={handleLogout} className="mobile-nav-link logout-btn">
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="mobile-auth-buttons">
                    <Link to="/login" className="btn btn-outline" onClick={closeMenu}>
                      Login
                    </Link>
                    <Link to="/signup" className="btn btn-primary" onClick={closeMenu}>
                      Sign Up
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

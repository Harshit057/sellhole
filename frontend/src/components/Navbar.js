import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiSearch, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <span className="brand-text">SellHole</span>
        </Link>

        {/* Search Bar */}
        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-input-group">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-btn">
              <FiSearch />
            </button>
          </div>
        </form>

        {/* Desktop Navigation */}
        <div className="navbar-nav desktop-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/categories" className="nav-link">Categories</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        {/* User Actions */}
        <div className="navbar-actions">
          {/* Cart */}
          <Link to="/cart" className="cart-link">
            <FiShoppingCart className="cart-icon" />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>

          {/* User Menu */}
          {isAuthenticated ? (
            <div className="user-menu">
              <button className="user-btn">
                <FiUser />
                <span className="user-name">{user?.name}</span>
              </button>
              <div className="user-dropdown">
                <Link to="/profile" className="dropdown-item">
                  <FiUser /> Profile
                </Link>
                <Link to="/orders" className="dropdown-item">
                  Orders
                </Link>
                {(user?.role === 'vendor' || user?.role === 'admin') && (
                  <Link to="/dashboard" className="dropdown-item">
                    Dashboard
                  </Link>
                )}
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <FiLogOut /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary btn-sm">Sign Up</Link>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-content">
          <Link to="/" className="mobile-nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/products" className="mobile-nav-link" onClick={closeMenu}>Products</Link>
          <Link to="/categories" className="mobile-nav-link" onClick={closeMenu}>Categories</Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>About</Link>
          <Link to="/contact" className="mobile-nav-link" onClick={closeMenu}>Contact</Link>

          {isAuthenticated ? (
            <>
              <Link to="/profile" className="mobile-nav-link" onClick={closeMenu}>Profile</Link>
              <Link to="/orders" className="mobile-nav-link" onClick={closeMenu}>Orders</Link>
              {(user?.role === 'vendor' || user?.role === 'admin') && (
                <Link to="/dashboard" className="mobile-nav-link" onClick={closeMenu}>Dashboard</Link>
              )}
              <button onClick={handleLogout} className="mobile-nav-link logout-btn">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="mobile-nav-link" onClick={closeMenu}>Login</Link>
              <Link to="/register" className="mobile-nav-link" onClick={closeMenu}>Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="navbar-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;

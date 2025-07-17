import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-green-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-xl flex items-center justify-center">
                {/* Combined agriculture (leaf) and handicrafts (thread & needle) icon */}
                <svg className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {/* Leaf for agriculture */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C7 7 2 12 12 22C22 12 17 7 12 2Z" />
                  {/* Thread & needle for handicrafts/art */}
                  <circle cx="16.5" cy="7.5" r="2.5" stroke="#fff" strokeWidth="1.2" fill="none" />
                  <path d="M15.2 8.8c1.2 1.2 2.6 3.2 2.6 5.2" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="17.2" y="5.2" width="0.7" height="4" rx="0.3" transform="rotate(45 17.2 5.2)" fill="#fff" />
                </svg>
              </div>
              <span className="text-3xl font-extrabold bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent">
                आपनGaon
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-3 rounded-md text-lg font-semibold transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-green-700 bg-green-100'
                    : 'text-green-900 hover:text-green-700 hover:bg-green-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/cart"
              className="relative px-5 py-3 rounded-md text-lg font-semibold text-green-900 hover:text-green-700 hover:bg-green-50 transition-colors duration-200 flex items-center"
              aria-label="Cart"
            >
              <svg className="w-7 h-7 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h2l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Cart
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
              )}
            </Link>
            <Link
              to="/login"
              className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-green-900 hover:text-green-700 focus:outline-none focus:text-green-700"
            >
              <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-green-200">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-5 py-3 rounded-md text-lg font-semibold transition-colors duration-200 ${
                    isActive(link.path)
                      ? 'text-green-700 bg-green-100'
                      : 'text-green-900 hover:text-green-700 hover:bg-green-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="w-full text-left px-6 py-3 rounded-md text-lg font-semibold text-green-900 hover:text-green-700 hover:bg-green-50 transition-colors duration-200 flex items-center relative"
                aria-label="Cart"
              >
                <svg className="w-7 h-7 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h2l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Cart
                {cartCount > 0 && (
                  <span className="absolute top-2 right-6 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">{cartCount}</span>
                )}
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-6 py-3 bg-green-600 text-white rounded-md text-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

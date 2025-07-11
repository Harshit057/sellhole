import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiUsers, FiTrendingUp, FiStar, FiArrowRight } from 'react-icons/fi';
import api from '../services/api';
import LoadingSpinner from '../components/LoadingSpinner';
import './Home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats] = useState({
    totalProducts: '1000+',
    happyCustomers: '500+',
    vendorsJoined: '200+',
    citiesCovered: '50+'
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        api.get('/products/featured/list'),
        api.get('/categories')
      ]);

      setFeaturedProducts(productsRes.data.data || []);
      setCategories(categoriesRes.data.data?.slice(0, 4) || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  if (loading) {
    return <LoadingSpinner message="Loading homepage..." />;
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Connecting Rural <span className="highlight">Vendors</span> with Urban <span className="highlight">Markets</span>
            </h1>
            <p className="hero-subtitle">
              Discover authentic products directly from farmers and artisans. 
              Fresh, organic, and handcrafted items delivered to your doorstep.
            </p>
            <div className="hero-cta">
              <Link to="/products" className="btn btn-gradient btn-lg">
                <span>Shop Now</span>
                <FiArrowRight />
              </Link>
              <Link to="/register" className="btn btn-outline btn-lg">
                Become a Vendor
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/api/placeholder/600/400" alt="Fresh products" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div 
            className="stats-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="stat-item" variants={itemVariants}>
              <FiShoppingBag className="stat-icon" />
              <span className="stat-number">{stats.totalProducts}</span>
              <span className="stat-label">Products Available</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants}>
              <FiUsers className="stat-icon" />
              <span className="stat-number">{stats.happyCustomers}</span>
              <span className="stat-label">Happy Customers</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants}>
              <FiTrendingUp className="stat-icon" />
              <span className="stat-number">{stats.vendorsJoined}</span>
              <span className="stat-label">Vendors Joined</span>
            </motion.div>
            <motion.div className="stat-item" variants={itemVariants}>
              <FiStar className="stat-icon" />
              <span className="stat-number">{stats.citiesCovered}</span>
              <span className="stat-label">Cities Covered</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Explore our diverse range of authentic products from rural India
            </p>
          </motion.div>

          <motion.div 
            className="categories-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {categories.map((category, index) => (
              <motion.div key={category._id} variants={itemVariants}>
                <Link to={`/categories/${category.slug}`} className="category-card">
                  <div className="category-image">
                    <img 
                      src={category.image?.url || `/api/placeholder/300/200`} 
                      alt={category.name}
                    />
                  </div>
                  <div className="category-info">
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                    <span className="category-link">
                      Explore <FiArrowRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-cta">
            <Link to="/categories" className="btn btn-outline">
              View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Hand-picked products from our best vendors
            </p>
          </motion.div>

          <motion.div 
            className="products-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.slice(0, 8).map((product, index) => (
              <motion.div key={product._id} variants={itemVariants}>
                <Link to={`/products/${product._id}`} className="product-card">
                  <div className="product-image">
                    <img 
                      src={product.images?.[0]?.url || `/api/placeholder/250/200`} 
                      alt={product.name}
                    />
                    {product.discountPrice && (
                      <span className="discount-badge">
                        {Math.round(((product.price - product.discountPrice) / product.price) * 100)}% OFF
                      </span>
                    )}
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <FiStar className="star-icon" />
                      <span>{product.ratings.average || 0}</span>
                      <span className="rating-count">({product.ratings.count || 0})</span>
                    </div>
                    <div className="product-price">
                      <span className="current-price">
                        ₹{product.discountPrice || product.price}
                      </span>
                      {product.discountPrice && (
                        <span className="original-price">₹{product.price}</span>
                      )}
                    </div>
                    <p className="product-vendor">by {product.vendor?.name}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="section-cta">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Why Choose SellHole?</h2>
          </motion.div>

          <motion.div 
            className="features-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🌾</div>
              <h3 className="feature-title">Direct from Source</h3>
              <p className="feature-description">
                Get products directly from farmers and artisans, ensuring authenticity and fair prices.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Fast Delivery</h3>
              <p className="feature-description">
                Quick and reliable delivery to your doorstep, keeping products fresh and intact.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">💰</div>
              <h3 className="feature-title">Best Prices</h3>
              <p className="feature-description">
                Competitive prices by eliminating middlemen, benefiting both buyers and sellers.
              </p>
            </motion.div>

            <motion.div className="feature-card" variants={itemVariants}>
              <div className="feature-icon">🛡️</div>
              <h3 className="feature-title">Quality Assured</h3>
              <p className="feature-description">
                Rigorous quality checks and authentic reviews ensure you get the best products.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div 
            className="newsletter-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">
              Get the latest updates on new products, offers, and vendor stories
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-secondary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

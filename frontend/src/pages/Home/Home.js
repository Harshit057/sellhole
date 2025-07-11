import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useCart } from '../../context/CartContext';
import websiteStructure from '../../data/websiteStructure';
import './Home.css';

// Import images
import heroImage from '../../assets/images/home/imgleave.jpg';
import agriImages from '../../assets/images/agriculture';
import handicraftImages from '../../assets/images/handicrafts';

const Home = () => {
  const { addToCart } = useCart();
  const [featuredProducts] = useState(websiteStructure.featuredProducts);
  const [categories] = useState(websiteStructure.categories);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <img src={heroImage} alt="SellHole Hero" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1>{websiteStructure.sections.hero.title}</h1>
            <p className="hero-subtitle">
              {websiteStructure.sections.hero.subtitle}
            </p>
            <Link to="/categories" className="btn btn-primary btn-lg hero-cta">
              {websiteStructure.sections.hero.cta}
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/categories" className="section-title-link">
              <h2 className="section-title">{websiteStructure.sections.categories.title}</h2>
            </Link>
            
            <div className="categories-grid">
              {categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="category-card"
                >
                  <Link to={`/${category.slug}`} className="category-link">
                    <div className="category-image-container">
                      <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                        }}
                        loop={true}
                        className="category-slider"
                      >
                        {category.images.map((image, imgIndex) => (
                          <SwiperSlide key={imgIndex}>
                            <img
                              src={require(`../../assets/images/${category.slug}/${image}`)}
                              alt={`${category.name} ${imgIndex + 1}`}
                              className="category-image"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="category-content">
                      <h3 className="category-title">{category.name}</h3>
                      <p className="category-description">{category.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">{websiteStructure.sections.featuredProducts.title}</h2>
            
            <div className="products-grid">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="product-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="product-image-container">
                    <img
                      src={require(`../../assets/images/${product.category}/${product.image}`)}
                      alt={product.name}
                      className="product-image"
                    />
                  </div>
                  <div className="product-content">
                    <h4 className="product-title">{product.name}</h4>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${product.price}</span>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary add-to-cart-btn"
                      >
                        <FaShoppingCart />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="newsletter-content"
          >
            <h3>Subscribe for Updates</h3>
            <p>Get the latest deals and updates on new arrivals!</p>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
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

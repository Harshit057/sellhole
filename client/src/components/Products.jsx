import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const Products = () => {
  const location = useLocation()
  const navigate = useNavigate()
  // Helper to get category from query string
  function getCategoryFromQuery() {
    const params = new URLSearchParams(location.search)
    return params.get('category') || 'bestsellers'
  }
  const [selectedCategory, setSelectedCategory] = useState(getCategoryFromQuery())

  // Update category if URL changes (e.g., user clicks a footer link)
  useEffect(() => {
    setSelectedCategory(getCategoryFromQuery())
  }, [location.search])

  const categories = [
    { id: 'bestsellers', name: 'Bestsellers' },
    { id: 'handicrafts', name: 'Handicrafts' },
    { id: 'organic', name: 'Organic Produce' },
    { id: 'clothing', name: 'Traditional Clothing' },
    { id: 'pottery', name: 'Pottery' }
  ]

  // Add a 'bestseller' property to mark best-selling products
  const products = [
    {
      id: 1,
      name: 'Handwoven Bamboo Basket',
      category: 'handicrafts',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1601582585450-47c89b6c6db8?w=300&h=300&fit=crop',
      description: 'Eco-friendly, handcrafted bamboo baskets made by rural artisans.',
      rating: 4.6,
      bestseller: true
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      category: 'organic',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1590080877030-bc088eb5f5fb?w=300&h=300&fit=crop',
      description: 'Pure, sun-dried turmeric directly sourced from local farmers.',
      rating: 4.8,
      bestseller: true
    },
    {
      id: 3,
      name: 'Khadi Cotton Kurta',
      category: 'clothing',
      price: 18.99,
      image: 'https://images.unsplash.com/photo-1618354691373-d95093ec06d3?w=300&h=300&fit=crop',
      description: 'Hand-spun, breathable Khadi kurta for men and women.',
      rating: 4.5,
      bestseller: false
    },
    {
      id: 4,
      name: 'Terracotta Water Bottle',
      category: 'pottery',
      price: 10.99,
      image: 'https://images.unsplash.com/photo-1600959907703-e90f110f6a1d?w=300&h=300&fit=crop',
      description: 'Eco-friendly terracotta bottle to keep your water cool naturally.',
      rating: 4.7,
      bestseller: true
    },
    {
      id: 5,
      name: 'Organic A2 Ghee',
      category: 'organic',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1663073720551-808f18b5b126?w=300&h=300&fit=crop',
      description: 'Traditional A2 ghee made from desi cow milk in rural farms.',
      rating: 4.9,
      bestseller: true
    },
    {
      id: 6,
      name: 'Clay Tea Set',
      category: 'pottery',
      price: 15.99,
      image: 'https://images.unsplash.com/photo-1589182373726-0a8d54d97c8f?w=300&h=300&fit=crop',
      description: 'Handmade clay tea set perfect for a rustic chai experience.',
      rating: 4.4,
      bestseller: false
    }
  ]

  // Show only bestsellers if 'bestsellers' is selected, else filter by category
  const filteredProducts = selectedCategory === 'bestsellers'
    ? products.filter(product => product.bestseller)
    : products.filter(product => product.category === selectedCategory)

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>)
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>)
    }

    return stars
  }

  // When user clicks a category button, update the URL query string
  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId)
    navigate(`/products?category=${encodeURIComponent(catId)}`)
  }

  const { items, addToCart, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Rural Products
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse authentic, handmade, and organic products from the heart of India — directly from farmers and artisans.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`mx-2 my-1 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100 hover:text-green-700'
              } shadow-md hover:shadow-lg`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="text-sm font-medium text-gray-900">
                    ₹{product.price}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.rating})
                    </span>
                  </div>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>

                {(() => {
                  const cartItem = items.find((item) => item.id === product.id);
                  if (cartItem) {
                    return (
                      <div className="flex items-center justify-between w-full">
                        <button
                          className="bg-green-200 text-green-800 px-3 py-2 rounded-l-lg font-bold text-lg hover:bg-green-300"
                          onClick={() => {
                            if (cartItem.quantity === 1) {
                              removeFromCart(product.id);
                            } else {
                              updateQuantity(product.id, cartItem.quantity - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <span className="px-4 font-semibold">{cartItem.quantity}</span>
                        <button
                          className="bg-green-600 text-white px-3 py-2 rounded-r-lg font-bold text-lg hover:bg-green-700"
                          onClick={() => updateQuantity(product.id, cartItem.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    );
                  }
                  return (
                    <button
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  );
                })()}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">📦</div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category to see more rural products.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products

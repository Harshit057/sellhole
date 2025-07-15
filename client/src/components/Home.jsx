import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import background from '../assets/background.png'

const Home = () => {
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/test')
        setMessage(response.data.message)
      } catch (error) {
        setMessage('Bridging Villages to Cities — Live Now')
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const features = [
    {
      icon: '🌿',
      title: 'Fresh from Farms',
      description: 'Buy organic fruits, vegetables, and grains directly from local farmers — no chemicals, no middlemen.'
    },
    {
      icon: '🧶',
      title: 'Authentic Handicrafts',
      description: 'Explore handmade products that carry the story and soul of Indian artisans.'
    },
    {
      icon: '🔗',
      title: 'Direct from Source',
      description: 'Support rural livelihoods by purchasing directly from verified producers at fair-trade prices.'
    },
    {
      icon: '🛡️',
      title: 'Verified & Trusted',
      description: 'Every seller is verified. Every product is inspected. Quality and trust guaranteed.'
    }
  ]

  const stats = [
    { number: '12,000+', label: 'Farmers Connected' },
    { number: '8,500+', label: 'Artisans Empowered' },
    { number: '1,000,000+', label: 'Urban Buyers Served' },
    { number: '98%', label: 'Customer Satisfaction' }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-gradient-to-br from-blue-50 to-purple-50 py-20 relative"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-40 pointer-events-none"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Rural India with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MittiKart
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A digital marketplace connecting farmers and artisans from India's villages directly to urban consumers — ensuring fair prices, authentic products, and economic empowerment.
            </p>
            {/* Server Status */}
            <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-lg mb-8 relative z-10">
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  <span className="text-gray-600">Checking server status...</span>
                </>
              ) : (
                <>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">{message}</span>
                </>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Shop Now
              </Link>
              <Link
                to="/about"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg border border-blue-600"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">🌟 Why MittiKart?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We’re not just another e-commerce platform — we’re a movement to make rural India thrive. Every product you buy supports a family, a farmer, or an artisan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              MittiKart is bridging the rural-urban gap through ethical trade and digital accessibility.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Be the Change. Buy Rural.
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every purchase supports a real person. Join our community of conscious consumers building a better India — one product at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Partner with Us
            </Link>
            <Link
              to="/products"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

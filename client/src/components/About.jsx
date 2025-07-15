import { useState } from 'react'

const About = () => {
  const features = [
    {
      icon: '🌾',
      title: 'Empowering Farmers',
      description: 'We help local farmers sell directly to city markets, ensuring better profits and no exploitation.'
    },
    {
      icon: '🧵',
      title: 'Supporting Artisans',
      description: 'Authentic handmade goods from across India, now available to urban buyers.'
    },
    {
      icon: '🔗',
      title: 'Transparent Trade',
      description: 'No middlemen, no hidden charges — just honest, direct exchange between creators and consumers.'
    },
    {
      icon: '📦',
      title: 'Easy Order & Delivery',
      description: 'Simple checkout and timely doorstep delivery of rural goods, anywhere in India.'
    },
    {
      icon: '🛡️',
      title: 'Verified Vendors',
      description: 'All sellers are verified and vetted to ensure product quality and ethical sourcing.'
    },
    {
      icon: '💚',
      title: 'Impact with Every Order',
      description: 'Each purchase supports rural livelihoods, preserving culture and boosting the local economy.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About MittiKart
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MittiKart is a digital bridge connecting rural India to urban markets. We give farmers and artisans a platform to sell directly — empowering them, and offering you authentic, ethical products.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-4">
              Our mission is to transform how rural products reach urban homes. By eliminating intermediaries, we ensure fair prices for rural producers and authentic quality for consumers.
            </p>
            <p className="text-lg text-gray-600">
              From vegetables grown by small-scale farmers to beautiful crafts made by local artisans, MittiKart brings their efforts online — giving them visibility, respect, and income.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-xl grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">12K+</div>
              <div className="text-gray-600">Rural Vendors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Ethical Sourcing</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Urban Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Journey of a Product</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            Every item on MittiKart carries a story — of hard work, authenticity, and rural transformation. Here's how we take a handmade craft or a farm harvest from a remote village to your doorstep.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🌱 Step 1: Local Creation</h3>
              <p className="text-gray-600">
                A farmer harvests organic turmeric in Maharashtra. An artisan in Rajasthan finishes carving a wooden figurine. Their products are ready — fresh, authentic, and full of passion.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">📸 Step 2: Verified & Listed</h3>
              <p className="text-gray-600">
                Through our mobile onboarding or local MittiKart agent, the vendor uploads product photos, sets fair prices, and gets verified for quality and trustworthiness.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🛒 Step 3: You Place an Order</h3>
              <p className="text-gray-600">
                A buyer from Delhi browses MittiKart and chooses the artisan’s figurine or the farmer’s turmeric. With a single click, a fair transaction begins — with no middlemen.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">🚚 Step 4: Delivered with Care</h3>
              <p className="text-gray-600">
                Our logistics partners pick up the order from the source and deliver it to your doorstep — fast, safe, and with full traceability. Meanwhile, the vendor receives their earnings directly.
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mt-16 max-w-3xl mx-auto">
            This cycle doesn’t just sell a product — it builds dignity, boosts rural incomes, and brings transparency to trade. With MittiKart, every order becomes a story of empowerment.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-16">
            We’re not just selling products — we’re selling stories, cultures, and livelihoods. Here’s what defines MittiKart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Support Rural India. Shop with Purpose.</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every item you purchase supports a real person in a rural village. Let’s make commerce compassionate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200">
              Explore Products
            </a>
            <a href="/contact" className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition duration-200">
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

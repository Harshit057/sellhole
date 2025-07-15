import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Login from './components/Login'
import Team from './pages/Team'
import Careers from './pages/Careers'
import News from './pages/News'
import Handicrafts from './pages/Handicrafts'
import OrganicProduce from './pages/OrganicProduce'
import TraditionalClothing from './pages/TraditionalClothing'
import Pottery from './pages/Pottery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/news" element={<News />} />
            <Route path="/products/handicrafts" element={<Handicrafts />} />
            <Route path="/products/organic-produce" element={<OrganicProduce />} />
            <Route path="/products/traditional-clothing" element={<TraditionalClothing />} />
            <Route path="/products/pottery" element={<Pottery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

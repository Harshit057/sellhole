import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import Team from './pages/Team';
import Careers from './pages/Careers';
import News from './pages/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Cart from './components/Cart';
import SetupAccount from './components/SetupAccount';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <ScrollToTop /> {/* Scrolls to top on every route change */}
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
            <Route path="/cart" element={<Cart />} />
            <Route path="/setup-account" element={<SetupAccount />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

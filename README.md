# 🛒 SellHole - Rural-Urban Marketplace

<div align="center">
  <img src="frontend/src/assets/images/home/favicon.webp" alt="SellHole Logo" width="100" height="100">
  
  **Bridging the Gap Between Rural and Urban Markets**
  
  [![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
  [![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)](https://mongodb.com/)
  [![Express.js](https://img.shields.io/badge/Express.js-4.18+-lightgrey.svg)](https://expressjs.com/)
</div>

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

SellHole is a modern MERN stack marketplace that connects rural vendors with urban consumers. Our platform specializes in:

- **Agriculture Products**: Fresh produce directly from farmers
- **Handicrafts**: Authentic handmade crafts from skilled artisans
- **Direct Trade**: Eliminating middlemen to ensure fair prices
- **Quality Assurance**: Verified vendors and authentic products

## ✨ Features

### 🛍️ Shopping Experience
- **Modern UI/UX**: Responsive design with smooth animations
- **Product Categories**: Organized agriculture and handicraft sections
- **Smart Search**: Advanced filtering and search capabilities
- **Shopping Cart**: Real-time cart updates with quantity management
- **User Reviews**: Community-driven product ratings

### 🔐 Authentication & Security
- **JWT Authentication**: Secure user sessions
- **Role-based Access**: User, Vendor, and Admin roles
- **Password Security**: Bcrypt hashing
- **Rate Limiting**: API protection against abuse

### 📱 Modern Features
- **Mobile Responsive**: Optimized for all devices
- **Image Carousels**: Swiper.js integration
- **Smooth Animations**: Framer Motion
- **Real-time Updates**: Toast notifications
- **Progressive Web App**: PWA capabilities

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI Library with modern hooks
- **React Router 6** - Client-side routing
- **Framer Motion** - Smooth animations
- **Swiper.js** - Touch-enabled sliders
- **Axios** - HTTP client
- **React Toastify** - Notifications
- **Styled Components** - CSS-in-JS

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin requests

### Development Tools
- **VS Code** - IDE
- **Nodemon** - Development server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
sellhole/
├── 📁 frontend/                 # React Application
│   ├── 📁 public/              # Static files
│   ├── 📁 src/
│   │   ├── 📁 components/      # Reusable UI components
│   │   │   ├── 📁 Navbar/      # Navigation component
│   │   │   ├── 📁 Footer/      # Footer component
│   │   │   └── 📁 LoadingSpinner/ # Loading component
│   │   ├── 📁 pages/           # Page components
│   │   │   ├── 📁 Home/        # Homepage
│   │   │   ├── 📁 Auth/        # Login/Signup
│   │   │   ├── 📁 Agriculture/ # Agriculture products
│   │   │   ├── 📁 Handicrafts/ # Handicraft products
│   │   │   └── 📁 Cart/        # Shopping cart
│   │   ├── 📁 context/         # React context providers
│   │   ├── 📁 services/        # API services
│   │   ├── 📁 assets/          # Images and static files
│   │   └── 📁 data/           # Static data and configuration
│   └── 📄 package.json
├── 📁 backend/                  # Node.js API
│   ├── 📁 models/              # MongoDB models
│   ├── 📁 routes/              # API routes
│   ├── 📁 middleware/          # Custom middleware
│   ├── 📁 controllers/         # Route controllers
│   ├── 📁 config/             # Configuration files
│   ├── 📄 server.js           # Entry point
│   └── 📄 package.json
├── 📄 .gitignore
├── 📄 README.md
└── 📄 MIGRATION_SUMMARY.md     # Migration documentation
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Git

### Clone Repository
```bash
git clone https://github.com/Harshit057/sellhole.git
cd sellhole
```

### Backend Setup
```bash
cd backend
npm install

# Create environment file
cp .env.example .env
# Edit .env with your configuration

# Start development server
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install

# Start React development server
npm start
```

### Environment Variables

Create `.env` file in the backend directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/sellhole

# Authentication
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d

# Frontend URL
FRONTEND_URL=http://localhost:3000

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 💻 Usage

1. **Start the Backend Server**:
   ```bash
   cd backend && npm run dev
   ```

2. **Start the Frontend**:
   ```bash
   cd frontend && npm start
   ```

3. **Access the Application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/auth/signup     # Register new user
POST /api/auth/login      # User login
GET  /api/auth/me         # Get current user
PUT  /api/auth/profile    # Update profile
```

### Product Endpoints
```
GET    /api/products      # Get all products
GET    /api/products/:id  # Get single product
POST   /api/products      # Create product (vendor only)
PUT    /api/products/:id  # Update product (vendor only)
DELETE /api/products/:id  # Delete product (vendor only)
```

### Category Endpoints
```
GET    /api/categories    # Get all categories
POST   /api/categories    # Create category (admin only)
PUT    /api/categories/:id # Update category (admin only)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original design inspiration from rural marketplace concepts
- React community for excellent documentation
- MongoDB team for the robust database solution
- All contributors who helped shape this project

## 📞 Contact

- **Project Owner**: Harshit057
- **Email**: support@sellhole.com
- **Phone**: +91 89576 88223
- **Project Link**: [https://github.com/Harshit057/sellhole](https://github.com/Harshit057/sellhole)

---

<div align="center">
  Made with ❤️ for connecting rural and urban communities
</div>

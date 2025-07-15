# SellHole - MERN Stack Application

A full-stack MERN application built with Vite and Tailwind CSS.

## 🚀 Tech Stack

### Frontend
- **React 18** - Component-based UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

## 📁 Project Structure

```
sellhole/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main App component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles with Tailwind
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
├── server/                 # Node.js backend
│   ├── config/             # Database configuration
│   ├── models/             # Mongoose models
│   ├── routes/             # Express routes
│   ├── server.js           # Main server file
│   └── package.json        # Backend dependencies
└── package.json            # Root package.json for scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Git

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd sellhole
```

### 2. Install dependencies
```bash
# Install dependencies for both client and server
npm run install-all

# Or install separately
npm run install-client
npm run install-server
```

### 3. Environment Setup
```bash
# Copy environment template
cd server
cp .env.example .env
```

Edit the `.env` file with your configurations:
```env
NODE_ENV=development
PORT=5000
MONGO_URI=mongodb://localhost:27017/sellhole
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:3000
```

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# For Windows (if MongoDB is installed as a service)
net start MongoDB

# For macOS/Linux
sudo systemctl start mongod
```

### 5. Run the application
```bash
# Run both client and server concurrently
npm run dev

# Or run separately
npm run client    # Runs on http://localhost:3000
npm run server    # Runs on http://localhost:5000
```

## 🎯 Available Scripts

### Root Level
- `npm run install-all` - Install dependencies for both client and server
- `npm run dev` - Run both client and server concurrently
- `npm run client` - Run only the client
- `npm run server` - Run only the server
- `npm run build` - Build the client for production

### Client (cd client)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Server (cd server)
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## 🌐 API Endpoints

### Test Routes
- `GET /api/test` - Test server connection

## 🎨 Tailwind CSS Setup

This project uses Tailwind CSS v4 with the new Vite plugin setup:

1. **Installation**: Tailwind is installed as a Vite plugin
2. **Configuration**: Added to `vite.config.js`
3. **Import**: CSS is imported in `src/index.css` with `@import "tailwindcss"`

## 📝 Development Notes

### Frontend Development
- React components are in `client/src/components/`
- Global styles with Tailwind in `client/src/index.css`
- Vite proxy configured for API calls to backend

### Backend Development
- Express routes in `server/routes/`
- MongoDB models in `server/models/`
- Database configuration in `server/config/`

### Environment Variables
- Server environment variables in `server/.env`
- Client environment variables should be prefixed with `VITE_`

## 🚀 Deployment

### Frontend (Client)
```bash
cd client
npm run build
# Deploy the 'dist' folder to your hosting platform
```

### Backend (Server)
```bash
cd server
npm start
# Deploy to your server hosting platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

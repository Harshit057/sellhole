# MittiKart (formerly SellHole)

MittiKart is a modern, rural-focused marketplace web application built with the MERN stack (MongoDB, Express, React, Node.js). It connects rural artisans and farmers directly with buyers, featuring authentic handicrafts, organic produce, traditional clothing, and pottery.

## Features
- Browse and filter rural products by category
- Modern, responsive UI with React, Vite, and Tailwind CSS
- Informational pages: Team, Careers, News
- Easy navigation with updated Navbar and Footer
- Add to Cart functionality (UI only)
- Backend with Express and MongoDB (user model, test route)

## Project Structure
```
sellhole/
  client/         # Frontend (React, Vite, Tailwind)
    src/
      components/ # Reusable UI components
      pages/      # Main content pages (Team, Careers, News, etc.)
      assets/     # Images and static assets
    ...
  server/         # Backend (Node.js, Express, MongoDB)
    models/       # Mongoose models
    routes/       # API routes
    config/       # Database config
    ...
  package.json    # Project metadata
  .gitignore      # Git ignore rules
  README.md       # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Harshit057/sellhole.git
   cd sellhole
   ```
2. **Install dependencies:**
   - For client:
     ```sh
     cd client
     npm install
     ```
   - For server:
     ```sh
     cd ../server
     npm install
     ```
3. **Configure environment variables:**
   - Create a `.env` file in `server/` for MongoDB URI and other secrets.

4. **Run the app:**
   - Start the backend:
     ```sh
     cd server
     npm start
     ```
   - Start the frontend:
     ```sh
     cd ../client
     npm run dev
     ```

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

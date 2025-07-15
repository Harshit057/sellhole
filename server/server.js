import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import testRoutes from './routes/test.js'

// Load environment variables
dotenv.config()

// Connect to MongoDB
connectDB()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json({ extended: false }))

// Routes
app.use('/api/test', testRoutes)

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'SellHole API Server is running!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})

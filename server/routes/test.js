import express from 'express'

const router = express.Router()

// @route   GET /api/test
// @desc    Test route
// @access  Public
router.get('/', (req, res) => {
  res.json({ 
    message: 'Server connected successfully!',
    timestamp: new Date().toISOString(),
    status: 'OK'
  })
})

export default router

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB successfully!'))
  .catch((err) => console.error('Database connection error:', err));

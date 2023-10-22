const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./userRoutes');

//https://localhost:3001/api/videos
router.use('/thoughts', thoughtRoutes);

//https://localhost:3001/api/users
router.use('/users', userRoutes);

module.exports = router;

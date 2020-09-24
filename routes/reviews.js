const router = require('express').Router();
const reviewsCtrl = require('../controllers/reviews');

// Public Routes

// Protected Routes
router.use(require('../config/auth'));
router.post('/:id', checkAuth, reviewsCtrl.create);

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  
  module.exports = router;
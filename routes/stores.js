const router = require('express').Router();
const storesCtrl = require('../controllers/stores');

// Public Routes
router.get('/', storesCtrl.index);

// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, storesCtrl.create)
router.get('/:id', checkAuth, storesCtrl.show)
router.put('/:id', checkAuth, storesCtrl.update);
router.delete('/:id', checkAuth, storesCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
const router = require('express').Router();
const productsCtrl = require('../controllers/products');

// Public Routes
router.get('/', productsCtrl.index);
// Protected Routes
router.use(require('../config/auth'));
router.post('/:id', checkAuth, productsCtrl.create)
router.get('/:id', checkAuth, productsCtrl.show)
router.put('/:id/:storeId', checkAuth, productsCtrl.update);
router.delete('/:storeId/:productId', checkAuth, productsCtrl.delete);

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
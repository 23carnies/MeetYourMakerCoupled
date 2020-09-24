const router = require('express').Router();
const calendarEventsCtrl = require('../controllers/calendarEvents');

// Public Routes
router.get('/', calendarEventsCtrl.index);
// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, calendarEventsCtrl.create)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;

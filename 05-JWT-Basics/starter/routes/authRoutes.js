const express = require('express');
const router = express.Router();

const { logon, hello } = require('../controllers/authController');
const authenticate = require('../middleware/authMiddleware');

router.post('/logon', logon);
router.get('/hello', authenticate, hello);

module.exports = router;

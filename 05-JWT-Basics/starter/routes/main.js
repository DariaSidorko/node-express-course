
const express = require('express');
const router = express.Router();
const {login} = require('../controllers/main');

router.post('/logon', login);

module.exports = router;
const express = require('express');
const controller = require('../controller/authenticationController');
const authentication = require('../Middleware/auth');
const router = express.Router();

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.get('/home/:id', authentication , controller.getData);
router.get('/logout', authentication , controller.logoutUser);

module.exports = router;
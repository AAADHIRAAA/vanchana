const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
console.log("router");
router.post('/info', userController.loginInfo);
router.post('/login',userController.login);
module.exports = router;
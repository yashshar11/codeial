const express = require('express');
const router = express.Router();

//to acces the controler
const homeController = require('../controllers/home_controller');

console.log('Router loaded');
//to access the controller through routes
router.get('/',homeController.home);

module.exports = router;
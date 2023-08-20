const express = require('express');
const router = express.Router();

//to acces the controler
const homeController = require('../controllers/home_controller');

console.log('Router loaded');
//to access the controller through routes
router.get('/',homeController.home);

//to conect to user.js in routes
router.use('/users',require('./users'));

//for further any routes use here
// router.use('/routername, require(' '))

//to connect to post routes
router.use('/posts',require('./post'))


module.exports = router;
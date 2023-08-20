const express= require('express');
const router = express.Router();

const userController = require('../controllers/users_controller')

console.log('User loaded');
//to acces the user controller using user.js
router.get('/profile',userController.profile);





module.exports= router;
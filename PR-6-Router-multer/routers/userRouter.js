const { Router } = require("express");
const userController = require('../controllers/userController');

const userRouetr = Router();

userRouetr.get('/',userController.homePage);
userRouetr.get('/add-movie',userController.addMoviePage)

module.exports = userRouetr;
const express = require('express');
const userController = require('../controllers/user');
const userRouter = express.Router();

userRouter.post('/create', userController.createUser);
userRouter.get('/login', userController.loginUser);


module.exports = userRouter;

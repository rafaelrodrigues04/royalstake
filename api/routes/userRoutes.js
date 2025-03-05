const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

// Endpoint: /users/signup -> Create a new user
router.post('/signup', userController.createUser)

// Endpoint: /users/login -> Authenticate existing user
router.post('/login', userController.authenticateUser)

// Endpoint: /users/logout -> Logout user
router.post('/logout', userController.logoutUser)

// Endpoint: /users/:id -> Get user data
router.get('/:id', userController.getUserData)

module.exports = router;

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const tokenValidation = require('../middleware/tokenValidation')
const employeeController = require("../controllers/employeeController")

router.post('/signup', userController.createUser)

router.post('/login', userController.loginUser)

router.post(
  '/profile',
  tokenValidation.validateToken,
  userController.getUserProfile
)

router.put(
  '/profile',
  tokenValidation.validateToken,
  userController.updateUserProfile
)

router.post(
    '/employees',
    employeeController.createEmployee
)

router.get(
    '/employees/:page/:limit',
    tokenValidation.validateToken,
    employeeController.getEmployees
)

router.put(
    '/employees',
    tokenValidation.validateToken,
    employeeController.updateEmployee
)

router.delete(
    '/employees',
    tokenValidation.validateToken,
    employeeController.deleteEmployee
)

module.exports = router

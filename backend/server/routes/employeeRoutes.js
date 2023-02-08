const employeeController = require("../controllers/employeeController");
const tokenValidation = require("../middleware/tokenValidation");
const express = require('express')
const router = express.Router()

router.post(
    '/',
    employeeController.createEmployee
)

router.get(
    '/:page/:limit',
    tokenValidation.validateToken,
    employeeController.getEmployees
)

router.put(
    '/',
    tokenValidation.validateToken,
    employeeController.updateEmployee
)

router.delete(
    '/:id',
    tokenValidation.validateToken,
    employeeController.deleteEmployee
)

const employeeService = require('../services/employeeService')

module.exports.getEmployees = async (req, res) => {
    let response = {}

    try {
        const {page, limit} = req.params
        const pageAsInteger = parseInt(page);
        const limitAsInteger = parseInt(limit);
        const responseFromService = await employeeService.getEmployees(req, pageAsInteger, limitAsInteger);
        response.status = 200
        response.message = 'Successfully got employees'
        response.body = responseFromService
    } catch (error) {
        console.log('Error in getEmployees - employeeController.js')
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}

module.exports.updateEmployee = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeeService.updateEmployee(req)
        response.status = 200
        response.message = 'Successfully updated Employee'
        response.body = responseFromService
    } catch (error) {
        console.log('Error in updateEmployee - employeeController.js')
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}

module.exports.createEmployee = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await employeeService.createEmployee(req)
        response.status = 200
        response.message = 'Successfully created Employee'
        response.body = responseFromService
    } catch (error) {
        console.log('Error in createEmployee - employeeController.js')
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}

module.exports.deleteEmployee = async (req, res) => {
    let response = {}

    try {
        const {id} = req.params
        const responseFromService = await employeeService.deleteEmployee(req, id);
        response.status = 200
        response.message = 'Successfully deleted employee'
        response.body = responseFromService
    } catch (error) {
        console.log('Error in deleteEmployee - employeeController.js')
        response.status = 400
        response.message = error.message
    }

    return res.status(response.status).send(response)
}

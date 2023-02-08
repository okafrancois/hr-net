const User = require('../database/models/userModel')
const Employee = require('../database/models/employeeModel')
const jwt = require('jsonwebtoken')

module.exports.createEmployee = async serviceData => {
    try {
        // check if the employee already exists
        const existingEmployee = await Employee.findOne({
            firstName: serviceData.body.firstName,
            lastName: serviceData.body.lastName,
        })

        if (existingEmployee) {
            throw new Error('Employee already exists!')
        }

        // Extract the userId value from the token
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);
        const userId = decodedJwtToken.id;

        const newEmployee = new Employee({
            firstName: serviceData.body.firstName,
            lastName: serviceData.body.lastName,
            birthDate: serviceData.body.birthDate,
            startDate: serviceData.body.startDate,
            jobTitle: serviceData.body.jobTitle,
            department: serviceData.body.department,
            street: serviceData.body.street,
            city: serviceData.body.city,
            state: serviceData.body.state,
            zipcode: serviceData.body.zipcode,
            createdById: userId,
        });

        // Save and return the new Employee
        return await newEmployee.save();
    } catch (error) {
        console.error('Error in employeeService.js', error);
        throw new Error(error);
    }
};

module.exports.getEmployees = async (serviceData, page = 1, limit = 10) => {
    try {
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim();
        const decodedJwtToken = jwt.decode(jwtToken);
        const existingUser = await User.findOne({_id: decodedJwtToken.id});

        if (!existingUser) {
            throw new Error('User not found!');
        }

        const totalDocuments = await Employee.countDocuments();
        const totalPages = Math.ceil(totalDocuments / limit);
        const currentPage = page;
        const remainingPages = totalPages - currentPage;
        const employees = await Employee.find()
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({createdAt: -1})
            .lean();

        return {employees, totalDocuments, totalPages, currentPage, limit, remainingPages};
    } catch (error) {
        console.error('Error in employeeService.js', error);
        throw new Error(error);
    }
};


module.exports.updateEmployee = async serviceData => {
    try {
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
        const decodedJwtToken = jwt.decode(jwtToken)
        const user = await User.findOne({_id: decodedJwtToken.id})


        if (!user) {
            throw new Error('User not found!')
        }

        const updates = {}

        serviceData.body.entries().forEach(([key, value]) => {
            updates[key] = value
        })


        const Employee = await Employee.findOneAndUpdate({
                _id: serviceData.body._id,
                userId: user._id
            },
            updates,
            {new: true}
        )

        if (!Employee) {
            throw new Error('Employee not found!')
        }

        return Employee.toObject()

    } catch (error) {
        console.error('Error in employeeService.js', error)
        throw new Error(error)
    }
}

module.exports.deleteEmployee = async (serviceData, id) => {
    try {
        const jwtToken = serviceData.headers.authorization.split('Bearer')[1].trim()
        const decodedJwtToken = jwt.decode(jwtToken)
        const user = await User.findOne({_id: decodedJwtToken.id})

        if (!user) {
            throw new Error('User not found!')
        }

        const existingEmployee = await Employee.findOneAndDelete({
            _id: id,
        })

        if (!existingEmployee) {
            throw new Error('Employee not found!')
        }

        return existingEmployee.toObject()
    } catch (error) {
        console.error('Error in userService.js', error)
        throw new Error(error)
    }
}

const axios = require('axios')
const jwt = require("jsonwebtoken");
const loginApi = 'http://localhost:3001/api/v1/user/login'
const employeesApi = 'http://localhost:3001/api/v1/user/employees'

const defaultUsers = [
    {
        firstName: 'Berny',
        lastName: 'Doe',
        email: 'itoutouberny+strapi@gmail.com',
        password: '@Lt!9YkEkeaMmBRD',
    }
]

const defaultEmployees = [
    {
        firstName: 'Jon',
        lastName: 'Doe',
        birthDate: '1980-01-01',
        startDate: '2019-01-01',
        jobTitle: 'CEO',
        department: 'Executive',
        address: {
            street: '123 Main St',
            city: 'New York',
            state: 'NY',
            zipcode: '10001',
        }
    },
    {
        firstName: 'Lorem',
        lastName: 'Ipsum',
        birthDate: '1998-01-01',
        startDate: '2019-01-01',
        jobTitle: 'Developer',
        department: 'IT',
        address: {
            street: '123 Main St',
            city: 'Paris',
            state: 'FR',
            zipcode: '75001',
        }
    }
]

// Login to get user id and add the token in the headers
defaultUsers.forEach(user => {
    axios
        .post(loginApi, {
            email: user.email,
            password: user.password
        })
        .then(response => {
            const jwtToken = response.data.body.token

            defaultEmployees.forEach(transaction => {
                axios
                    .post(employeesApi, transaction, {
                        headers: {
                            "Authorization": `Bearer ${jwtToken}`
                        }
                    })
                    .then(response => console.log(response))
                    .catch(error => console.log(error))
            })
        })
        .catch(error => console.log(error))
})

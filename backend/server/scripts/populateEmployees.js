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
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipcode: '10001',
    },
    {
        firstName: 'Lorem',
        lastName: 'Ipsum',
        birthDate: '1998-01-01',
        startDate: '2019-01-01',
        jobTitle: 'Developer',
        department: 'IT',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
    {
        firstName: "Romin",
        lastName: "Irani",
        birthDate: "1990-02-01",
        startDate: '2019-01-01',
        jobTitle: "Developer",
        department: 'Executive',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
    {
        firstName: "Neil",
        lastName: "Irani",
        birthDate: "1990-02-01",
        startDate: '2019-01-01',
        jobTitle: "Developer",
        department: 'Executive',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
    {
        firstName: "Tom",
        lastName: "Hanks",
        birthDate: "1990-02-01",
        startDate: '2019-01-01',
        jobTitle: "Program Directory",
        department: 'Executive',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
    {
        firstName: 'Karl',
        lastName: 'Hans',
        birthDate: '1990-01-01',
        startDate: '2020-01-01',
        jobTitle: 'CTO',
        department: 'Executive',
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipcode: '10001',
    },
    {
        firstName: 'Elly',
        lastName: 'Charles',
        birthDate: '1995-01-01',
        startDate: '2021-01-01',
        jobTitle: 'Developer',
        department: 'IT',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
    {
        firstName: "Romanie",
        lastName: "Hope",
        birthDate: "1992-02-01",
        startDate: '2019-01-01',
        jobTitle: "Business Analyst",
        department: 'Executive',
        street: '123 Main St',
        city: 'Paris',
        state: 'FR',
        zipcode: '75001',
    },
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

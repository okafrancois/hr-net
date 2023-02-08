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
    {
        firstName: 'Jacques',
        lastName: 'Dubois',
        birthDate: '1985-03-15',
        startDate: '2022-05-01',
        jobTitle: 'Developer',
        department: 'IT',
        street: '456 Rue de la Paix',
        city: 'Paris',
        state: 'FR',
        zipcode: '75006',
    },
    {
        firstName: 'Maria',
        lastName: 'Garcia',
        birthDate: '1995-07-01',
        startDate: '2022-07-01',
        jobTitle: 'QA Engineer',
        department: 'IT',
        street: 'Calle de Madrid',
        city: 'Madrid',
        state: 'ES',
        zipcode: '28001',
    },
    {
        firstName: 'Bart',
        lastName: 'Vermeulen',
        birthDate: '1992-11-15',
        startDate: '2022-09-01',
        jobTitle: 'Business Analyst',
        department: 'Executive',
        street: 'Koningstraat',
        city: 'Brussels',
        state: 'BE',
        zipcode: '1000',
    },
    {
        firstName: 'Nicolene',
        lastName: 'Du Plessis',
        birthDate: '1989-02-28',
        startDate: '2022-12-01',
        jobTitle: 'HR Manager',
        department: 'Executive',
        street: 'Pretoria Road',
        city: 'Johannesburg',
        state: 'ZA',
        zipcode: '2000',
    },
    {
        firstName: 'Lionel',
        lastName: 'Leroy',
        birthDate: '1994-05-11',
        startDate: '2022-11-01',
        jobTitle: 'Developer',
        department: 'IT',
        street: 'Rue de la Republique',
        city: 'Paris',
        state: 'FR',
        zipcode: '75005',
    },
    {
        firstName: 'Stefano',
        lastName: 'Martinelli',
        birthDate: '1991-08-22',
        startDate: '2022-06-01',
        jobTitle: 'Product Manager',
        department: 'Executive',
        street: 'Via Roma',
        city: 'Rome',
        state: 'IT',
        zipcode: '00100',
    },
    {
        firstName: "Romain",
        lastName: "Le boss",
        birthDate: "1990-03-01",
        startDate: '2019-05-01',
        jobTitle: "Fullstatck Developer",
        department: 'FreeLance',
        street: 'La Joconde',
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

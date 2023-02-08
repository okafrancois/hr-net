const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const defaultUsers = [
    {
        firstName: 'Tony',
        lastName: 'Stark',
        email: 'tony@stark.com',
        password: 'password123',
    }
]

// Create default users
defaultUsers.forEach(user => {
    axios
        .post(signupApi, user)
        .catch(error => console.log(error))
})

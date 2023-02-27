const axios = require('axios')
const dotEnv = require("dotenv");

dotEnv.config()

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:3000'
const signupApi = `${BACKEND_URL}/api/v1/user/signup`

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

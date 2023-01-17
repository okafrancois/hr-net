const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const defaultUsers = [
    {
        firstName: 'Berny',
        lastName: 'Doe',
        email: 'itoutouberny+strapi@gmail.com',
        password: '@Lt!9YkEkeaMmBRD',
    }
]

// Create default users
defaultUsers.forEach(user => {
    axios
        .post(signupApi, user)
        .catch(error => console.log(error))
})

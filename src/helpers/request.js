import axios from 'axios'

const request = axios.create({
    baseURL: 'https://mern-application-blog.herokuapp.com',
    validateStatus: false,
})

export default request
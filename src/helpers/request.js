import axios from 'axios'

const request = axios.create({
    baseURL: 'https://mern-blog-production.up.railway.app',
    validateStatus: false,
})

export default request
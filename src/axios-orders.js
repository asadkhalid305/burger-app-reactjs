import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://my-burger-app-8273f.firebaseio.com/'
})

export default instance
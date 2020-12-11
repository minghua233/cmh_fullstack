import axios from 'axios'
import config from './config'

export default function $axios(options) { 
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL,
    })

    // 请求拦截
    
  })
}
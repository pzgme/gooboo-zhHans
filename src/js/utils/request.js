import axios from 'axios'


const instance = axios.create({
    baseURL: "https://api.ggpop.com/", // API的地址
    timeout: 99999
})
const TOKEN_KEY = 'token'

function getToken() {
    return localStorage.getItem(TOKEN_KEY) || ''
}

function setToken(token) {
    localStorage.setItem(TOKEN_KEY, token)
}

function removeToken() {
    localStorage.removeItem(TOKEN_KEY)
}

// 请求拦截器
instance.interceptors.request.use(
    (config) => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    (response) => {
        // 检查是否有新的token
        const newToken = response.headers['new-token']
        if (newToken) {
            setToken(newToken)
        }

        const res = response.data
        if (res.code !== 0) {
            return Promise.reject(new Error(res.msg || '请求失败'))
        }
        return res
    },
    (error) => {
        // 处理 401 状态码
        if (error.response && error.response.status === 401) {
            // 清除 token
            removeToken()
            // 清除 localStorage 中的用户信息
            localStorage.removeItem('userInfo')
            // 显示错误信息
            return Promise.reject(error)
        }

        // 处理其他错误
        return Promise.reject(error)
    }
)

export default instance

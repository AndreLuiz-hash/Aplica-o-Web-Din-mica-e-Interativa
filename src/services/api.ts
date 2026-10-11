import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dummyjson.com',
})

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 404) {
      return Promise.reject(
        new Error('O recurso solicitado não foi encontrado.')
      )
    }

    if (error.response?.status === 401) {
      return Promise.reject(
        new Error('Sua sessão não é válida ou expirou.')
      )
    }

    if (error.response?.status >= 500) {
      return Promise.reject(
        new Error('O servidor está temporariamente indisponível.')
      )
    }

    return Promise.reject(
      new Error('Ocorreu um erro ao realizar a requisição.')
    )
  }
)
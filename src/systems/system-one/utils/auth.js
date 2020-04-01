import Cookies from 'js-cookie'

export const setToken = (token) => {
  return Cookies.set('Token', token)
}

export const getToken = (tokenKey) => {
  return Cookies.get(tokenKey)
}

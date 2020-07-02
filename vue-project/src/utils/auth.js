import Cookies from 'js-cookie'

// const TokenKey = 'Admin-Token'
//从cookise中取出
export function getToken(TokenKey) {
  return Cookies.get(TokenKey)
}


//存到Cookie中去
export function setToken(TokenKey,token) {
  return Cookies.set(TokenKey, token)
}
//删除cookis
export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey)
}

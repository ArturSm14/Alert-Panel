import { URL_API } from "../utils/constans";

async function registerUser({email, password}){
  return await fetch(`${URL_API}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}

async function loginUser({email, password}){
  return await fetch(`${URL_API}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}

export {registerUser, loginUser}
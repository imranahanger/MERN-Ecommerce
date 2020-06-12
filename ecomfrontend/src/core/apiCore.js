import {API} from "../config";
export const getProducts = (sortBy) => {
    return fetch(`${API}/products?sortBy=${sortBy}&order=desc&limit=6`, {
        method: "GET",
        headers: {
            Accept: 'application/json'
        }
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}
export const getCategories = (userId,token) => {
    return fetch(`${API}/categories`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            Authorization:`Bearer ${token}`
        }
    }).then(response => {
        return response.json()
    }).catch(err => {
        console.log(err)
    })
}

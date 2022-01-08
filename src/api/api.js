import axios from "axios"

const apiUrl = 'https://pixabay.com/api'
const apiKey = '11047628-635bca23b99c10143c7630956'

export const getImage = async (text, amount) => {
    const response = await axios.get(`${apiUrl}/?key=${apiKey}&q=${text}&image_type=photo&per_page=${amount}&safesearch=true`)
    const res = await response.data
    return res.hits
}
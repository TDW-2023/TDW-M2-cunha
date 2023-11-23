import axios from "axios";

const API_URL = 'https://api.thecatapi.com/v1'
const API_KEY = 'live_0hKWlG6TK3GX29K9H9sgMjOSBpnY2CvZdqphAb9WsfAA6QTHFtR35i3eZGhANu34'

export function getAllImg() {
    return axios.get(`${API_URL}/images/search`, {
        
    })
}
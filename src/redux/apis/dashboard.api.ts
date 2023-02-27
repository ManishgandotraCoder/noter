import axios from "axios"
function getData() {
    try {
        return axios.get('http://localhost:8000/home')
    }
    catch {
        return false
    }
}

export { getData }
const axios = require('axios')
const api = "http://jsonplaceholder.typicode.com"

async function getUser(id) {
    const request = await axios.get(`${api}/users`)
    const user = request.data.find(function(user, index) {
        return user.id === id
    })
    return user // promise resv
}
getUser(2)


// const country = countriesData.find(function (country, index) {
//     return country.name === "lebanon"
// })
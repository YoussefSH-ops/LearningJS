const axios = require("axios")
const api = "http://jsonplaceholder.typicode.com"
// axios.get(`${api}/get-text`)
// .then(function(request) {
//     console.log(request.data)
// })
axios.get(`${api}/todos`)
.then((response) => {
    for (let todo of response.data) {
        todo.done ? 'done' : 'not done'
        console.log(todo.title)
    }
})
.catch(console.error)
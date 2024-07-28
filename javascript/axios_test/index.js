const axios = require("axios");

axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
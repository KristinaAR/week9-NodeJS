const express = require('express');
const { get, request } = require('http');
const app = express();

app.use(express.static('public'));

app.get('/', (request, response)=> {
    
    response.sendFile(__dirname + '/index.html');
});


app.get('/about', (request, response) => {
    response.send('Hello, I am Kristina. Nice to meet you!');
});

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});



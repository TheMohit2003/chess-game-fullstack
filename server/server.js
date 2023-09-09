const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());


router.get('/', (req, res) => {
    res.send('Hello World!');
}).post('/', (req, res) => {    
    res.send('Got a POST request');
}).put('/user', (req, res) => {
    res.send('Got a PUT request at /user');
}).delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user');
});





app.listen(3000, () => console.log('Server ready'));
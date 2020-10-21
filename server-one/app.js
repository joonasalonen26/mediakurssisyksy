'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.static('public'));

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        age: 6,
        weight: 5,
    };
    res.json(cat);
});

app.get('/test', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

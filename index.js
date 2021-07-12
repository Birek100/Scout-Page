const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');

const mainHTML = fs.readFileSync('./views/main.html', 'utf8');
const mainGet = (req, res) => res.send(mainHTML);

app.use('/static', express.static('public'));

app.get('/', mainGet);

app.listen(port);

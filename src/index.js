const express = require('express');
const app = express();

//media

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//rutas
app.use(require('./routes/index'));

app.listen(4000);
console.log("xd");
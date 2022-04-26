const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'web'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//media
app.use(express.static(path.resolve(__dirname,'web/public')));
app.use(express.static(path.resolve(__dirname,'web/script')));
//paginas
app.use('/',(req,res) => {
    const index = path.resolve(__dirname,'web/index.html');
    res.sendFile(index);
});

//rutas
app.use(require('./routes/routes'));
app.listen(4000);
console.log("xd");
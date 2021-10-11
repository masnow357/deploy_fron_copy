// Requerimos Express
const express = require('express');
// Creamos la aplicación
const app = express();

app.use(express.static('docs'));

// Construimos una ruta
app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/docs/index.html");
});
/* app.get('/topics.html', function (req, res) {
    res.sendFile(__dirname + "/docs/index.html");
});
app.get('/copywriting.html', function (req, res) {
    res.sendFile(__dirname + "/docs/index.html");
}); */
// Arrancamos el servidor
app.listen(3030, function () {
console.log('Arrancada la aplicación en http://localhost:3030');
});
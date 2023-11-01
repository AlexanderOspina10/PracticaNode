const express = require('express')
const hbs = require('hbs');//INCORPORAR MOTOR DE PLANTILLAS
const path = require('path')//TRABAJAR CON RUTAS


const app = express();

const port = 8383;

//SERVIDOR DE CONTENIDO ESTATICO
app.use(express.static('public'));


//INGENIERIA DE LAS VISTAS HBS
//ASIGNAR LA UBICACIÓN DE LOS ARCHIVOS HBS
app.set('views', path.join(__dirname+'/public/views'));
app.set('view engine', 'hbs');

//CONFIGURACION DEL DIRECTORIO QUE GUARDARA LOS PARTIALS HBS
hbs.registerPartials(__dirname+'/public/views/partials');


app.get('/', (req, res) => {
    // res.render(__dirname+'/public/views/index.hbs')
    res.render('index', {
        "nombre":"Alexander Ospina",
        "email":"ospinahincapie10@gmail.com"
    })//Redireccionar hacia el archivo hbs
})
app.get('/contacto', (req, res) => {
    res.render('contacto', {
        "numero":3135497455

    })//Redireccionar hacia el archivo hbs
})
app.get('/productos', (req, res) => {
    res.render('productos')//Redireccionar hacia el archivo hbs
})

app.get('*', (req, res) => {

    // res.sendFile(__dirname+'/public/views/404.hbs')
    res.render('404')//Redireccionar hacia el archivo hbs
})



app.listen(port, () => {
console.log(`Listen to port: ${port}`)
})


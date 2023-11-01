//Importacion de un paquete
const express = require('express');

//Especificar el metodo del paquete a emplear
const app = express();

//Especificar el puerto

const port = 8282

app.get('/', (req, res) => {

// res.write('METODO GET')
// res.end();
// res.sendFile()
res.sendFile(__dirname+'/public/home.html')

} )

 // Agregar productos, clientes y contacto

app.get('/clientes', (req, res) => {
    res.sendFile(__dirname+'/public/clientes.html')
    } )
    
app.get('/contacto', (req, res) => {

    res.sendFile(__dirname+'/public/contacto.html')
   
    } )


    app.get('/productos', (req, res) => {

        res.sendFile(__dirname+'/public/productos.html')
        } )

//Crear un proyecto en node que incluya el diseño de su login, el menu y los formularios de su proyecto 


//DESPLEGAR EL 404: PAGINA NO ENCONTRADA
app.get('*', (req, res) => {
    // res.write('404 - PAGINA NO ENCONTRADA')
    // res.end();
    // res.sendFile()
    res.sendFile(__dirname+'/public/404.html')
    } )


//ESPECIFICAR EL PUERTO A EMPLEAR
app.listen(port, () => {

    console.log(`Escuchando por el puerto ${port}`)

})
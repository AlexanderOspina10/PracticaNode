
//Importar paquetes

require('dotenv').config()// Dependencia para Vincular las variables de entorno


//Importar clases o archivos necesarios
const {Server} = require('./models/server');

const server = new Server()///Creando la instancia de la clase server

server.listen()
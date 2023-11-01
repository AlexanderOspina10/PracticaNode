    const express = require('express')
    
   
   let aprendices = [
    {"documento":1111,
    "nombre":"Carmen",
    "apellido":"Santa"
    },

    {
    "documento":2222,
    "nombre":"Lorena",
    "apellido":"Piedrahita"
    },
   ]
   
   
    class Server{
        constructor(){
            this.app = express()
            this.port = process.env.PORT
            this.routes()
        }

        listen(){
            this.app.listen(
            this.port, () => {
                console.log('Escuchando puerto '+ this.port)
             }

            )
        }
        
        routes(){
            //listar todos los datos
            this.app.get('/', (req, res) => {

                res.json({
                    msg:aprendices
                })
            })

            //consultar un dato
            this.app.get('/consultarAprendiz', (req, res) => {

                const {documento, nombre} = req.query // Recibir los parametros

                res.json({
                    msg:documento
                })
            })

        }
    }

    module.exports = {Server} //Exportación de la clase
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
                let resultado = ''
                //Buscar si el documento recibido existe en el array de aprendicez
                resultado = aprendices.find(aprendiz => aprendiz.documento === parseInt(documento))

                res.json({
                    msg:resultado
                })
            })


            //Metodo agregar elementos al array 
            this.app.post('/',(req, res) => {
                const {documento, nombre, apellidos} = req.query
                aprendices.push({
                    "documento":parseInt(documento),
                    "nombre":nombre,
                    "apellidos":apellidos
                })
                res.json({
                    msg:aprendices
                })
            } )

        }
    }

    module.exports = {Server} //Exportación de la clase
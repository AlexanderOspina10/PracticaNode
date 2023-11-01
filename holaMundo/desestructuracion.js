const productos = ['Agua', 'Aceite', 'Azucar']

const [p1, p2, p3] = productos

console.log(p1)

//Desestructuracion de un objeto
const vehiculo = {
    placa:"SEB555",
    color:"Azul",
    modelo:2024
}

const{placa, color, modelo} = vehiculo

console.log(vehiculo);

const opciones = {
    base: {//entonces en la terminal se pondria lo siguiente: node app listar -b 5 o --base 5
        demand: true,
        alias: 'b'//este alias es la manera abreviada para ponerlo en la terminal en ves de --base 
    },
    limite: {
        alias: 'l',
        default: 10//si el usuario no pone el limite ps este va ser el valor default para limite
    }
}
//el primer parametro es el nombre del parametro que pondremos en la terminal (node app listar)el tercer argumento del command es un objeto el cual va a arecibir la configuracion de parametros que ese comando puede recibir, si yo quiero que sea un comando o valor obligatorio es con el demand :true
const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', opciones)
    .command('crear', 'genera una archivo con la tabla de multiplicar', opciones)
    .help()
    .argv;
module.exports = {
    argv
}
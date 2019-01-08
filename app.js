//el primer parametro es el nombre del parametro que pondremos en la terminal (node app listar)el tercer argumento del command es un objeto el cual va a arecibir la configuracion de parametros que ese comando puede recibir, si yo quiero que sea un comando o valor obligatorio es con el demand :true
const argv = require('./config/yargs').argv;
//esas llaves en el nombre de la variable significa que se va a usar destructuracion, y se usa por que en el require estoy llamando un objeto y dentro de ese objeto esta la propiedad crear archivo y ps aca le pongo el mismo nombre
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
//necesito el comando listar si imprimo la variable argv este me aparecera en un arreglo entonces para obtenerlo se hace lo siguiente, el ._ viene asi cuando imprimo argv imprimirlo para darme cuenta
//aqui ejecuto las funciones
let comando = argv._[0]
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite);

    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite).then((archivo) => console.log(`archivo creado ${archivo}`))
      .catch((err) => console.log(err));
    break;
  default:
    console.log('comando no reconocido');

}

//let argv2 = process.argv;
//console.log('base:',argv.base);//.base por que ya se esta guardando el valor que quiero en base
//console.log('limite:'+argv.limite);

//console.log(argv2);

/*let parametro = argv[2];
let base = parametro.split('=')[1];*/

//se puede hacer asi pero en el video el profe prefiere usar destructuracion 
    //multiplicar.crearArchivo
  //(cada vez que refresquemos el codigo desde la terminal este creara un nuevo archivo)
//es bueno poner el catch para que nos vote bien el error en la consola



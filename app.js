const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); //importas la ruta a utilizar
//despues de una constante o un let y lleva llaves {} es una destructuracion
//let base = 'as';

//obtener desde consola con variable de entorno process

//console.log(argv.base);
//console.log('limite', argv.limite);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        console.log('crear');
        //es una promesa normal
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('archivo creado:' + colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js')
const colors = require('colors');

const argv = require('yargs').command('listar', 'Imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}).argv;

let comando = argv._[0];


switch (comando) {
    case 'listar':

        listarTabla(argv.base, argv.limite);

        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`)).catch((err) => console.log(err))

        break;

    default:
        break;
}
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear una tarea');
        porHacer.crear(argv.descripcion);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        porHacer.obtenerListado();
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let salida = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log('actualización: ', salida);
        break
    case 'borrar':
        console.log('Borrar una tarea de la lista');
        let salida2 = porHacer.borrar(argv.descripcion)
        console.log('borrado', salida2);
        break;
    default:
        console.log('Comando no reconocido');
}
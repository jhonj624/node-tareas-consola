const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
        }
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer',
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado la tarea',
        }

    })
    .command('listar', 'Mostrar todas las tareas por hacer', {

    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion: {
            demand: true,
            alias: 'b',
            desc: 'Borra una tarea de la lista'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}
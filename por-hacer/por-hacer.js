const fs = require('fs');
const color = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json', data, callback => {

    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    return listadoPorHacer;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion, //leo la descripcion que se envia por la terminal
        completado: false, // es falsa porque apenas se va a crear la tarea
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const obtenerListado = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        //listadoPorHacer = [];
        console.log('no se encontró bases de datos de tareas');
        return;
    }
    for (let tarea of listadoPorHacer) {
        console.log('===== Tarea por hacer ====='.green);
        console.log(tarea.descripcion);
        console.log(`Estado: ${tarea.completado}`);
        console.log('==========================='.red);
    }

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        listadoPorHacer.splice(index);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    obtenerListado,
    actualizar,
    borrar,
}
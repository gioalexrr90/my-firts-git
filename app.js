// const fs = require('fs');
//Se importa el modulo file system de las librerias de node, para ello se debe crear el archivo package.json usando el comando "npm init -y"

//Se importa la función crearArchivo desde el archivio multiplicar.js
const { crearArchivo } = require('./logica/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.base, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado dentro del directorio salida/'))
    .catch( err => console.log(err));
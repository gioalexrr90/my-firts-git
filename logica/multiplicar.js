// import * as fs from 'node:fs';
//Se importa las funciones de file system de node para poder usar "fs.writeFileSync"
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar, hasta ) => {
    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${colors.yellow(base)} x ${colors.bgMagenta(i)} = ${colors.cyan( base * i )} \n`;
        }
        if ( listar ) {
            console.log('=============='.bold.white);
            console.log('Tabla del:'.america, colors.red(base).bold);
            console.log('=============='.bold.white);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tablaDel${base}.txt`, salida);
        return `tablaDel${base}.txt`;
    } catch (error) {
        throw error;
    }
    
}

// Se exporta función crearArchivo para que pueda ser llamada desde otro archivo
module.exports = {
    crearArchivo 
}
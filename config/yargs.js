const { demand, demandOption } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Se define el numero base a multiplicar'
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        default: 10,
        type: 'number',
        describe: 'Decide hasta que numero quieres multiplicar',
        demandOption: false
    })
    .check( (argv, option) => {
        if ( isNaN( argv.base ) ) {
            throw 'La base es requerida';
        }
        return true;
    })
    .argv;

    module.exports = argv;
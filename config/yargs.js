const options = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('listar', 'Imprimee en consola la tabla de multiplicar', options)
  .command('crear', 'Genera un archivo con la tanla de multiplicar', options)
  .help()
  .argv;

module.exports = {
  argv
}
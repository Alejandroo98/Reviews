const opts = {
    base : {
        demand : true,
<<<<<<< HEAD
        alias : "b"
=======
        alias : "B"
>>>>>>> c86ea8fa721ad1e04a1dcfa155fa3a9ddbc09c1b
    },
    limite : {
        alias :  "l",
        default : 10
    }
}


const  argv = require("yargs")
.command(`listar` , "Imprime en consola la tabla de multiplicar" , opts)
.command(`crear` , "Genere un archivo con la tabla de multiplicar" , opts)
.help()
.argv;

module.exports = {
    argv
}

/*Requerir paquetes - Required (Seccion 4  -  C.29)  ---------------------------------------------------*/
/* 
1.- Ir a -> www.nodejs.org
2.- Click en -> Docs
3.- Darle click a la version de Node.js que yo tenga
4.- Luego buscar y darle click a --> "File system - a esto se le llama paquete" (Est srive para guardar un archivo de texto, en este caso vamos a guardar nuestra trabala de mutiplicar que hicimos al inicio)
5.- Nuevamente dar click en --> File system
6.- Copiamos el  --> const fs = require('fs');   "Los requires por lo general van al inicio"
*/


//Estos son los tres tipos de requieres que existen
// const fs = require('fs');
// const fs = require('express');  //Este paquete no es navito de node
// const fs = require('./fs');   //Por <ultimo tenemos los requires de archivos que nosotros creamos en el proyecto



/* Bases de node.js  (Seccion 4 - C.28) ---------------------------------------------------------------*/
// tabla de multiplicar
const fs = require('fs');
// let base = 2;

/* let data = ""
for (let i = 1; i <= 10 ; i++) {
    data +=  ( `${base} * ${i} = ${ base * i}\n`);
};

fs.writeFile(`tablas/tabla - ${base}.txt`, data, (err) => {   //tablas/ es la carpeta /tabla es el nombre del archivo , fata es el archivo que queremos guardar , (err) es el calck que quiero que se ejecute en cuanto ocurra un error
  if (err) throw err;
  console.log('The file has been saved!!');
});
 */


// console.log( module );      IMPORTANTE - Vamos a utilizar -> exports, y exports es un lugar donde podemos poner objetos para que sean trabajados de forma glboal...
// console.log( process );    IMPORTANTE - Lo que hace este comand mostrate un monto especificaciones de tu computadora
console.log( process.argv );  //IMPORTANTE - Lo que hace este comando es mostrate la ubicacion del archivo de donde te encuetras ahora mismo - Y la ubicacion de node tambien 


const { tradicionalPRomise } = require(`./multiplicar/multiplicar.js`);
const { suma } = require(`./multiplicar/multiplicar.js`) //Esto esta destructurado
// const multiplicar = require(`./multiplicar/multiplicar.js`) //Esta es lo mismo que lo de arriba pero sin desustructuracion, multplicar es el nombre del paquete 
// const { funcionPrueba } = require (`./multiplicar/multiplicar.js`);
//funcionPrueba().then( x => console.log(`Hola ${ x }`))

// console.log(suma(  100 , 100 )); 

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split("=")[1] 

tradicionalPRomise(base).then( (x)=> console.log(`Archivo creado ${x}`)).catch( e => console.log(e));
//Repetir capitulo 31






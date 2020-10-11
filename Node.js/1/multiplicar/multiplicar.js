const fs = require('fs');
// const colors = require('colors');
var colors = require('colors/safe');
const { resolve } = require('path');

let data = ""

let listarTabla = ( base , limite = 10 ) => {
    return new Promise ((resolve , reject ) => {
        if(!Number(base)){
            reject(`${base} No es un numero`)
            return
        }

        for (let i = 1; i <= limite ; i++) {
            data +=  ( `${base} * ${i} = ${ base * i}\n`);
        };
        console.log("==================".red);
        console.log("Tabla creada".blue);
        console.log("==================".red);
        
        fs.writeFile(`tablas/tabla - ${base}.txt`, data, (error) => {   //tablas/ es la carpeta /tabla es el nombre del archivo , fata es el archivo que queremos guardar , (err) es el calck que quiero que se ejecute en cuanto ocurra un error
            if (error) 
            reject(error); 
            else
            resolve(`tabla - ${base}.txt`);
        });
    })
}


/* let tradicionalPRomise = (base) => {   //module.exports.tradicionalPRomise -> Es lo mismo que  modulo.exports = { tradicionalPRomise }

    return new Promise ((resolve , reject ) => {
        if(!Number(base)){
            reject(`${base} No es un numero`)
            return
        }

        for (let i = 1; i <= limite ; i++) {
            data +=  ( `${base} * ${i} = ${ base * i}\n`);
        };
        
        fs.writeFile(`tablas/tabla - ${base}.txt`, data, (error) => {   //tablas/ es la carpeta /tabla es el nombre del archivo , fata es el archivo que queremos guardar , (err) es el calck que quiero que se ejecute en cuanto ocurra un error
            if (error) 
            reject(error); 
            else
            resolve(`tabla - ${base}.txt`);
        });
    })
        
}; */




/* let suma = (num1 , num2) => {
    return `${num1} + ${num2} = ${num1 + num2}`
}
 */


module.exports = {
    // tradicionalPRomise  : tradicionalPRomise,  //Tambien podriamos poner solamente tradicionalPRomise
    listarTabla
};
//Repetir capitulo 30






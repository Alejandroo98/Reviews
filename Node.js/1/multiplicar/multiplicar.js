const fs = require('fs');
const { resolve } = require('path');

let data = ""

let tradicionalPRomise = (base) => {   //module.exports.tradicionalPRomise -> Es lo mismo que  modulo.exports = { tradicionalPRomise }

    return new Promise ((resolve , reject ) => {
        if(!Number(base)){
            reject(`${base} No es un numero`)
            return
        }

        for (let i = 1; i <= 10 ; i++) {
            data +=  ( `${base} * ${i} = ${ base * i}\n`);
        };
        
        fs.writeFile(`tablas/tabla - ${base}.txt`, data, (error) => {   //tablas/ es la carpeta /tabla es el nombre del archivo , fata es el archivo que queremos guardar , (err) es el calck que quiero que se ejecute en cuanto ocurra un error
            if (error) 
            reject(error); 
            else
            resolve(`tabla - ${base}.txt`);
        });
    })
        
};

/* let suma = (num1 , num2) => {
    return `${num1} + ${num2} = ${num1 + num2}`
}
 */


module.exports = {
    tradicionalPRomise  : tradicionalPRomise,  //Tambien podriamos poner solamente tradicionalPRomise
};
//Repetir capitulo 30






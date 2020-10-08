/* COMO SABER CUANTOS DIAS DE VIDA TENTGO EN BASE A MI FECHA DE NACIMIENTO C.48 ------------------------------------------------------------------------------- */
    let diasEntreFehca  = ( fechaUno , fechaDos ) => {
        const UN_DIA = 1000 * 60 * 60 * 24;
        const DIFERENCIA = Math.abs(fechaUno - fechaDos);
        return Math.floor(DIFERENCIA / UN_DIA);
    };
const HOY = new Date();
const NACIMIENTO = new Date( 1998 , 6 , 14);
//console.log(diasEntreFehca(HOY , NACIMIENTO));





/* FUNCIONES RECURSIVAS C. 49  -----------------------------------------------------------------------------------------------------------------------------------*/
//Lo que esta esta funcion es dividir sin el signo de divisor;
function divisionEntera( dividendo , divisor ) {
    if (dividendo < divisor) {
        return 0
    }
    return 1 + divisionEntera( dividendo - divisor , divisor )
};





/* MEMORIZACION --------------------------------------------------------------------------------------------------------------------------------------------------- */
// !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720 (Factorial de seis);
//!12 = 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 (Factorial de doce) ;
//!12 = 12 * 11 * 10 * 9 * 8 * 7 * !6  (Es lo mizmo de arriba , lo que vamos hacer es el factorial de seis es memorizarlo para poder utilizarlo despues);
function factorial ( n ) {
    if(!this.cache){
        this.cache = {}
    };

    if(this.cache[n]){
        return 1
    }
    
    
    if ( n === 1 ){
        return 1
    }

    this.cache[n] = n * factorial( n - 1 );
    return this.cache[n];


    //Esto es lo que sucede
    // 6 * factorial (5)
    // 5 * factorial (4)
    // 4 * factorial (3)
    // 3 * factorial (2)
    // 2 * factorial (1)

};




/* CLOSURES  -----------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Es una funcion que recuerda el estado de las cosas cuando fue invocada;
function crearSaludo(finalFrase){
    return function (nombre){
        // console.log(`Hola ${nombre} ${finalFrase}`);
    }
};

const saludoArgentino = crearSaludo(`che`);
const saludoMexicano = crearSaludo (`guey`);
const saludoEcuatoriano = crearSaludo (`e!`);

saludoArgentino("Alejo"); //Hola Alejo che
saludoMexicano("Alejo"); //Hola Alejo guey
saludoEcuatoriano("Alejo"); //Hola Alejo e!


function edadNombre (nombre){
    return function(edad){
        console.log(`Hola mi nombre es ${nombre}  y tengo ${edad} años de edad`);
    }
};

//const miEdadEs = edadNombre("Alejo");
// miEdadEs(22);

function mascotas(raza){
    return (edad) => {
        // console.log(`La raza del perro es ${raza} y tiene ${edad} años de edad`);
    }
};
const nombreMascota = mascotas(`Cocker`);
nombreMascota(5);




/* ESTRUCTURA DE DATOS IMUTABLES C.53 ------------------------------------------------------------------------------------------------------------------------------------------*/
//LAs estructuras de datos inmutables van a permitirnos desasernos del efecto de lado.

const Alejo = {
    nombre : 20,
    apellidp : "Alava",
    edad : 22
};

// const HB = persona => persona.edad++;

const HBinmutable = persona => ({   //Esto hace que los datos del objeto principal no se modifique
    ...persona,
    edad : persona.edad += 1
})




/* CAMBIANDO DE CONTEXTO AL LLAMAR A UNA FUNCION C.53   ---------------------------------------------------------------------------------------------------------------------- */

const ALEJO = {
    nombre : "Alejo",
    apelldio : "Alava",
};

const PEPE = {
    nombre : "Pepe",
    apelldio : "Cortez"
};

function saludar(saludo = "Hola " ){
    console.log(`${saludo} , mi nombre es ${this.nombre}`);  // El this hace referencia a windows
};

// const saludarAlejo = saludar.bind(ALEJO) //bind(metodo) cambia el contexto de una funcion, cambiar el this de una funcion; Bind lo que hace es devolvernos una nueva funcion atando el parametro que le pasamos al this dentro de esa funcion
// const saludarPepe = saludar.bind(PEPE) //bind(metodo) cambia el contexto de una funcion, cambiar el this de una funcion; Bind lo que hace es devolvernos una nueva funcion atando el parametro que le pasamos al this dentro de esa funcion
//setTimeout( saludar.bind(ALEJO , "hola creuck") , 2000);
//Dato -> bind no ejecuta la funcion, simlemente nos devuelve una funcion con el contexto cambiado.



/* CALL  - APPLY - C.53 --------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// CALL -> Si ejecuta la funcion en ese momento
// APPLY -> Si ejecuta la funcion en ese momento
//saludar.call(ALEJO , "Cruuck"); //El primer parameetro es siempre quien va hacer el this
//saludar.apply(ALEJO , [`Yess`]);// LA diferencia en el apply es que el segundo parametro es un awway.

const persona = { nombre: 'Sacha' }
console.log(persona === { nombre: 'Sacha' } ); 


    
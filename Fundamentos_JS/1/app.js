
/* IMPRIME LA ULTIMA LETRA DE EL NOMBRE DE ALGUIEN ------------------------- */
var nombreUsuario = document.querySelector(".boton");
nombreUsuario.addEventListener("click",(e)=>{
    e.preventDefault
    var nombre = document.getElementById("nombreUsuario").value;
    nombreLEtras = nombre[nombre.length -1];
    console.log(nombreLEtras);
});

//variable.charAt(indice)  -> Imprimea la letra que se encuentra en la posicion del indice



/* IMPRIMIR UN NOMBRE EN MAYUSCULAS POR MEDIO DE UA FUNCION------------------- */
var nombre = "Maria";
function nombres(nombre){
   console.log(nombre.toUpperCase());
}
//nombres(nombre);




/*OBJETOS CON FUNCIONES--------------------- */
var users = {
    nombre : "Alex",
    apellido : "Alava",
    edad : 18
};

var users1 = {
    nombre : "Sofia",
    apellido : "Calderon",
    edad : 15
};

var users2 = {
    nombre : "Juanita",
    apellido : "Perez",
    edad : 30
};



function usersUp({nombre}){
    console.log(nombre.toUpperCase());
}
// usersUp(users);




/*OTRA MANERA DE LLAVAR A CIERTO ATRIBUTO DE UN OBJETO ----------------------- */
((nombresUsuarios) => {    // Esta funcion se llama algo asi como IFI, no lo recuerdo bien
    var { apellido }  = nombresUsuarios;
    console.log( apellido );
}) // (users);    //No olvides que el nombre la infomacion que contiene la variable no tiene que ser igual al nombre del paramtro de la funcion.




//EJERCICIO #3
function nombreEdad(users){
    let { nombre } = users;
    let { edad } = users;
    console.log(`Hola, me llamo ${nombre} y tengo ${ edad } años de edad`)  
}; 

// nombreEdad(users);
// nombreEdad(users1);




/*PARA MODIFICAR UN OBJETO O AGREGARLE ATRIBUTOS O KEYS A ESTE OBJETO LO HACEMOS ASI */
/* ESTO TE AYUDARA EN EL PROYECTO INTEGRADOR ------------------------------------------------------------------ */
var baseDatos = [];
function modificarObjeto (persona){
    
    var nuevoObjeto = {
        ...persona,
        sexo: "hombre",
        sector: "Calderon"
    };
    
    baseDatos.push(nuevoObjeto);

}

modificarObjeto(users);
//console.log(modificarObjeto(users));



 /* EJERCICIO: DEVOLVER SI ES MAYOR O MENOR DE EDAD -------------- */

 function mayorMenorEdad (persona){
     return (`${persona.nombre} es ${persona.edad >= 18 ? "mayor de edad" : "menor de edad"} `)
 }

 //console.log(mayorMenorEdad(users));

// HASTA AQUI CAPITULO 12  ¡¡¡YOU GOT IT!!!



/* FUNCIONES ANONIMAS  */
const functionAnonima = function(nombre){
    return nombre.toUpperCase()
}
//console.log(functionAnonima("alejo"));


/* FUNCIONES FLECHA */
let funcionFlecha = (nombre) => {
    return nombre.toUpperCase()
};

// console.log(functionAnonima("paul"));


/* REDUCCION DE FUNCIONES FELCHA */
let reduccionFunciones = nombre => console.log(nombre.toUpperCase());
// reduccionFunciones("Jorge"); 


/* FUNCIONES CON ATRIBUTOS DE UN OBJETO */
const funcionesObjeto = ({edad}) => edad > 0;
//console.log(funcionesObjeto(users));   //users es el objeto 


/* EJERCICIO: NO PERMITIR ACCESO A UNA PERSONA SI ES MENOR DE EDAD (USANDO FUNCIONES OBVIAMENTE!!) */
const PERMITIR_ACCESO = (usuario) => usuario.edad < 18? `${usuario.nombre}, no puedes entrar`:`${usuario.nombre}, si puedes entrar`;
//console.log(PERMITIR_ACCESO(users));
//console.log(PERMITIR_ACCESO(users1));
//console.log(PERMITIR_ACCESO(users2));



/* EL MISMO EJERCICIO DE ARRIBA PERO DE DIFERENTE MANERA */
let fucionUna = persona => persona.edad >= 18;
let funcionDos = persona => !fucionUna(persona)? `${persona.nombre}, no puedes entrar`:`${persona.nombre}, si puedes entrar` ;
//console.log(funcionDos(users2));




/* AQUI EMPIZA EL EJERCICIO DE GENERADOR DE NUMEROS RANDOM ----------------------------------------------------*/ 

/* NUMEROS RANDOM (SE GENERA UN NUMERO ALEATORIO EN LA FUNCIONA LLAMADA numeroRandom Y ESA FUNCION A SU VEZ EJECTUA OTRA FUNCION LLAMADA ganador Y SI EL NUMERO ALEATORIO COINCIDE CON
    EL NUMERO QUE EL USUARIO ELIJIO EL SERA EL GANADOR)*/
let min = 0;
let max = 10;

 let baseDatosDos = [

       jugardorUno = {
         nombre : "Jugador Uno",
         numero : 1
        },
        
        jugardorDos = {
            nombre : "Jugador Dos",
            numero : 2
        },
        
        jugardorTres = {
            nombre : "Jugador Tres",
            numero : 3
        },
        
        jugardorCuatro = {
            nombre : "Jugador Cuatro",
            numero : 4
        },
        
        jugardorQuinto = {
            nombre : "Jugador Quinto",
            numero : 5
        }
        
    ];
        


numeroRandom = (min,max,NombreJugador) => {
    // console.log(numeroAleatorio = Math.abs(Math.round(Math.random() * (min - max) + min)));
    // ganador(numeroAleatorio,NombreJugador);  // SI QUEIRES PROBAR EL EJERCICIO TENDRAS QUE DESCOMENTAR ESTA LLAMADA A LA FUNCION Y EN LAS LINEAS DE ABAJO QUE AHORA MISMO SON LAS LINEAS 194, 213 o 224 DEPENDE QUE CUAL DE ESTOS TRES EJERCICIOS QUIERES PROBAR, LOS TRES HACEN LO MISMO, PERO NO OLIVIDES CAMBIAR LOS NOMBRES DE LAS FUNCIONES SOLO POR ganador. 
 }

  let ganador0 = (numeroGanador,jugador) => {
    
    if(numeroGanador === jugador[0].numero){
         let nombre = jugador[0].nombre;
         console.log(nombre)
        } else if(numeroGanador === jugador[1].numero){
            let nombre = jugador[1].nombre;
            console.log(nombre)
        }else if(numeroGanador === jugador[2].numero){
            let nombre = jugador[2].nombre;
            console.log(nombre)
        }else{
            let nombre = "Sige participando";
            console.log(nombre)
        }
    } 

    
    /* EL EJERICIO DE ARRIBA PERO OPTIMIZADO */
     let ganador1 = (numeroGanador, jugador) => {
        for(let i = 0; i < jugador.length; i++){
        if(numeroGanador == jugador[i].numero){
            console.log(`Felicidades ${jugador[i].nombre} eres el ganador`)
        }
        
    }
    } 


     /* EL EJERICIO DE ARRIBA PERO DE DIFERENTE FORMA */
    let ganador2 = (numeroAleatorio) =>{
        baseDatosDos.forEach(Element =>{
            if(numeroAleatorio == Element.numero){
                console.log(`${Element.nombre} eres el ganador, felicidades!`)
            }
        });        
    }
    numeroRandom(min,max,baseDatosDos);

/* AQUI TERMINA EL EJERCICIO DE GENERADOR DE NUMEROS RANDOM /-----------------------------*/

    //Aqui esta hasta el capitulo 15.

    



    /* EJERCICIO (TIENE QUE BAJAR DE PESO (3K) PERO NO SABEMOS CUANTO TIEMPO LE VA A TOMAR) Cap. 16*/
let Fer = {
    nombre : "Fer",
    apellido : "Alava",
    edad : "24",
    sexo : "masculino",
    peso : 70
}
const PESO = 0.3;
const META = Fer.peso - 3;
const SUBIR_PESO = persona => persona.peso += PESO;
const BAJAR_PESO = persona => persona.peso -= PESO;
const COME_MUCHO = () => Math.random() < 0.3;
const HACE_EJERCICIO = () => Math.random () < 0.4;
var dias = 0;
while (Fer.peso > META) {
    //debugger
    if(COME_MUCHO()){
        SUBIR_PESO(Fer)
    };
    if(HACE_EJERCICIO()){
        BAJAR_PESO(Fer)
    }
    dias += 1;
}
//console.log(`Pasaron ${dias} dias para que ${Fer.nombre} bajara 3k`);


/* EJERCICIO, CON DO WHILE, (CUTANTAS VECES FUE A VER SI LLOVIA ) */
var contador = 0;
var LLUEVE = () => Math.random () < 0.25;
do {
    contador++;
}while(!LLUEVE()); contador > 1?  console.log(`Fue a ver si llovia ${contador} veces`):console.log(`Fue a ver si llovia ${contador} vez`);


/* UN EJEMPLO DEL USO DEL SWITCH; Clase 18 */
//var num1 = prompt("numero");
var num1 = "";
switch (num1) {
    case "1":
        console.log("Numero 1");
        break;
    case "2":
    case "4":
    case "5":
        console.log("Numero 2 o 4 o 5");
        break;
    case "3":
        console.log("Numero 3");
        break;
    default:
        //console.log("Numero no registrado");
}



/* ARRAYS/ARREGLOS */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

//console.log(sacha.nombre);  //Sacha -Bien
//console.log(sacha["nombre"]);  //Sacha -Bien
var personas = [sacha,alan,martin,dario];   //  ---->  ARRAYS
personas.forEach(Element =>{
  // console.log(Element.nombre + " " + Element.apellido);
});



/* FILTRAR ARRAYS */
var nuevoAreglo = personas.filter(function Nuevo(cualquierNombre){
    return cualquierNombre.nombre.length >= 5;
    //return algo.altura > 1.50;
});
//console.log(nuevoAreglo);
//HASTA AQUI CLASE 20



/* MAP EN FUNCION */ //-----------------------------------------------------------------------
const pasarAlturaACms = personaDos => {
    return personaDos
}
var personasCms = personas.map(function(cualquierNombre){
    //cualquierNombre.altura = 50;
   // console.log(cualquierNombre.altura);
   // return cualquierNombre;
});
//console.log(personasCms);

var arrysTres = [
    uno = {
        nombre: "uno",
        apellido: "aUno",
        clave: 1
    },
    dos = {
        nombre: "dos",
        apellido: "aDos",
        clave: 2
    },
    tres = {
        nombre: "tres",
        apellido: "aTres",
        clave: 3
    }
];



//LO QUE HICE AQUI FUE UNA SIMULACION DE REGISTRO CON MAP
 var guardarDatos = (nombre,clave) =>{
     var nuevoUsuario = {
         usuario: nombre,
         clave: clave
        }
        var comprovarUsuarios = JSON.parse(localStorage.getItem("usuarios"));
        if(comprovarUsuarios == null){
            comprovarUsuarios = [],
            comprovarUsuarios.push(nuevoUsuario);
        }else{
            comprovarUsuarios.push(nuevoUsuario);
        }
        localStorage.setItem("usuarios", JSON.stringify(comprovarUsuarios));
 }
botonRegistro.onclick = function (){
    var  nombreUno = document.getElementById("usuarioRegistro").value;
    var  claveUno = document.getElementById("claveRegistro").value;
    guardarDatos(nombreUno,claveUno)
};


botonLogin.onclick = function (){
    var comprovarUsuarios = JSON.parse(localStorage.getItem("usuarios"));
    var nombreLogin = document.getElementById("usuarioLogin").value;
    var  claveLogin = document.getElementById("claveLogin").value;
    comprovarUsuarios.map((x)=>{
        if (nombreLogin == x.usuario && claveLogin == x.clave){
            console.log(`Bienvenido ${x.usuario}`)
        }
    }); 
};
//FIN DE LO QUE HICE AQUI FUE UNA SIMULACION DE REGISTRO CON MAP


/* MANERA DE CAMBIAR VALORES DE TODOS LOS BJETOS DENTRO DE UN ARRAY */
 var cambiarValores1 = personas.map(x =>{  //Cambia los datos hasta del array original
    x.altura *= 100;
    return x;
});
//console.log(cambiarValores1); 

var funcionMap = x =>{  //Cambia tambien los datos del array original
    x.altura *= 100;
    return x;
} 
var cambiarValores2 = personas.map(funcionMap);
//console.log(cambiarValores2);


 var cambiarValores3 = personas.map(x =>{  //No cambia los datos del array original, ahora ties dos arrays diferentes
return {
    ...personas,
    altura: x.altura * 100
}
})
//console.log(cambiarValores3);


personas.map(z =>{  //Lo mismo pero de diferente manera
    z.altura *= 100;
    return z;
})
//console.log(personas);
 
    





//let nombre = "Alejo";
//console.log(`Hola ${nombre}`);

function saludar(nombre) {
  return mensaje = `Hola ${nombre}`
};
//console.log(saludar("Alejo"));


//console.log("Inicio del programa");

setTimeout(function () {
  //console.log("Primer timeout")
}, 3000);

setTimeout(function () {
  //console.log("Segundo timeout")
}, 0);

setTimeout(function () {
  //  console.log("Tercer timeout")
}, 0);

//console.log("Fin del programa");




/* DESTRUCTURACION DE OBJETOS */
let persona = {
  nombre: "Alejo",
  apellido: "Alava",
  edad: 22,
  getNombre: function () {
    return `Mi nombre es ${this.nombre} ${this.apellido}`
  }
};

//console.log(persona.getNombre()); 

let { nombre: nombreNombre, apellido, edad } = persona;  //persona es el nombre del objeto
//console.log(nombreNombre , apellido , edad);

function sumar(a, b) {
  return a + b;
};
//console.log(sumar(20,10));

let sumarUno = (a, b) => a + b;
//console.log(sumarUno(20,10));


let hola = () => "Hola Mundo";
//console.log(hola());




/* ESTO ES UN CALLBACK --------------------------------------------------------------------------------------------------------------------*/
setTimeout(() => {
  //console.log("Hola Mundo");
}, 3000);


/* ESTO SRIVE PARA TRAER INFORMACION DE UN USUARIO ---------------------------------------------------------------------------------- */
let getUsuarioById = (id, callback) => { //El ID es el ID del usuario que queremos buscar. 

  let usuario = {//Suposicion de que vamos a la base de datos y traemos el Uusiario
    nombre: "Fernando",
    id // --> Es lo mismo que  id: id
  }
  
  if (id === 20) {
    callback(`El usuario con ID ${id} no existe`)
  } else {
    callback(null, usuario);
  }

};

getUsuarioById(5, (err, usuario) => {
  if (err) {
    return console.log(err);
  }
  //console.log("Usuario de base de datos", usuario);
});



//Lo mismo de arriba pero por cuenta propia, tratando de entender;
let examen = (codigoUsuario,funcionPorLamar) => {

  usuarioDos = {
    nombre : "Alejo",
    apellido : "Alava",
    codigoUsuario
  };
if(codigoUsuario === 20){ //El numero 20 es una simulacion del ID del usuario que no existe
  funcionPorLamar(`El id ${codigoUsuario} no existe`)
}else{
  funcionPorLamar(null,usuarioDos);
}
};

examen(10, (error,datoUsuario) => {
  if(error){
    //return console.log(error);
  }
  //console.log(`El usuario con el id ${datoUsuario.codigoUsuario} es` , datoUsuario);
});



/* SIMULACION DE BASE DE DATOS PARA TRABAJAR CON CALLBACKS --------------------------------------------------------------------*/

let empleados = [
  {
    id: 1,
    nombre: "Alejo"
  },
  {
    id : 2,
    nombre : "Jeff"
  },
  {
    id : 3,
    nombre : "Juan"
  },
  {
    id : 4,
    nombre : "Frank"
  }

];

let salarios = [
  {
    id : 1,
    salario : 500
  },
  {
    id : 2,
    salario : 1000
  },
  {
    id : 3,
    salario : 600
  },
  {
    id : 4,
  }
]

//Pequeño ejemplo de como se usa el FIND
let usoDeFind = empleados.find(nombreCualquiera => nombreCualquiera.id === 1);
//console.log(usoDeFind);

let getEmpleado = (id , callback) => {
  let nombreEmpleado = empleados.find( x => x.id === id );
  if(!nombreEmpleado){
    let noExiste = `El empleado con el Id ${id} no existe`
    callback(noExiste)
  }else{
    callback(null,nombreEmpleado)
  }
};



getEmpleado(4, (error , datoEmpleado) => {
  if(error){
    return console.log(error);
  }
  //console.log(`El empleado es` , datoEmpleado);
});




/* EJERCICIO: BUSCAR A UNA PERSONA POR MEDIO DE SU SALARIO (Arriba tienes el array con los salarios)*/

let getSalarios = (salario , callback) => {
  let busarSalario = salarios.find(x =>{
    return x.salario === salario;
  });
  if(!busarSalario){
    let noExiste = `No se encontro una persona con el salario de ${salario}`
    //callback(noExiste);
  }else{
    callback(null , busarSalario)
  }
};

getSalarios(500, (error , datosRecibir) =>{
  if(error){
    //return console.log(error);
  }
  //console.log(`Los datos de las persona con un salario de ${datosRecibir.salario} es `, datosRecibir);
});



//Ejercicio: Enlazar ambos arrays por medio de los ID y arrojas el nomrbe de la persoan que tiene cierto sueldo;
let getSalariosDos = ( empleado , callback) =>{
  let guardarSalarios = salarios.find(nombreFind => {
  return nombreFind.id === empleado.id; 
  });

  if(!guardarSalarios){
    callback(`No se encontro un salario para ${empleado.nombre}`)
  }else{
    callback(null , {
      nombre : empleado.nombre,
      salario: guardarSalarios.salario,
      id : empleado.id
    })
  }
  
};
getSalariosDos({

  id : 2, nombre : "Juan"

},

(r , x ) =>{
  if(r){
      `N`
  }else{
    //console.log(x);
  }
})




//capitulo 20 seguir haciendo el ejercicio esta mal y hay que terminarno 
/* PRUEBA SOBRE TRAER DATOS DE UNA BASE DE DATOS*/
let fruta = [
    {
        nombreFruta : "Naranja",
        volumen : "Peque",
        id : 1
    },
    {
        nombreFruta : "Peras",
        volumen : "Mediando",
        id : 2
    },
    {
        nombreFruta : "Sandias",
        volumen : "Muy grandes",
        id : 3
    },
    {
        nombreFruta : "Cocos",
        volumen : "Graaaaades",
        id : 4
    }
];

let precioFrutas = [
    
    {
        precio : 10,
        id : 1
    },
    {
        precio : 15,
        id : 2
    },
    {
        precio : 20,
        id : 3
    },
    {
        id : 4
    }

];

let  idFrutas = (idFruta , callback) => {
     let nombreFruta = fruta.find( x => {
        return x.id == idFruta
    });

    if (!nombreFruta){
        let noExiste = `No existe una fruta con ese nombre`
        callback(noExiste)
    }else{
        callback(nombreFruta)
    };
};

let getPrecioFruta = (nombreId , callback ,numero ) =>{
    let precioFruta = precioFrutas.find( x =>{
        return x.id == nombreId.id;
    });


    if(!precioFruta){
        // console.log(`La furta con el id  ${numero} no existe`);
    }else{
        if(!precioFruta.precio){
            callback(null,{
                nombre : nombreId.nombreFruta,
                id : precioFruta.id
            })
        }else{
            callback({
                nombre : nombreId.nombreFruta,
                precio : precioFruta.precio,
                id : precioFruta.id
            });
        }
    }
    
};


let d2 = ( a , b) =>{
    if(!a){
       //return console.log(`No existe un precio para la fruta ${b.nombre}`); 
    }
    //console.log(`La fruta ${a.nombre} cuesta ${a.precio}$`);
}


    
var numeroFruta = 100;
     idFrutas( numeroFruta , d => {
        getPrecioFruta( d , d2 , numeroFruta )
    });
//Aqui termina la prueba de simulacion de base de datos  C. 20


/* USO DE LAS PROMESAS (return new Promise) -  Resolve , Rejec - Then - Catch  ----------------------------------------------------------- */
let getNombreFruta = (id) => {
    return new Promise((resolve , reject) => {
          let getNameFruta = fruta.find( x => {
              return x.id == id
          });

        if(!getNameFruta){    
            let noExiste = `No existe una fruta con el id ${ id }`
            reject(noExiste)
        }else{
            resolve(getNameFruta)
            };
    });
};

     getNombreFruta(30).then(  empleado => {
        // console.log(`Empleado de BD` , empleado);  
    }, (y , z) =>{
        //console.log(y);
    } );



    //Ejercicio de clase ( Lo mismo de arriba pero solo );
    let getPrecioFrutas = (idEnviar) => {
        return new Promise( ( resolve , reject ) => {   //Por defecto suelen poner RESOLVE cuando si encuentrar cierto dato y REJECT cuando no encuentran cierto dato, pero aun asi puedes poner cualquier otros nombre
            let getPrecios = fruta.find( x =>{
                return x.id === idEnviar;
            });

            if(  !getPrecios ){
                let noExiste = `El precio con el ID ${idEnviar} no fue encontrado`
                reject( noExiste );
            }else{
                resolve(getPrecios);
            };
        });
    };


    let compararIDs = (dato , datoID) =>{
        return new Promise( ( bien , mal ) => {
            let compararID = precioFrutas.find( x => {
                return x.id === dato.id;
            });

            if(!compararID){
                let noExiste = `No tiene precio el id ${datoID}`
                mal(noExiste);
            }else{
                if(!compararID.precio){
                    bien({
                        fruta : dato.nombreFruta,
                        precio : `Este producto no tiene precio`,
                        id : dato.id
                    })
                }else{
                    bien({
                        fruta : dato.nombreFruta,
                        precio : compararID.precio,
                        id : dato.id
                    });
                }
                };
            });
    };



    //Esta es una de las formas para poder llamar a las PROMESAS en cadea  (Encadenar promesas);
    getPrecioFrutas(100).then( bienBien => {
        //console.log( `BIEN` , bienBien);
        compararIDs(bienBien).then( bienDatos => {
            // console.log(`La informacio de la fruta es esta ` , bienDatos);
        })
    } , malMal => {
        // console.log(`ERROR ` , malMal);
    });


// Esta es otra forma para poder llamar PROMESAS en cadena, es lo mismo de lo de justo acarriba pero de diferente manera (Encadenar promesas);

    getPrecioFrutas(4).then(bienBien => {
    
        return compararIDs(bienBien);   //Cuando veas un return en una promesa significa que el siguuiente Then es de esa promesa.
    
    }).then(biennn =>{   // Estos Then corresponde a la promesa de comprarIDs(bienBien)
        // console.log(`LA informacion de la fruta es esta ` , biennn);
    }).catch( mal => {
        // console.log(`ERROR ` , mal);
    });
    //Todo esto fue hasta el C.22
    

    
    /* ASYNC - AWAIT --------------------------------------------------------------------------*/

    // let getName = async() => {
    //     return "alejo";  //Async significa que es ahora una funcion asincrona y te devovlera una PROMESA
    // } 
    //getName().then( ()=> console.log(`Alejo`)).catch( Up => console.log(Up)); 


    //  Poner async es como hacer esto   <==== DATO IMPORTANTE
    let getNameDos =  () => {
      return new Promise (( resolve , reject ) => {
        setTimeout( ()=>{
          resolve(`Alejo`)
        },3000);  
      })
    };
    

    /* getNameDos().then( x => {
      console.log(x);
    }) */


    let saludo = async() => {
      let nombre = await getNameDos();  // El await sirve para que las funciones que regresen PROMESAS tengan la sensacion de que son trabajos sincornos es decir en el mismo hilo, JS no va a continuar con la ejecucion de las lineas de mas abajo hasta que no tenga la respuesta de la linea con await
      return `Hola ${nombre}`
    };
  

    saludo().then( x => {
      // console.log(x);
    }).catch( (a) =>  console.log(`ERROR DE NOBATO $` , a ));
    //Hasta aqui C. 23.


    //Ejercicio por mi cuenta ...
    let funcionPrueba = async() =>{
      return `ALejo`
    };

    funcionPrueba().then( x => {
      console.log(`Espero estes bien ${x}`);
    }).catch( (e) => {
       console.log(`Error de nobato` , e);
    });

    let nombrePReuabdSo = async () => {
      
      let nombrePrueba = await funcionPrueba()
      return `Hi , ${nombrePrueba}`
    };;

     nombrePReuabdSo().then( x => {
       console.log(x);
     })
    //FIN DE => Ejercicio por mi cuenta ...
    
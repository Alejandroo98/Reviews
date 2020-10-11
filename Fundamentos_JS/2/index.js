/* REDUCIR UN ARRAY C.22 */
var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,   
    cantidadDeLibros: 182
}
var personas = [sacha, alan, martin, dario, vicky, paula]


//Sumar cuantos libros tienen en total todos los objetos
let acumulador = 0;
for(i = 0 ; i < personas.length ; i++){
    acumulador += personas[i].cantidadDeLibros;
};
//console.log(`En total hay ${acumulador}`);


//Sumar cuantos libros tienen en total todos los objetos - SEGUNDA OPCION
var sumador = 0;
personas.map(x => {
    sumador += x.cantidadDeLibros;
})
//console.log(`En total hay ${sumador}`);



/* HACER LO QUE HICIMOS EN LAS LIENAS DE ARRIBA PERO CON "REDUCE" */
 
//Opcion 1;
 const reducer = (acum , personas) => {
    return acum += personas.cantidadDeLibros
}
const totalDeLibros = personas.reduce(reducer,10);
//console.log(totalDeLibros); 

//Opcion 2;
var otroReducer = personas.reduce((acumulador,iterador) => acumulador + iterador.cantidadDeLibros , 0); //El primer parametor es donde se va acumulando el resultado de todas las sumas, el segundo parametro es el elemento es decir el array en este caso.
//EL ultimo numero es a partir de que numero queires empezar a sumar;
//console.log(otroReducer);

//Hasta aqui capitulo 23 SEE YOU TOMORROW!!!



/* CONSTRUCTOR DE OBJETOS ---------------------------------------------------------------------------------------------- */
function constructorObjeto (nombre, apellido){
    this.prueba = nombre
    this.pruebaDos = apellido
};

var nombreUsuario //= prompt("Nombre")
var apellidoUsuario //= prompt("Apellido")

var nombreUsuario = new constructorObjeto (nombreUsuario , apellidoUsuario);

constructorObjeto.prototype.cualquierNombre = function () {
    console.log(`Hola, me llamo ${this.prueba} ${this.pruebaDos}`);
}

constructorObjeto.prototype.otroEjemplo = function () {
    alert("bien")
}
//nombreUsuario.cualquierNombre();

//EJERCICIO: SABER SI UNA PERSONA ES ALTA O BAJA A PARTIR DE 1.8 METROS (uzar prototipos);

function crearPersona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura; 
};

crearPersona.prototype.alturaParametro = function (){
    console.log(this.altura >= 1.80? "Soy alto" : "Soy bajo");
};

var usuarioNuevo = new crearPersona ("Alejo","Alava", 1.50);

//usuarioNuevo.alturaParametro();
//Hasta qui la clase 26


/* CLASES EN JS (ERENCIA PROTOTIPAL) C.26  ---------------------------------------------------------------------*/         
function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function (){};
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype = new fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
} 



function objetoTres(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
};

objetoTres.prototype.altoBajo = function (){
    console.log(this.altura > 1.80? `Yo ${this.nombre} soy alto` :  `Yo ${this.nombre} soy bajo` );
}

objetoTres.prototype.saludar = function(){
    console.log(`Hola yo soy ${this.nombre} ${this.apellido}`);
}

function desarrollador (nombre , apellido){
    this.nombre = nombre;
    this.apellido = apellido;
};

heredaDe(desarrollador,objetoTres);

desarrollador.prototype.saludar = function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy un desarrollador/a`);
}

//var usuarioUno = new objetoTres("Alejo","Alava", 1.50);
//var usuarioDos = new objetoTres("Ricardo","Alava", 1.50);
//var usuarioTres = new objetoTres("Jeff","Alava", 1.50);
//usuarioUno.altoBajo();
//usuarioUno.miNombre();



/* CLASES */ //------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//El ejemplo de arriba pero con clases(Esta es una manera mas facil de hacer lo de arriba) -----------------------------------------------------------------------------------------
class Persona{
    constructor(nombre , apellido, altura){   //Metodo llamado constructor
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    };
   saludar(){
       return (`Hola, mi nombre es ${this.nombre} ${this.apellido}`);
   };

   soyAlto(){
       return this.altura >= 1.8;
   };

   soloApellido(){
       return `Mi apellido es ${this.apellido}`
   }
};

//Com hacer que una clase desarrolladorTres erede de otra;
class desarrolladorDos extends Persona{  //Para hacer que herede de otra clase lo hacemos extends, aun que aqui no se llama heredar, aqui se llama EXTENCION ------------------------------------------------
    constructor(nombre,apellido,altura){    
        super(nombre,apellido,altura);    //Esto srive para llamar al constructor de la clase padre.
        /*    Esto es justamento lo que hace SUPER de la linea de arriba.
        this.nombre = nombre;
        this.apellido = apellido; 
        */
    };

    saludar(){
        return `Hola mi nombre es ${this.nombre} ${this.apellido} y soy un desarrollador`
    };
};

let otraPersona = new desarrolladorDos("Javier", "Olives", 2);
// console.log(otraPersona.soyAlto());




// Practica por mi cuenta - Es el mismo ejericcio de arriba;
class desarrolladorTres{
    constructor(nombre,apellido,cargo,suledo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.cargo = cargo;
        this.suledo = suledo;
    };

    saludar(){
    return `Mi nombre es ${this.nombre} ${this.apellido}` 
    };

    elSueldo(){
        return `Mi sueldo es de ${this.suledo}`
    };

    elCargo(){
        return `Mi cargo es ${this.cargo}`
    };
}

let nombrePersona = new desarrolladorTres("Jefferson" , "Alava" , `Desarrollador`,800);
// console.log(nombrePersona.saludar());


/* ASINCORNISMO (Pongo como parametro dentro del prototipo una funcion) ----------------------------------------------------------------------------------------------------*/

class otroEjemplo {
    constructor(nombre,apellido,edad,cargo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.cargo = cargo;
    };

    saludarPersona(fun){
        let {nombre , apellido , edad ,cargo} = this;
        if(fun){
            fun(nombre,apellido,false)
        }else{
            console.log(`Mi nombre es ${nombre} y no soy desarrollador`); 
        };
    };

    cargoPersona(){
       return `Soy ${this.nombre} y mi cargo es ${this.cargo}`
    };

    edadPersona(){
        let {nombre , apellido , edad} = this;
        return `La edad de ${nombre} es ${edad}`
    }
};

class extencion extends otroEjemplo{
    constructor(nombre,apellido,edad,cargo){
        super(nombre,apellido,edad,cargo)
    }
    saludarPersona(fun){
        let {nombre , apellido} = this;
        if(fun){
            fun(nombre,apellido,true)
        }else{
        console.log(`Mi nombre es ${nombre} y soy un desarrollador`);    
        }
    }
};

let usuarioPersona = new otroEjemplo ("Alejo" , "Alava" , 50 , "Diseño");
let otroUsuario = new extencion("Peres" , "Lopez" , 30 , "Desarrollador");
// console.log(otroUsuario.edadPersona());

function mandarFuncion(nombre , apellido, esDev){
    console.log(`Mi nombre es ${nombre} y mi apellido es ${apellido}`); 
    if(esDev){
        console.log(`A mira, no sabia que eras Desarrollador`);
    }
};
// usuarioPersona.saludarPersona(mandarFuncion);
// otroUsuario.saludarPersona(mandarFuncion);


//hacer ele ejercicio de arriba por cuenta propia. (Consiste en crear una clase y asinarle un prototipos y luego herede (extens) una funcion de otra clase );
class miEjercicio{
    constructor(fruta,precio,mercado){
        this.fruta = fruta;
        this.precio = precio;
        this.mercado = mercado;
    }

    
    nombreFruta(fn){
        let {fruta , precio} = this;
        if(fn){
            fn (fruta , precio)
        }else{
            console.log(`El nombre de la fruta es ${fruta} y su precio es de ${precio}`);
        }
    }
    
    precioFruta(fu){
        let {precio , fruta} = this;
        if(fu){
            fu( precio , fruta)
        }else{
            console.log(`El precio de la fruta es ${precio}`);
        }
    };

    mercadoFruta(){
        let {mercado , fruta} = this;
        console.log(`Puedes comprar ${fruta} en el mercado ${mercado}`);
    };
};

    let funcionFruta = (fruta , precio) =>{
    console.log(`El nombre de la fruta es ${fruta} y su precio es de ${precio}`);
};


    class nombreVerduras extends miEjercicio{
        constructor(verdura, precio , mercado){
            super(verdura , precio , mercado);
            this.verdura = verdura;
        };

        precioVerdura(){
            let {verdura , precio , mercado} = this;
            console.log(`El nombre de la verdura es ${verdura}`);
        }
    }

let nuevaFruta = new miEjercicio ("Pera" , 2 , "San Juan");
let nuevaVerdura = new nombreVerduras ("Tomtate" , 2 , "San Pablo");
// nuevaFruta.nombreFruta(funcionFruta);

nuevaVerdura.precioFruta(function(precio , nombre){
        var nombre = nombre.toUpperCase()
        if(precio > 5){
            console.log(`El precio del prducto ${nombre} es muy elevado`);
        }else{
        //   console.log(`El producto ${nombre} no tiene ningun descuento`);
        }
});


/* ASINCRONISMO EN JS -----------------------USO DE THEN , FAIL , CATACH ------------------------------------------------------------------------- */
/* INSTALAR J.QUERY 
1.-Ir a www.jquery.com
2.-Download jQuery
3.-Using jQuery with a CDN
4.- https://code.jquery.com
5.- En -> jQuery 3.x -> minified
6.- Copias el link

https://swapi.dev./   < -- Sitio web donde encontrar el link de la API de Star Wars
https://swapi.dev/api/   < -- API de los actores de STAR WARS    (esta es la URL a la cual queremos acceder);


 */

const API_URL = `https://swapi.dev/api/`
 const PEOPLE_URL = "people/:id";
//  const lukeUrl = `${API_URL}${PEOPLE_URL.replace(":id", 1 )}`
//  const opciones =  { crossDomain : true}
 
 /* $.get( lukeUrl , opciones , function (nombre) {   // <--- Para poder hacer un requiest con jQuery -> metodo pesos . get <-. hacepta dos parametros el pirmero es la URL A LA CUAL QUEREMOS ACCEDER
    console.log(`Hola yo soy ` , nombre.name );
});            
*/




/*EJERCICIO DE TRAER EL NOMRBE DE UNA BASE DE DATOS QUE SE MUESTRA EN PANTALLA */
function obtenerPersonaje (id ){
    const url = `${API_URL}${PEOPLE_URL.replace(":id" , id)}`
    const opciones =  { crossDomain : true}
    return new Promise(( Bine , mal ) => {

        $.get( url , opciones , onPeopleResponse = ( x ) => {
            Bine( x , id)
        }).fail(()=> mal(id))

    })
}
    
let error = (x ,y ) =>  {
    let nombrePersonaje = document.querySelector(".resultadoPersonaje");
    nombrePersonaje.innerHTML = `No se encontro un personaje con el ID ${x}`
}

Consultar.onclick = () =>{
    let nombrePersonaje = document.querySelector(".resultadoPersonaje");
    let traerNombre = document.querySelector(".datoPersonaje").value;
    if(!traerNombre){
        return nombrePersonaje.innerHTML = "Escribe un ID"
    };
    obtenerPersonaje( traerNombre).then( (x, id) => {
        nombrePersonaje.innerHTML = x.name
    }).catch(error)
};
/* FIN DE => EJERCICIO DE TRAER EL NOMRBE DE UNA BASE DE DATOS QUE SE MUESTRA EN PANTALLA */



/* ASI ES COMO SE LLAMA A LOS DATOS DE FORMA ORDENAADA (NO CREO QUE SEA LA UNICA FORMA NI LAS MAS ORDENADA, O ESO ESPERO) C.34*/   //Borre los datos de esto
/* ESAT ES OTRA FORMA DE LLAMAR DATOS PERO NO SABEMOS EN QUE ORDEN LLEGARAN, PARA LLEGUE NE ORDEN TENEMOS QUE HACER LO DE LAS LINEAS DE MAS ABAJO (EL INFIRNO DE LOS CALLBACKS O CALLBACKS GEL)  */
// obtenerPersonaje(1);
// obtenerPersonaje(2);
// obtenerPersonaje(3);




/* EJERCICIO COPIADO DE CLASES, USO DE PROMESAS */
const opts = { crossDomain: true }

function persona(id){
	return new Promise ((resolve, reject)=>{
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		    $.get(url, opts, function(data){
				resolve(data)
			}).fail(()=> reject(id))
	})		
}

function onError(id){
	console.log(`Sucedió un error al obtener el personaje ${id}`)
}


//Esta es la forma para poder concatenar un sinumero de promesas.
persona(1).then( personaje => {
        // console.log(`El personaje  es ${personaje.name}`)
        return persona(2)
    }).then(x =>{
        // console.log(`El personaje es ${x.name}`);
        return persona(3)
    }).then( x => {
        // console.log(`El personaje es ${x.name}`);
        return persona(4)
    }).then( x => {
        // console.log(`El personaje es ${x.name}`);
        return persona(5)
    }).then( x => {
        // console.log(`El personaje es ${x.name}`);
        return persona(6)
    }).then( x => {
        // console.log(`El personaje es ${x.name}`);
        return persona(7)

    })
    .catch(onError)
//FIN DE => Esta es la forma para poder concatenar un sinumero de promesas.
/*FIN DE => EJERCICIO COPIADO DE CLASES, USO DE PROMESAS */    




/* ESTE ES UN EJERCICIO DE PEDIR INFORMCION DE BASE DE DATOS (ES IGUAL A TODO LO DE ARRIBA PERO BIEN HECHO, CORTO Y FACIL DE ENTENDER) C.38 */
const opciones = { crossDomain: true }
    let funcionPueba = (id) => {
        return new Promise ((resolve , reject ) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		    $.get(url, opciones , (x) => {
                resolve(x)
            }).fail(()=> reject(id))
        })
    };


    funcionPueba(10).then((x) => {
        // console.log(`Mi nombre es ${x.name}`);
    }).catch((x) => {
        // console.log(`No es encotnro un personaje con el id ${x}`);
    });
/*FIN de =>  ESTE ES UN EJERCICIO DE PEDIR INFORMCION DE BASE DE DATOS (ES IGUAL A TODO LO DE ARRIBA PERO BIEN HECHO, CORTO Y FACIL DE ENTENDER) C.38 */



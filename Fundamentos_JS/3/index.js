/* PROMESAS CON ARRAYS - USO DE MAP C.38 ----------------------------------------------------------- */
const API_URL = `https://swapi.dev/api/`
const PEOPLE_URL = "people/:id";	 
const opciones = { crossDomain: true }


    let funcionPueba = (id) => {
        return new Promise ((resolve , reject ) => {
		const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
		    $.get(url, opciones , (x) => {
                resolve(x)
            }).fail(()=> reject(id))
        })
    };

    let onError = ( id ) => console.log(`El personaje con el usuario ${id} no fue encontrado`);

    let arrayNew = [1 , 2 , 3 , 4 , 5 ]
    var promesasArray = arrayNew.map( x => funcionPueba(x) );

    //ESTA ES LA MENARA PARA LLAMAR VARIAS PROESAS MEDIANTE UN ARRAY
    Promise.all(promesasArray).then( x => {    //Pomise.all sirve para iterar mediante un array de promesas; promesasArray es el nombre del array
        // console.table(x)  //console.table()  es una mejor manera para mostar arrays
    }).catch(onError)  //Recuerda que catch se utiliza en caso ocurra un error


    //ESTA ES LA MANERA PARA LLAMAR UNA PROMESA DE FORMA INDIVIDUAL
    funcionPueba(10).then((x) => {
    //    console.log(`Mi nombre es ${x.name}`);
    }).catch((x) => {
        // console.log(`No es encotnro un personaje con el id ${x}`);
    });






    /* ASYNC - AWAIT: LO ULTIMO EN ASINCRONISMO  C.39 --------------------------------------------------*/
    //El ejercicio de arriba pero de una mejor manera
    /* ESTO HACE LO MISMO DE ARRIBA PERO ESTA VEZ LO HACEMOS CON => ASYNC - AWAIT  QUE HOY EN DIA SE UTILIZA BASTATE*/
    async function obtenerPersonajes (){
        let ids = [1 , 2 , 3 , 4 , 5];
        let promesas = ids.map( id => funcionPueba(id));
        
        try{
            let personajes = await Promise.all(promesas) // Lo que va ahcer el await es detener la funcion ahí hasta que todas las promesas sean resueltas y recien ahí ese valor se va aguardar en la variable personajes
            console.log(personajes);
        }catch (id){
            onError(id)
        }
    };
    //obtenerPersonajes(); 
 //Hasta aqui C.39 - Se viene el juego!!
 
 /* JUEGO DE LA CLASE */

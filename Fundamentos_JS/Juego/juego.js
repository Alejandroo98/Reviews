/* INICIO DEL JUEGO  C.40 */
 const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btnEmpezar');
const cartelAdelante = document.getElementById("adelanteEspera");
const ULTIMO_NIVEL = 5;
let TIEMPO_MAXIMO = 10;
let TIEMPO_MINIMO = 0;

  class Juego {
  constructor() {
    this.generarSecuecnia();
    this.inicializar = this.inicializar.bind(this);
    setTimeout( ()=> this.siguienteNivel() , 100 )
    this.inicializar();
  }
  
  inicializar() {
    this.temporizador = this.temporizador.bind(this);
    this.tiempoRestante = this.siguienteNivel.bind(this);
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.temporizador();
    this.toggleBtnEmpezar();
    //btnEmpezar.classList.add('hide')   //Esto srive para activar ciertos estilos en CSS (hide es el nombre de ls estilos que estan definidos en el archivo llamado juego.css y botonEmpezar es el id al cual queremos implementarle otros nuevos estios)
    // a demas de classList.add hay mas por ejemplo .remove  .replace (https://developer.mozilla.org/es/docs/Web/API/Element/classList)
    this.nivel = 1;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    };
  };

  temporizador(){
        if( TIEMPO_MAXIMO === -1){
          window.juego.perdioElJuego();
          return
        }
        cartelAdelante.innerHTML = TIEMPO_MAXIMO--;
        setTimeout(this.temporizador.bind(this) , 1000);
    // temporizador.conteoSegundos();
    // let temporizador = new Temporizador ("Temporizador " , 10 , -1)

}



  toggleBtnEmpezar(){
    if(btnEmpezar.classList.contains("hide")){
      btnEmpezar.classList.remove("hide")
    }else{
      btnEmpezar.classList.add("hide");
    }
  }

  generarSecuecnia(){
    this.secuecnia = new Array(ULTIMO_NIVEL).fill(0).map( o => Math.floor(Math.random() * 4 ));
  };


  siguienteNivel(){
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agregarEventosClick();
   
  }

  transformarNumeroAColor(numero){
    switch (numero) {
      case 0:
        return `celeste`
      case 1:
        return `violeta`
      case 2:
        return `naranja`
      case 3:
        return `verde`
    }
  };


  transformarColorANumero(color){
    switch (color) {
      case `celeste`:
        return 0
      case `violeta`:
        return 1
      case `naranja`:
        return 2
      case `verde`:
        return 3
    }
  }


  iluminarSecuencia(){
    for(let i = 0 ; i < this.nivel ; i++){
      let color = this.transformarNumeroAColor(this.secuecnia[i])
      setTimeout(()=> this.iluminarColor(color) , 1000 * i);
      // cartelAdelante.innerHTML = "Espera"
    }
    // this.adelanteEspera()

  }

  iluminarColor(color){
    this.colores[color].classList.add(`light`);
    setTimeout(()=>{
      this.apagarColor(color)
    }, 350);
  };


  apagarColor(color){
    this.colores[color].classList.remove(`light`);
  }

  agregarEventosClick(){
    this.colores.celeste.addEventListener(`click` , this.elegirColor);
    this.colores.verde.addEventListener(`click` , this.elegirColor);
    this.colores.violeta.addEventListener(`click` , this.elegirColor);
    this.colores.naranja.addEventListener(`click` , this.elegirColor);
  };

  eliminarEventosClick(){
    this.colores.celeste.removeEventListener(`click` , this.elegirColor);
    this.colores.verde.removeEventListener(`click` , this.elegirColor);
    this.colores.violeta.removeEventListener(`click` , this.elegirColor);
    this.colores.naranja.removeEventListener(`click` , this.elegirColor);
  }

        elegirColor( ev ){
          const nombreColor = ev.target.dataset.color;
          const numeroColor = this.transformarColorANumero(nombreColor);
          this.iluminarColor(nombreColor);
          if ( numeroColor === this.secuecnia[this.subnivel]){
            this.subnivel++;
            if(this.subnivel === this.nivel){
              this.nivel++;
              this.eliminarEventosClick();
              this.temporizador(10)
              if(this.nivel === (ULTIMO_NIVEL + 1)){
                this.ganoElJuego()
              }else{
                setTimeout( this.siguienteNivel , 2000);
              }
            }
          } else {
            this.perdioElJuego()
          }
        }

        ganoElJuego(){
          swal ("Simon Dice" , "Felicitaciones, ganaste juego" , "success")
          .then( this.inicializar);
        }
        perdioElJuego(){
          swal ("Simon Dice" , "Ou!! Nobato? :(" , "error")
          .then(() => {
            this.agregarEventosClick()
            this.inicializar();
          })
        };
      };

      /* function Temporizador (id , inicio , final){
        this.id = id;
        this.inicio = inicio;
        this.final = final;
        this.contador = this.inicio;

        this.conteoSegundos = function(){
          if( this.contador === -1){
            window.juego.perdioElJuego();
            return
          }
          cartelAdelante.innerHTML = this.contador--;
          setTimeout(this.conteoSegundos.bind(this) , 1000);
        };
      } */

      // temporizador.conteoSegundos();
      // let temporizador = new Temporizador ("Temporizador " , 10 , -1)



function empezarJuego() {
  window.juego = new Juego();
};
//Hasta aqui capitulo 44 ---------------





















/* REPASANDO COMO FUNCIONANA LAS CLASES */
class Personas {
    constructor( nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    };

    datos(){
        // `Hola mi nombre es ${this.nombre} y mi edad es ${this.edad}`
         return {
            nombre : this.nombre,
            edad : this.edad
        }
    };
    static nombreFuncion(){   //Static sirve para poner una descirpcion de la clase a la que pertenece;
      return `Esto srive para dar una descirpcion de la clase`
    }
};
//Heredar propiedades de una clase padre
class cargo extends Personas {
    constructor(nombre , apellido  ,puesto){
        super(nombre , apellido)
        this.puesto = puesto;
    };
    cargoEmpleado(){
        //console.log(this.datos().nombre);
        return `Mi cargo es ${this.puesto}`
    }
}

// let newPerson = new Personas ("Alejo" , 22);
let sueldoEmpelado = new cargo ("Alejo" , 22 , "Desarrollador");
// console.log(sueldoEmpelado.cargoEmpleado());
/*FIN DE =>  REPASANDO COMO FUNCIONANA LAS CLASES */
// console.log(Personas.nombreFuncion());


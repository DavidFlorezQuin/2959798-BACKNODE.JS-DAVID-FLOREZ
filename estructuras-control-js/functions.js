//CALLBACKS
function callbacks(){

    let precios = [12.32, 32.3, 45.6];
    
    precios.forEach((num)=>
    suma += num
);
console.log(suma);
}

//PROMISE 

function promise(){
    const carro = [
        {
            color: "rojo",
            modelo: "2020" 
        }
    ];

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(carro)
        })
    })

}
async function respuestaPromise(){
     try{
         const mensaje = await consumirData();
         console.log(mensaje) 
     }catch(error){
         console.log(error)
     }
 }
//  respuestaPromise()


//ASYNC AWAIT
function AsyncAwait(segundos) {
    return new Promise(resolve => {
      setTimeout(resolve, segundos * 1000);
    });
  }
  
  async function proceso() {
    console.log("Cuenta atrás para despegar");
    
    await AsyncAwait(3); 
    console.log("En 3");
    
    await AsyncAwait(2); 
    console.log("En 2");

    await AsyncAwait(1); 
    console.log("En 1");
    
    console.log("Despeguen");
  }
    proceso();
  

// CALLBACK ANIDADO
function callbackAniadado(valor, callback) {
    setTimeout(() => {
      const resultado = valor * 2;
      callback(resultado);
    }, 1000); 
  }
  
  function otroCallback(resultado) {
    console.log("La edad de su hermano mayor 3 años mayor es :", resultado+3);
  }
  
  callbackAniadado(5, resultado => {
    console.log("La edad de juan es:", resultado);
    otroCallback(resultado);
  });
  
      //PROMESA ENCADENADA
  
      const irAcomer = new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("Ir a comer");
          }, 300);
        });
        
        function resultadoExitosoA(result) {
          console.log("Resultado de A:", result);
          return "a MacDonalds";
        }
        
        function resultadoErroneoA(error) {
          console.error("Error en A:", error);
          return "error en A";
        }
        
        function resultadoExitosoB(result) {
          console.log("Resultado de B:", result);
          return "Burger King";
        }
        
        function resultadoErroneoB(error) {
          console.error("Error en B:", error);
          return "error en B";
        }
        
  
        irAcomer
          .then(resultadoExitosoA, resultadoErroneoA)
          .then(resultadoExitosoB, resultadoErroneoB)
    


// ASYNC AWAIT MANEJO DE ERRORES
function operacionAsincronica(valor) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isNaN(valor)) {
          reject("El valor proporcionado no es un número");
        } else {
          const resultado = valor * 2;
          resolve(resultado);
        }
      }, 1000); 
    });
  }
  
  async function ejecutarOperacion() {
    try {
      const resultado = await operacionAsincronica("AGDSF");
      console.log("El resultado es:", resultado);
    } catch (error) {
      console.error("Ocurrió un error:", error);
    }
  }
    ejecutarOperacion();
  
      
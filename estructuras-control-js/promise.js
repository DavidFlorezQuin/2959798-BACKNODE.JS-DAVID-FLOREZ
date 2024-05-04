const data = [
    {
        nombre: "Juan",
        edad: 23 
    }
];

function consumirData(){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            resolve(data)
        }, 2000)
    })
}

async function respuesta(){
    try{
        const mensaje = await consumirData();
        console.log(mensaje) 
        console.log("respuesta de JUAN");
    }catch(error){
        console.log(error)
    }
}

respuesta();
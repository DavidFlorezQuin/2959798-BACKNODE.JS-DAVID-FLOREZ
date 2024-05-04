function obtenerEstudiantes(NombreFicha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fichas = {
                "ADSO": 20,
                "Cocina": 5,
                "Multimedia": 15
            };
            const estudiante = fichas[NombreFicha];
            if (estudiante !== undefined) {
                resolve(`En la ficha ${NombreFicha} actualmente tenemos ${estudiante} personas.`);
            } else {
                reject("No sabría decirle.");
            }
        }, 1000); 
    });
}function primeraEtapa() {
    let continuar = true; 
    do {
        const instructorPreGunta = "Ultimamente hemos tenido muchas deserciones";
        const preguntaEstudiante = "¿Cuántas personas quedan en:";
        
        alert(instructorPreGunta);
        const respuestaFicha = prompt(`${preguntaEstudiante} Preguntar: ADSO, Cocina, Multimedia, o escriba 'irse' para dejar de hablar`);
        
        if (respuestaFicha.toLowerCase() === 'irse') {
            alert("Bye bye");
            continuar = false;
        } else {
            obtenerEstudiantes(respuestaFicha)
                .then((respuesta) => {
                    alert(`Instructor Jhon: ${respuesta}`);
                })
                .catch((error) => {
                    alert(`Instructor Jhon: ${error}`);
                });
        }
    } while (continuar); // Seguimos ejecutando mientras la variable continuar sea verdadera
}

primeraEtapa();

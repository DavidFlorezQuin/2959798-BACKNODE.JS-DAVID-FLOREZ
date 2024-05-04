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
        }, 2000);
    });
}

function primeraEtapa() {
    const preguntaEstudiante = "¿Instructor, cuál ha sido la deserción este año, cuántos estudiantes quedan?";
    
    alert("Estudiante: " + preguntaEstudiante);
    
    obtenerEstudiantes("ADSO")
        .then((respuesta) => {
            alert("Instructor Jhon: " + respuesta);
        })
        .catch((error) => {
            alert("Instructor Jhon: " + error);
        });
}

function SegundaEtapa() {
    setTimeout(() => {
        const preguntaEstudiante = "Ush, la deserción ha sido harta, ¿Cómo va multimedia?";
        
        alert("Estudiante: " + preguntaEstudiante);
        
        obtenerEstudiantes("Multimedia")
            .then((respuesta) => {
                alert("Instructor Jhon: " + respuesta);
            })
            .catch((error) => {
                alert("Instructor Jhon: " + error);
            });
    }, 5000);
}

function TerceraEtapa() {
    setTimeout(() => {
        const comentarioInstructor = "Y si le dijera cuántas quedan en cocina...";
        const preguntaEstudiante = "Cuántas?";
        
        alert("Instructor Jhon: " + comentarioInstructor);
        alert("Estudiante: " + preguntaEstudiante);
        
        obtenerEstudiantes("Cocina")
            .then((respuesta) => {
                alert("Instructor: " + respuesta);
            })
            .catch((error) => {
                alert("Instructor: " + error);
            });
    }, 9000);
}

primeraEtapa();
SegundaEtapa();
TerceraEtapa();

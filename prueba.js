function obtenerEstudiantes(estudiantes) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cursos = {
                "ADSO": 20,
                "Cocina": 5,
                "Multimedia": 15
            };
            const estudiante = cursos[estudiantes];
            if (estudiante !== undefined) {
                resolve(`En la ficha ${estudiantes} actualmente tenemos ${estudiante} personas.`);
            } else {
                reject("No se pudo obtener la temperatura para esa ciudad.");
            }
        }, 2000);
    });
}

function iniciarConversacion() {
    const preguntaEstudiante = "¿Instructor, cuál ha sido la derserción este año, cuantos estudiantes qudan?";
    
    console.log("Estudiante:", preguntaEstudiante);
    
    obtenerEstudiantes("ADSO")
        .then((respuesta) => {
            console.log("Instructor Jhon :", respuesta);
        })
        .catch((error) => {
            console.error("Instructor Jhon:", error);
        });
        
}

function SegundaEtapa() {

      setTimeout(() => {

    const preguntaEstudiante = "Ush, la desereción ha sido harta, y ¿Cómo va multimedia?";
    
    console.log("Estudiante:", preguntaEstudiante);
    
    obtenerEstudiantes("Multimedia")
        .then((respuesta) => {
            console.log("Instructor:", respuesta);
        })
        .catch((error) => {
            console.error("Instructor:", error);
        });
      },5000)
        
}
function TerceraEtapa() {

    setTimeout(() => {

    const comentarioInstructor = "Y si le dijera cuantas quedan en cocina...";

  const preguntaEstudiante = "Cuántas?";

  console.log("Instructor:", comentarioInstructor);

  
  console.log("Estudiante:", preguntaEstudiante);
  
  obtenerEstudiantes("Cocina")
      .then((respuesta) => {
          console.log("Instructor:", respuesta);
      })
      .catch((error) => {
          console.error("Instructor:", error);
      });
    },5000)
      
}

iniciarConversacion();
SegundaEtapa();
TerceraEtapa();
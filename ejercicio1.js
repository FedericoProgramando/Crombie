const alumnos = [
    { 
        nombre: "Juan", 
        nota: 10 
    },
    { 
        nombre: "María", 
        nota: 10 
    },
    { 
        nombre: "Pedro", 
        nota: 3 
    },
    { 
        nombre: "Luis", 
        nota: 7 
    },
  ];

  alumnos.sort((a, b) => a.nota - b.nota);

  const alumnoMenorNota = alumnos[0];

  const alumnoMayorNota = alumnos[alumnos.length - 1];

console.log("El alumno con menor nota es", alumnoMenorNota);

console.log("El alumno con mayor nota es", alumnoMayorNota);

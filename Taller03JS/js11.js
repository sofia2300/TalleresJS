let estudiante = {
    Nombre: "Juan",
    Edad: 20,
    Curso: "JavaScript",
    Nota: 9.5,
};

for (prop in estudiante) {
    console.log(prop, estudiante[prop])
}
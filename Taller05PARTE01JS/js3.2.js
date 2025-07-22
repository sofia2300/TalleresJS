const crearEstudiante = (nombre, nota) => ({
    nombre: nombre,
    nota: nota,
    aprobado: nota >= 60
});

// Pruebas
console.log(crearEstudiante("Luis", 75)); // 
console.log(crearEstudiante("Ana", 45)); // {
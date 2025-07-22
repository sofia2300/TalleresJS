const validarEdad = function(edad) {
    return edad >= 18;
};

// Pruebas
console.log(validarEdad(20)); // true
console.log(validarEdad(15)); // false
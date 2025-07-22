function calcularPromedio(...numeros) {
    let suma = 0;
    for (let numero of numeros) {
        suma += numero;
    }
    return suma / numeros.length;
}

// Pruebas
console.log(calcularPromedio(10, 20, 30)); // 
console.log(calcularPromedio(5, 15, 25, 35)); // 
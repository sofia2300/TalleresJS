// Función principal que usa callback
function procesarNumero(numero, callback) {
    return callback(numero);
}

// Callbacks
const duplicar = (num) => num * 2;
const triplicar = (num) => num * 3;
const cuadrado = (num) => num * num;

// Pruebas
console.log(procesarNumero(5, duplicar)); // 10
console.log(procesarNumero(5, triplicar)); // 15
console.log(procesarNumero(5, cuadrado)); // 25

// Uso con función anónima
console.log(procesarNumero(8, function(n) { return n + 10; })); // 18
function calcularDescuento(precio, descuento = 10) {
    return precio - (precio * descuento / 100);
}

// Pruebas
console.log(calcularDescuento(100)); // 90
console.log(calcularDescuento(100, 20)); // 80
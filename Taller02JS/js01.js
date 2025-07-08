// Problema 1: Calculadora de ventas

/*Una tienda vendió 3 productos durante el día:
• Producto A: $1250.75
• Producto B: $890.50
• Producto C: $2340.25

Calcular el total de ventas, el promedio de venta por producto, y mostrar el total redondeado a 2 decimales. */


let productoA= 1250.75;
let productoB= 890.50;
let productoC= 2340.25;

let totalVentas = productoA + productoB + productoC;
let promedioVentas = totalVentas / 3;

console.log(`Total de ventas: $${totalVentas.toFixed(2)}`);
console.log(`Promedio de venta por producto: $${promedioVentas.toFixed(2)}`);



//


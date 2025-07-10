// Ejercicio 03 
/* Generar 5 números aleatorios para un boleto de lotería. Cada número debe estar entre 1 y 50 (inclusive).

Mostrar los números generados en el formato: "Números de lotería: 15, 32, 8, 41, 27" */

let numero1 = Math.floor(Math.random() * 50) + 1; 
let numero2 = Math.floor(Math.random() * 50) + 2; // Genera un número aleatorio entre 1 y 50
let numero3 = Math.floor(Math.random() * 50) + 3; // Genera un número aleatorio entre 1 y 50
let numero4 = Math.floor(Math.random() * 50) + 4; // Genera un número aleatorio entre 1 y 50
let numero5 = Math.floor(Math.random() * 50) + 5; // Genera un número aleatorio entre 1 y 50

console.log(`Los números generados son: ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5}`);


// Math.floor() redondea hacia abajo al número entero más cercano.
// Math.random() genera un número aleatorio entre 0 (inclusive) y 1 (exclusivo).



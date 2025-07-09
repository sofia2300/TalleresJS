let fahrenheit = 77;
let celsius = (fahrenheit - 32) * 5 / 9;

console.log("Temperatura en Fahrenheit: " + fahrenheit + "°F");
console.log("Temperatura en Celsius: " + celsius.toFixed(1) + "°C");





let frase = "JavaScript es genial y JavaScript es poderoso";

console.log('Texto: "' + frase + '"');
console.log('Primera aparición de "JavaScript": posición ' + frase.indexOf("JavaScript"));
console.log('Última aparición de "JavaScript": posición ' + frase.lastIndexOf("JavaScript"));
console.log('¿Contiene "genial"? ' + frase.includes("genial"));
console.log('¿Empieza con "JavaScript"? ' + frase.startsWith("JavaScript"));
console.log('¿Termina con "poderoso"? ' + frase.endsWith("poderoso"));




let listaCompras = "pan,leche,huevos,queso,manzanas";
let productos = listaCompras.split(",");

console.log('Lista original: "' + listaCompras + '"');
console.log("Número de productos: " + productos.length);
console.log("Productos:");
console.log("1. " + productos[0]);
console.log("2. " + productos[1]);
console.log("3. " + productos[2]);
console.log("4. " + productos[3]);
console.log("5. " + productos[4]);
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


let a1 = 5, b1 = "5";
let a2 = true, b2 = 1;
let a3 = false, b3 = 0;
let a4 = null, b4 = undefined;
let a5 = "", b5 = 0;

console.log("Comparando " + a1 + ' y "' + b1 + '":');
console.log("- Con == (con conversión): " + (a1 == b1));
console.log("- Con === (sin conversión): " + (a1 === b1));

console.log("\nComparando " + a2 + " y " + b2 + ":");
console.log("- Con == (con conversión): " + (a2 == b2));
console.log("- Con === (sin conversión): " + (a2 === b2));

console.log("\nComparando " + a3 + " y " + b3 + ":");
console.log("- Con == (con conversión): " + (a3 == b3));
console.log("- Con === (sin conversión): " + (a3 === b3));

console.log("\nComparando " + a4 + " y " + b4 + ":");
console.log("- Con == (con conversión): " + (a4 == b4));
console.log("- Con === (sin conversión): " + (a4 === b4));

console.log('\nComparando "' + a5 + '" y ' + b5 + ':');
console.log("- Con == (con conversión): " + (a5 == b5));
console.log("- Con === (sin conversión): " + (a5 === b5));

let valor1 = 42;
let valor2 = "texto";
let valor3 = null;
let valor4 = undefined;
let valor5 = [];

console.log("=== ANALIZANDO: " + valor1 + " ===");
console.log("Tipo: " + typeof valor1);
console.log('Como string: "' + String(valor1) + '"');
console.log("Como número: " + Number(valor1));
console.log("Como booleano: " + Boolean(valor1));

let suma = 0; 
for (let i = 1; i <= 100; i++) { 
    suma += i; 
}
console.log("La suma de números del 1 al 100 es:", suma);
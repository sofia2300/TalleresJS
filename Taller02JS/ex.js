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
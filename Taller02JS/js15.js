// Ejercicio 15

/* Un usuario ingresa estos valores como texto: "15" y "8"

Mostrar qué pasa cuando:
• Se suman con el operador +
• Se restan con el operador -
• Se multiplican con el operador *
• Se dividen con el operador /
• Se convierten a número y luego se suman */

let valor1 = "15";
let valor2 = "8";

let suma = valor1 + valor2; // Concatenación de cadenas
let restan = valor1 - valor2;
let multiplican = valor1 * valor2;
let dividen = valor1/valor2;
let convertir = Number(valor1) + Number (valor2);

console.log(`Valores iniciales: ${valor1} y ${valor2}`);

console.log(`Valores: ${suma} \n ${restan} \n ${multiplican} \n ${dividen} \n ${convertir}`);
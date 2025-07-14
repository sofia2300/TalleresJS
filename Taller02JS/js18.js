// Ejercicio 18 

/* Tomar el valor "42" y convertirlo a:
• Número usando Number()
• Número usando el operador +
• Número usando parseInt()
• Booleano usando Boolean()
• Booleano usando !!

También tomar el número 0 y convertirlo a string y booleano. */

let valor = "42";
let numero1 = Number(valor);
let numero2 = +valor;
let numero3 = parseInt(valor);
let booleano1 = Boolean(valor);
let booleano2 = !!valor;



console.log(`Valor original: "${valor}"`);
console.log(`Convertido a número usando Number(): ${numero1}`);
console.log(`Usando operador +: ${numero2}`);
console.log(`Usando parseInt(): ${numero3}`);
console.log(`Convertido a booleano usando Boolean(): ${booleano1}`);
console.log(`Usando !!: ${booleano2}`);
console.log("");


// 0

let numeroCero = 0;
let stringCero = String(numeroCero);
let booleanoCero = Boolean(numeroCero);

console.log(`Valor original: ${numeroCero}`);
console.log(`Convertido a string: "${stringCero}"`);
console.log(`Convertido a booleano: ${booleanoCero}`);
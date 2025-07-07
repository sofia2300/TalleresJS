// Ejercicio 08: Analizador de Texto


let texto1 = "Aprender JavaScript es muy Divertido";
let textoLimpio = texto1.trim(); //trim() elimina los espacios en blanco al inicio y al final del texto

console.log(`Texto original: "${texto1}"`);
console.log(`Longitud del texto original: ${texto1.length}`);
console.log(`Texto limpio: "${textoLimpio}"`);
console.log(`En mayusculas: "${textoLimpio.toUpperCase()}"`);
console.log(`En minusculas: "${textoLimpio.toLowerCase()}"`);
console.log(`Primer caracter: "${textoLimpio[0]}"`);
console.log(`Último carácter: "${textoLimpio[textoLimpio.length - 1]}"`);


// Crear una calculadora que tome dos strings con números, los convierta y realice las 4 operaciones básicas.

let num1 = "9.5";
let num2 = "13.5";

let numero1 = parseFloat(num1);
let numero2 = parseFloat(num2);

console.log(`numeros ${numero1} y ${numero2}`);
console.log(`suma: ${(numero1 + numero2).toFixed(2)}`);
console.log(`resta: ${(numero1 - numero2).toFixed(2)}`);
console.log(`multiplicacion ${(numero1 * numero2).toFixed(2)}`);
console.log(`division ${(numero1 / numero2).toFixed(2)}`);

// es importante que ponga "$" porque es una plantilla literal, si no lo pongo no me sale el resultado
// toFixed(2) es para que me salga con dos decimales, si no lo pongo me sale con muchos decimales
// parseFloat() es para convertir un string a un número decimal, si no lo pongo me sale un NaN (Not a Number)
// parseInt() es para convertir un string a un número entero, si no lo pongo me sale un NaN (Not a Number)







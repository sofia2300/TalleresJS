
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Método por pasos
const pares = numeros.filter(num => num % 2 === 0);
const cubos = pares.map(num => num ** 3);

console.log("Números originales:", numeros);
console.log("Números pares:", pares);
console.log("Cubos de pares:", cubos);

// Método encadenado
const resultado = numeros
    .filter(num => num % 2 === 0)
    .map(num => num ** 3);

console.log("Resultado encadenado:", resultado);
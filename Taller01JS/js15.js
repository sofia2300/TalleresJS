// Comparar 5 == "5", 5 === "5", true == 1, true === 1.

console.log(5 =="5"); // true, porque compara el valor sin tener en cuenta el tipo
console.log(5 === "5"); // false, porque compara el valor y el tipo (número vs cadena)
console.log(true == 1); // true, porque true se convierte a 1 en la comparación
console.log(true === 1); // false, porque compara el valor y el tipo (booleano vs número)

// == compara solo el valor, mientras que === compara tanto el valor como el tipo de dato. Por eso, 5 == "5" es true, pero 5 === "5" es false. Lo mismo ocurre con true y 1: true == 1 es true, pero true === 1 es false porque son tipos diferentes (booleano vs número).
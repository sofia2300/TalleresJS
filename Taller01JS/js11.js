let valor1 = null;
let valor2 = undefined;
let valor3 = Number("abc")

console.log("null:", valor1);
console.log("undefined:", valor2);
console.log("NaN:", valor3); //¿por qué se pone NaN en el valor3? // porque Number("abc") no puede convertirse a un número, por lo que devuelve NaN (Not a Number)

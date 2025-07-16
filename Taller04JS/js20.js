// ej20

const cantidad = 15;
const fibonacci = [];
const numerosPares = [];
// Inicializar los primeros dos números
fibonacci[0] = 0;
fibonacci[1] = 1;
// Verificar si los primeros números son pares
if (fibonacci[0] % 2 === 0) {
    numerosPares.push(fibonacci[0]);
}
if (fibonacci[1] % 2 === 0) {
    numerosPares.push(fibonacci[1]);
}
// Generar el resto de la secuencia
for (let i = 2; i < cantidad; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    // Verificar si es par
    if (fibonacci[i] % 2 === 0) {
        numerosPares.push(fibonacci[i]);
    }
}
console.log("Secuencia Fibonacci:", fibonacci);
console.log("Números pares en la secuencia:", numerosPares);
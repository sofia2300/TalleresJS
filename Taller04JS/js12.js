// ejercicio 12

const numeros = [1, 2, 3, 7, 8, 12, 13, 14, 15, 20];
let secuenciaActual = [numeros[0]];
let mejorSecuencia = [numeros[0]];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] === numeros[i-1] + 1) {
        // Es consecutivo, agregarlo a la secuencia actual
        secuenciaActual.push(numeros[i]);
    } else {
        // No es consecutivo, verificar si la secuencia actual es la mejor
        if (secuenciaActual.length > mejorSecuencia.length) {
            mejorSecuencia = [...secuenciaActual];
        }
        // Iniciar nueva secuencia
        secuenciaActual = [numeros[i]];
    }
}

// Verificar la última secuencia
if (secuenciaActual.length > mejorSecuencia.length) {
    mejorSecuencia = [...secuenciaActual];
}

console.log(`Secuencia más larga: [${mejorSecuencia.join(", ")}] con ${mejorSecuencia.length} números consecutivos`);
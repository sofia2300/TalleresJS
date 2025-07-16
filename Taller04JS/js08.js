// 08

const temperaturas = [22, 25, 19, 27, 24, 21, 26];
let suma = 0;

// Calcular suma
for (let i = 0; i < temperaturas.length; i++) {
    suma += temperaturas[i];
}

// Calcular promedio
let promedio = suma / temperaturas.length;

// Contar días por encima del promedio
let diasEncima = 0;
for (let i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > promedio) {
        diasEncima++;
    }
}

console.log("Promedio de temperatura:", promedio.toFixed(2) + "°C");
console.log("Días por encima del promedio:", diasEncima);
// Ejercicio 17

/* Comparar estos pares de valores usando == y === para entender la diferencia:
• 5 y "5"
• true y 1
• false y 0
• null y undefined
• "" y 0

Para cada par, mostrar el resultado de ambas comparaciones.*/

let valores = {
    par1: { a: 5, b: "5" },
    par2: { a: true, b: 1 },
    par3: { a: false, b: 0 },
    par4: { a: null, b: undefined },
    par5: { a: "", b: 0 }
}

for (let clave in valores) {
    let par = valores[clave];
    console.log(`Comparando ${clave}:`);
    console.log(` - Con Conversión: ${par.a} == ${par.b}: ` + (par.a == par.b));
    console.log(` - Sin Conversión: ${par.a} === ${par.b}: ` + (par.a === par.b));
    console.log(""); // Línea en blanco para mejor legibilidad
}
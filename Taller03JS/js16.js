// Ejercicio 16: Buscar número especifico

/* Utilice un ciclo for del 1 al 50. Cuando encuentre el número 23, muestre "¡Encontrado!" y salga del ciclo usando break */

for (let i = 1; i <= 50; i++) { 
    if (i === 23) { 
        console.log("¡Encontrado el número 23!"); 
        break; 
    } 
    console.log(i); 
}

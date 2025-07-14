// Ejercico 06

/* Tiene el número 128. Utilice un ciclo while para dividirlo entre 2 hasta que sea menor o igual a 1. Cuente cuántas divisiones hizo. */

let numero = 128;
let divisiones = 0;

while (numero > 1) {
    numero = numero / 2;
    divisiones++;
    console.log(`Divisiones ${divisiones}: ${numero}`);
}

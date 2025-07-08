// Ejercicio 10

let nombreCompleto = "Juan Carlos Pérez Gonzáles";

let primerNombre = nombreCompleto.Completo.substring(0, 4);
let segundoNombre = nombreCompleto.substring(5, 11);
let apellidos = nombreCompleto.substring(13);
let ultimas8 = nombreCompleto.slice(-8);
let soloPerez = nombreCompleto.substring(13, 18) 

console.log(`primerNombre ${primerNombre}`);
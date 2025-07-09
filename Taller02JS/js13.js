// Ejercicio 13

/* Crear mensajes personalizados usando estos datos:
• Nombre: "María"
• Edad: 25
• Ciudad: "Barcelona"
• Profesión: "Diseñadora"

Generar estos mensajes usando template literals:
• Saludo personal
• Información completa
• Mensaje de años hasta jubilación (65 años) */


let nombre =  "Maria";
let edad = 25;
let ciudad =  "Barcelona";
let profesion = "Diseñadora";

let saludo = `¡Hola, ${nombre} es un gusto que estés aquí!`;

let informacionCompleta = `Su nombre es ${nombre}, tiene ${edad} años, vive en ${ciudad} y trabaja como ${profesion}.`;

let añosHastaJubilacion = `Te faltan ${65 - edad} años para tu jubilación. ¡Animo!`;

console.log (`${saludo} \n${informacionCompleta} \n${añosHastaJubilacion}`);





// Convertir "12.34abc" usando parseInt() y parseFloat().

let text = "12.34abc";
console.log("parseInt():", parseInt(text));    // Devuelve 12
console.log("parseFloat():", parseFloat(text)); // Devuelve 12.34
// parseInt() convierte la cadena a un número entero, ignorando los caracteres no numéricos al final.
// parseFloat() convierte la cadena a un número de punto flotante, considerando los números decimales hasta que encuentra un carácter no numérico.
console.log("Number():", Number(text)); // Devuelve NaN, porque "12.34abc" no es un número válido completo.
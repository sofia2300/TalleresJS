
// Ejercicio 04
/* Convertir el número decimal 42 a:
• Sistema binario (base 2)
• Sistema octal (base 8)
• Sistema hexadecimal (base 16)*/

let numero = 42;
let binario = numero.toString(2);
let octal = numero.toString(8);
let hexadecimal = numero.toString(16);

console.log(`Número: ${numero}`);
console.log(`Número en binario: ${binario}`);
console.log(`Número en octal: ${octal}`);
console.log(`Número en hexadecimal: ${hexadecimal}`);


// toString() es un método que convierte un número a una cadena de texto en la base especificada.
// El número 42 en binario es 101010, en octal es 52 y en hexadecimal es 2A.
// El método toString() se usa con el número y se le pasa como argumento la base a la que se quiere convertir el número.
// Por ejemplo, para convertir el número 42 a binario se usa numero.toString(2), para octal se usa numero.toString(8) y para hexadecimal se usa numero.toString(16).
// El resultado se almacena en las variables binario, octal y hexadecimal, y luego se imprimen en la consola usando console.log().
// El resultado se muestra en la consola con un mensaje que indica el número original y su representación en las diferentes bases.
// El método toString() es muy útil para convertir números a diferentes bases y se puede usar para cualquier número entero en JavaScript.
// Además, el método toString() también se puede usar para convertir números a cadenas de texto.


// Ejercicio 19 

console.log("true + true = " + (true + true)); // Esto es 2 porque el valor de true es 1, por tanto la consola suma true + true, por tanto refleja 2 en la consola.
console.log('"5" - "2" = ' + ("5" - "2")); // Esto es 3 porque el valor de "5" para la consola es "5", si bien es un string, la consola busca convertirlo a numero para realizar la resta con el "2", por tanto refleja 3 en la consola.
console.log('"5" + 2 = ' + ("5" + 2)); // Aqui muestra "52" porque "5" es un string y 2 un número, por tanto la consola refleja la concatenación de ambos, por tanto refleja "52" en la consola.
console.log('"5" * "2" = ' + ("5" * "2")); // esto es 10, igual que el caso más arriba, pues la consola convierte el estring de ambos en número, para realizar la multiplicacion, por tanto refleja 10 en la consola.
console.log("[] + [] = " + '"' + ([] + []) + '"'); // Esto es "" porque la consola convierte los arrays vacios en strings, por tanto refleja "" en la consola.
console.log("[] + {} = " + '"' + ([] + {}) + '"'); // Esto es "[object Object]" porque la consola convierte el array vacio en string y el objeto vacio en string, por tanto refleja "[object Object]" en la consola, pues un array es un objeto y un objeto es un objeto.
console.log('"10" - 5 + "3" = ' + ("10" - 5 + "3")) // Esto es "53" porque la consola convierte el string "10" en número para realizar la resta con 5, obteniendo 5, y luego concatena el string "3", por tanto refleja "53" en la consola.
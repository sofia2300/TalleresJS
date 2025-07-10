// Ejercicio 12

/* Procesar esta lista de compras como texto: "pan,leche,huevos,queso,manzanas"

Realizar las siguientes tareas:
• Convertirla en elementos separados
• Contar cuántos productos hay
• Mostrar cada producto en una línea
• Crear una nueva lista separada por " - " */

let listaCompras = "pan,leche,huevos,queso,manzanas";
// Convertirla en elementos separados

let productos = listaCompras.split(","); // split convierte el texto en un array de productos

console.log(`Lista original: ${listaCompras}`);
console.log(`Numero de productos: ${productos.length}`);
console.log("productos:");
console.log(`1. ${productos[0]}`); // DUDA EN ESTA PARTE 
console.log(`2. ${productos[1]}`);
console.log(`3. ${productos[2]}`);
console.log(`4. ${productos[3]}`);
console.log(`5. ${productos[4]}`);

let listaConGuiones = productos.join("-"); // join convierte el array de productos en un texto separado por " - "

console.log(`Lista separada por guiones: ${listaConGuiones}`);


//Join convierte un array en un texto, separando los elementos por el texto que le pasemos como argumento
//Por ejemplo, si tenemos un array ["a", "b", "c"] y hacemos join("-"), nos devolverá "a-b-c".
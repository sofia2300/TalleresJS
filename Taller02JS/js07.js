// Ejercico 07

/*Analizar estos valores: 42, "123", NaN, 3.14, "texto", Infinity, 0

Para cada valor, determinar si:
• Es de tipo número
• Es un número finito
• Es un número entero*/

let valores = [42, "123", NaN, 3.14, "texto", Infinity, 0];

for (let i = 0; i < valores.length; i++) {
    let valor = valores[i];
    console.log(`Analizando: ${valor}`);
    console.log(`Es un número: ${typeof valor === "number"}`);
    console.log(`Es finito: ${Number.isFinite(valor)}`);
    console.log(`Es entero: ${Number.isInteger(valor)}`);
    console.log('-----------------------------');
}



// console.log(`Analizando: ${valor1}`);
// console.log(`Es un número: ${typeof valor1 === "number"}`);
// console.log(`Es finito: ${isFinite(valor1)}`);
// console.log(`Es entero: ${Number.isInteger(valor1)}`);

// console.log(`Analizando: ${valor2}`);
// console.log(`Es un número: ${typeof valor2 === "number"}`);
// console.log(`Es finito: ${Number.isFinite(valor2)}`);
// console.log(`Es entero: ${Number.isInteger(valor2)}`);

// console.log(`Analizando ${valor3}`);
// console.log(`Es un número: ${typeof valor3 === "number"}`);
// console.log(`Es finito: ${Number.isFinite(valor3)}`);
// console.log(`Es entero: ${Number.isInteger(valor3)}`);

// console.log(`Analizando: ${valor4}`);
// console.log(`Es un número: ${typeof valor4 === "number"}`);
// console.log(`Es finito: ${Number.isFinite(valor4)}`);
// console.log(`Es entero: ${Number.isInteger(valor4)}`);

// console.log(`Analizando: ${valor5}`);
// console.log(`Es un número: ${typeof valor5 === "number"}`);
// console.log(`Es finito: ${Number.isFinite(valor5)}`);
// console.log(`Es entero: ${Number.isInteger(valor5)}`);

// console.log(`Analizando: ${valor6}`);
// console.log(`Es un número: ${typeof valor6 === "number"}`); 
// console.log(`Es finito: ${Number.isFinite(valor6)}`);
// console.log(`Es entero: ${Number.isInteger(valor6)}`);
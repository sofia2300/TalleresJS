// Ejercicio 20


let valores = {
    valor1: 42,
    valor2: "texto",
    valor3: null,
    valor4: undefined,
    valor5: [],
}

for (let clave in valores) {
    let valor = valores[clave];
    console.log(`${valor}`);
    console.log(`tipo: ${typeof (valor)}`);
    console.log(`como String: ${String(valor)}`)
    console.log(`Como número: ${Number(valor)}`);
    console.log(`Como booleano: ${Boolean(valor)}`);
    console.log(`------------------------------------`)
}






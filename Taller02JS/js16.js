// Ejercicio 16 

/* Analizar estos valores para ver si JavaScript los considera verdaderos o falsos:
• 0
• ""
• "0"
• "false"
• null
• undefined
• []
• {}
Para cada uno, mostrar si es verdadero o falso usando el operador ! */


let valores = {
    valor1: 0,
    valor2: "",
    valor3: "0",
    valor4: "false",
    valor5: null,
    valor6: undefined,
    valor7: [],
    valor8: {}
}

for (let clave in valores) {
    let valor=valores[clave];
    console.log(`El valor: ${clave} es: ${!!valor ? "verdadero" : "falso"}`);
}

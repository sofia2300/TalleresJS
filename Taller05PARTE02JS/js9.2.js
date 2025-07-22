
function conLog(func) {
    return function(...args) {
        console.log(`Ejecutando función con argumentos: [${args}]`);
        const resultado = func(...args);
        console.log(`Resultado: ${resultado}`);
        return resultado;
    };
}


function sumar(a, b) {
    return a + b;
}


const sumarConLog = conLog(sumar);


sumarConLog(3, 4); // Logs + retorna 7
sumarConLog(10, 5); // Logs + retorna 15

// También funciona con arrow functions
const multiplicar = (a, b) => a * b;
const multiplicarConLog = conLog(multiplicar);
multiplicarConLog(3, 7); // Logs + retorna 21
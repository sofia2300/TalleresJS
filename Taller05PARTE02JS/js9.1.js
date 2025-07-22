
function crearMultiplicador(factor) {
    return function(numero) {
        return numero * factor;
    };
}

const multiplicarPor2 = crearMultiplicador(2);
const multiplicarPor3 = crearMultiplicador(3);
const multiplicarPor10 = crearMultiplicador(10);


console.log(multiplicarPor2(5)); // 10
console.log(multiplicarPor3(4)); // 12
console.log(multiplicarPor10(7)); // 70

const crearMultiplicadorArrow = factor => numero => numero * factor;
const multiplicarPor5 = crearMultiplicadorArrow(5);
console.log(multiplicarPor5(6)); // 30
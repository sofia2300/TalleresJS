// ej 17

const inicio = 100;
const fin = 150;
const palindromos = [];
for (let num = inicio; num <= fin; num++) {
    // Convertir número a string para facilitar la comparación
    let numStr = num.toString();
    let esPolindromo = true;
    // Verificar si es palíndromo comparando caracteres
    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            esPolindromo = false;
            break;
        }
    }
    if (esPolindromo) {
        console.log(`Verificando ${num}: SÍ es palíndromo`);
        palindromos.push(num);
    }
}
console.log("Palíndromos encontrados:", palindromos);
const contarRegresivo = function contar(n) {
    if (n <= 0) {
        return [];
    }
    return [n].concat(contar(n - 1));
};

// Pruebas
console.log(contarRegresivo(5)); // [5, 4, 3, 2, 1]
console.log(contarRegresivo(3)); // [3, 2, 1]

function crearContador(valorInicial = 0) {
    let contador = valorInicial; // Variable privada

    return {
        incrementar: function() {
            contador++;
            return contador;
        },
        decrementar: function() {
            contador--;
            return contador;
        },
        obtenerValor: function() {
            return contador;
        },
        reset: function() {
            contador = valorInicial;
            return contador;
        }
    };
}


const contador1 = crearContador();
const contador2 = crearContador(10);

// Pruebas
console.log(contador1.obtenerValor()); // 0
console.log(contador1.incrementar()); // 1
console.log(contador1.incrementar()); // 2

console.log(contador2.obtenerValor()); // 10
console.log(contador2.decrementar()); // 9

// Los contadores son independientes
console.log(contador1.obtenerValor()); // 2 (sin cambios)
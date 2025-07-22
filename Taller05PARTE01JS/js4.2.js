function crearCuentaBancaria(saldoInicial) {
    let saldo = saldoInicial;
    
    return {
        depositar: function(cantidad) {
            saldo += cantidad;
        },
        retirar: function(cantidad) {
            saldo -= cantidad;
        },
        consultarSaldo: function() {
            return saldo;
        }
    };
}

// Pruebas
const cuenta = crearCuentaBancaria(1000);
console.log(cuenta.consultarSaldo()); 
cuenta.depositar(500);
console.log(cuenta.consultarSaldo()); 
cuenta.retirar(200);
console.log(cuenta.consultarSaldo()); 
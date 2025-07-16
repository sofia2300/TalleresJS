// Ejercicio 05

/*  */

const inventario = {
    laptops: 5,
    mouse: 25,
    teclados: 8,
    monitores: 15,
    cables: 3
};

for (let producto in inventario) {
    let cantidad = inventario[producto];
    if (cantidad < 10) {
        console.log(`REABASTECER: ${producto} (${cantidad})`);
    } else {
        console.log(`BIEN SURTIDO: ${producto} (${cantidad})`);
    }
}
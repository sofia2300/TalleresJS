// Ejercicio 13

const inventario = {
    manzanas: 50,
    bananos: 30,
    peras: 2,
    mangos: 99,
    fresas: 33,
}

for (prop in inventario) {
    console.log(`La cantidad de ${prop}, es ${inventario[prop]}`)
}
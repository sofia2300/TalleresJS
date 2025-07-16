// Ej 19

let arr = [64, 34, 25, 12, 22, 11, 90];
let n = arr.length;
console.log("Array inicial:", arr);
for (let i = 0; i < n - 1; i++) {
    let intercambios = false;
    for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Intercambiar elementos
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            intercambios = true;
        }
    }
    console.log(`Pasada ${i + 1}:`, [...arr]);
    // Si no hubo intercambios, el array ya está ordenado
    if (!intercambios) {
        break;
    }
}
console.log("Array ordenado:", arr);
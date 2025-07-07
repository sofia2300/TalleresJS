// Usar isNaN() para verificar: 42, "42", "abc", NaN.

console.log("isNaN(42):", isNaN(42));          // Devuelve false
console.log("isNaN('42'):", isNaN("42"));      // Devuelve false
console.log("isNaN('abc'):", isNaN("abc"));    // Devuelve true
console.log("isNaN(NaN):", isNaN(NaN));      // Devuelve true
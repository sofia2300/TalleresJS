// Ejercicio 111

let textoOriginal = "Me gusta Python. Python es facil. Python es rapido";

let paso1 = textoOriginal.replaceAll("Python", "JavaScript");

let paso2 = paso1.replace("facil", "fácil");

let correccion = paso2.replace("rapido", "rápido");

console.log(`Texto original: ${textoOriginal} \nTexto corregido: ${correccion}`);




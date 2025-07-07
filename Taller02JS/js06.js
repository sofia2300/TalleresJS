
let circuloRadio = 7.5;
let areaCirculo = Math.PI * Math.pow(circuloRadio, 2); // Area = PI * r^2
let perimetroCirculo = 2 * Math.PI * circuloRadio;

console.log(`El área del círculo con radio ${circuloRadio} es: ${areaCirculo.toFixed(2)}`);
console.log(`El perímetro del círculo con radio ${circuloRadio} es: ${perimetroCirculo.toFixed(2)}`);


//Math.PI es una constante que representa el valor de pi (π) en JavaScript.//Math.pow(base, exponente) es una función que eleva la base al exponente especificado. En este caso, se usa para calcular el cuadrado del radio del círculo (r^2).
//El área del círculo se calcula multiplicando pi por el cuadrado del radio (PI * r^2).
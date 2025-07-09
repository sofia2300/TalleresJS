// Ejercicio 14

/* Formatear estos códigos:
• Número de factura: "7" → debe quedar "F-007"
• Código de producto: "42" → debe quedar "PROD-0042"
• ID de usuario: "123" → debe quedar "USER-00123"

También crear un separador de 30 guiones y repetir "¡OFERTA!" 3 veces. */

let numFactura = "7";
let codProducto = "42";
let idUsuario = "123";

let facturaFormateada = `Su factura es: F-${numFactura.padStart(3, 0)}`
let productoFormateado = `Su producto es: PROD-${codProducto.padStart(4, 0)}`;
let usuarioFormateado = `Su usuario es: USER-${idUsuario.padStart(5, 0)}`;
let separador = "-".repeat(30);
let repetir = "¡OFERTA!".repeat(3);

console.log(`${facturaFormateada} \n ${productoFormateado} \n ${usuarioFormateado} \n ${separador} \n ${repetir}`);


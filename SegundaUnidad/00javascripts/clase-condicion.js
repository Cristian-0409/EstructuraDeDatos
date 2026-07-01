
let edad = 18;
let diaSemana = "miercoles"; 
let tieneTicket = true;


console.log("--- Validación de Categoría de Edad ---");

if (edad < 13) {
    console.log("Categoría: Infantil.");
} else if (edad >= 13 && edad < 18) {
    console.log("Categoría: Adolescente.");
} else if (edad >= 18 && edad < 65) {
    console.log("Categoría: Adulto.");
} else {
    console.log("Categoría: Adulto Mayor (Descuento Especial).");
}

console.log("--- Promociones por Día ---");

switch (diaSemana) {
    case "lunes":
        console.log("Promoción: 2x1 en entradas.");
        break;
    case "miercoles":
        console.log("Promoción: Palomitas gratis.");
        break;
    case "sabado":
    case "domingo":
        console.log("Tarifa de fin de semana (Precio regular).");
        break;
    default:
        console.log("No hay promociones especiales hoy.");
        break;
}

console.log("--- Control de Acceso ---");

let estadoAcceso = (edad >= 18 && tieneTicket) ? "Permitido ingresar a la sala" : "No puede ingresar";
console.log("Estado de sala:", estadoAcceso);
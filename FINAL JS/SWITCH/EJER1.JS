let dia = "Lunes";

switch (dia) {
  case "Lunes":
    console.log("¡Comienzo de semana!");
    break;
  case "Martes":
  case "Miércoles":
  case "Jueves":
    console.log("Estamos a mitad de semana.");
    break;
  case "Viernes":
    console.log("¡Viernes al fin!");
    break;
  case "Sábado":
  case "Domingo":
    console.log("¡Fin de semana!");
    break;
  default:
    console.log("Día no reconocido.");
}




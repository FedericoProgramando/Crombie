var texto = "LaCrombiNeTa";
var letrasMayusculas = "";

for (var i = 0; i < texto.length; i++) {
  var letra = texto.charAt(i);
  if (letra === letra.toUpperCase() && letra !== letra.toLowerCase()) {
    letrasMayusculas += letra;
  }
}

console.log(letrasMayusculas);
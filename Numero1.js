function validarNumeroEntero(numero) {
    if (!Number.isInteger(numero)) {
        throw new error("El numero recibido no es un número entero");
    }
    
    return numero;
  }
  
  try {
    var miNumero = 20; 
    var resultado = validarNumeroEntero(miNumero);
    console.log(resultado); 
  } catch (error) {
    console.error(error.message);
  }
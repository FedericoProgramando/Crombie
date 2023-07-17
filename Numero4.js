function esPalindromo(texto) {
    const textoFormateado = texto.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    return textoFormateado === textoFormateado.split('').reverse().join('');
  }

const texto1 = "¿Acaso hubo buhos aca?";
console.log(esPalindromo(texto1));

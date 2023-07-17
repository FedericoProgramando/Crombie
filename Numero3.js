function calcularPromedioRango(arreglo, inicio, fin) {
    if (inicio < 0 || fin >= arreglo.length || inicio > fin) {
      throw new Error("Rango inválido");
    }
  
    const subarreglo = arreglo.slice(inicio, fin + 1);
  
    const suma = subarreglo.reduce((acumulador, valor) => acumulador + valor, 0);
  
    const promedio = suma / subarreglo.length;
  
    return promedio;
  }

  const miArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const inicio = 2;
  const fin = 6;

try {
  const promedioRango = calcularPromedioRango(miArray, inicio, fin);
  console.log(promedioRango);
} catch (error) {
  console.error(error.message);
}

  
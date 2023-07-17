function multiplicarArray(array) {
    const copiaArray = array.map(elemento => elemento *= 5);
  
    return copiaArray;
}

const miArray = [2, 5, 10, 4, 6];
const arrayMultiplicado = multiplicarArray(miArray);

console.log(arrayMultiplicado);
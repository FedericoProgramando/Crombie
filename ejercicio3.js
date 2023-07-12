const array = [3, 23, 11, 15, 6, 19, 32, 9];

for (let i = 1; i < array.length; i++) {
  const currentValue = array[i];
  let j = i - 1;

  while (j >= 0 && array[j] > currentValue) {
    array[j + 1] = array[j];
    j--;
  }

  array[j + 1] = currentValue;
}

console.log("Arreglo ordenado:", array);
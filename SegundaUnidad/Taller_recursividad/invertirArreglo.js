function invertirArreglo(arr, inicio, fin) {
  if (inicio >= fin) return;

  let temp = arr[inicio];
  arr[inicio] = arr[fin];
  arr[fin] = temp;
  
  return invertirArreglo(arr, inicio + 1, fin - 1);
}
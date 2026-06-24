function invertirArreglo(arr, inicio, fin) {
  // Caso Base: Si los índices se cruzan o coinciden, el arreglo ya está invertido [cite: 63]
  if (inicio >= fin) return;
  
  // Intercambio de elementos (In-Place) [cite: 64]
  let temp = arr[inicio];
  arr[inicio] = arr[fin];
  arr[fin] = temp;
  
  // Caso Recursivo: Avanzar los punteros hacia el centro [cite: 64]
  return invertirArreglo(arr, inicio + 1, fin - 1);
}
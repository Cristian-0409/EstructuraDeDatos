function factorialCola(n, acumulador = 1) {

  if (n <= 1) return acumulador;
 
  return factorialCola(n - 1, n * acumulador); 
}
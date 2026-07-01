function sumaDigitos(n) {
  if (n === 0) return 0;

  return (n % 10) + sumaDigitos(Math.floor(n / 10));
}
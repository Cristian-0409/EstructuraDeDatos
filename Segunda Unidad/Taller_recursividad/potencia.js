function potencia(base, exponente) {
  // Caso Base: Cualquier número elevado a la potencia 0 es 1 [cite: 45, 54]
  if (exponente === 0) return 1;
  
  // Calculamos la mitad recursivamente para no duplicar llamadas en memoria
  let mitad = potencia(base, Math.floor(exponente / 2));
  
  // Si el exponente es par[cite: 45]:
  if (exponente % 2 === 0) {
    return mitad * mitad;
  } else { 
    // Si el exponente es impar[cite: 45]:
    return base * mitad * mitad;
  }
}
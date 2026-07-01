function potencia(base, exponente) {
  if (exponente === 0) return 1;
  
  let mitad = potencia(base, Math.floor(exponente / 2));

  if (exponente % 2 === 0) {
    return mitad * mitad;
  } else { 
    return base * mitad * mitad;
  }
}
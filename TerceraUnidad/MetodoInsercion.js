function ordenamientoInsercion(arr) {
    let n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let elementoActual = arr[i];
        let j = i - 1;

        // Desplaza los elementos del array que son mayores que el elementoActual
        // a una posición adelante de su posición actual
        while (j >= 0 && arr[j] > elementoActual) {
            arr[j + 1] = arr[j];
            j--;
        }
        // Coloca el elementoActual en su lugar correcto
        arr[j + 1] = elementoActual;
    }
    return arr;
}

// Ejemplo de uso:
const miArray = [12, 11, 13, 5, 6];
console.log("Array ordenado:", ordenamientoInsercion(miArray)); 
// Resultado: [5, 6, 11, 12, 13]
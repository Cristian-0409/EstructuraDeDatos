function busquedaBinaria(arr, elementoBuscar) {
    let izquierda = 0;
    let derecha = arr.length - 1;

    while (izquierda <= derecha) {
        // Encontramos el punto medio
        let medio = Math.floor((izquierda + derecha) / 2);

        // Si el elemento está en el medio, devolvemos su índice
        if (arr[medio] === elementoBuscar) {
            return medio; 
        }

        // Si el elemento es mayor, ignoramos la mitad izquierda
        if (arr[medio] < elementoBuscar) {
            izquierda = medio + 1;
        } 
        // Si el elemento es menor, ignoramos la mitad derecha
        else {
            derecha = medio - 1;
        }
    }

    // Si salimos del ciclo, significa que el elemento no estaba en el array
    return -1;
}

// Ejemplo de uso (usando el array ya ordenado):
const arrayOrdenado = [5, 6, 11, 12, 13];
const elemento = 12;

const resultadoIndice = busquedaBinaria(arrayOrdenado, elemento);

if (resultadoIndice !== -1) {
    console.log(`Elemento encontrado en el índice: ${resultadoIndice}`);
} else {
    console.log("El elemento no existe en el array.");
}
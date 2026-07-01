class SistemaVentasCircular {
    constructor(capacidad = 3) {
        this.MAX = capacidad;
        // Creamos un arreglo estático con espacios fijos asignados en memoria
        this.ventas = new Array(this.MAX).fill(null);
        
        // Punteros de control indexados
        this.frente = -1;
        this.fin = -1;
        this.tamanoActual = 0;
    }

    // Operación Encolar (Enqueue) con validación estricta de desbordamiento
    registrarVenta(producto, precio, categoria) {
        if (this.tamanoActual === this.MAX) {
            console.log(`❌ ERROR: Buffer Lleno. No se pudo registrar "${producto}". Desencole para liberar RAM.`);
            return false;
        }

        // Si la cola está completamente vacía, inicializamos el frente
        if (this.frente === -1) {
            this.frente = 0;
        }

        // Aritmética Modular: El puntero avanza de forma circular
        this.fin = (this.fin + 1) % this.MAX;
        
        this.ventas[this.fin] = {
            producto,
            precio,
            categoria,
            fecha: new Date()
        };

        this.tamanoActual++;
        console.log(`✅ Venta registrada: ${producto} ($${precio}) en índice [${this.fin}]. Tamaño actual: ${this.tamanoActual}/${this.MAX}`);
        return true;
    }

    // Operación Desencolar (Dequeue): Extrae el elemento más antiguo para procesarlo
    procesarSiguienteVenta() {
        if (this.tamanoActual === 0) {
            console.log("⚠️ El buffer está vacío. No hay transacciones pendientes por analizar.");
            return null;
        }

        const ventaProcesada = this.ventas[this.frente];
        
        // Liberamos el slot (reciclaje físico de memoria)
        this.ventas[this.frente] = null; 

        console.log(`➔ Desencolando para análisis: "${ventaProcesada.producto}" desde el índice [${this.frente}]`);

        // Ajustamos el frente usando aritmética modular
        if (this.tamanoActual === 1) {
            // Si era el último elemento, reiniciamos los punteros al estado inicial
            this.frente = -1;
            this.fin = -1;
        } else {
            this.frente = (this.frente + 1) % this.MAX;
        }

        this.tamanoActual--;
        return ventaProcesada;
    }

    // Módulo analítico: Calcula el total basándose únicamente en lo que está en el buffer activo
    calcularTotalEnBuffer() {
        if (this.tamanoActual === 0) return 0;
        
        let total = 0;
        let i = this.frente;
        let conteo = 0;

        // Recorremos circularmente desde 'frente' hasta procesar todos los elementos activos
        while (conteo < this.tamanoActual) {
            total += this.ventas[i].precio;
            i = (i + 1) % this.MAX;
            conteo++;
        }
        return total;
    }

    // Módulo analítico: Agrupa las estadísticas por categorías de forma circular
    ventasPorCategoriaEnBuffer() {
        const acc = {};
        if (this.tamanoActual === 0) return acc;

        let i = this.frente;
        let conteo = 0;

        while (conteo < this.tamanoActual) {
            const v = this.ventas[i];
            acc[v.categoria] = (acc[v.categoria] || 0) + v.precio;
            i = (i + 1) % this.MAX;
            conteo++;
        }
        return acc;
    }
}

// ==========================================
// SIMULACIÓN PASO A PASO PARA EL VIDEO
// ==========================================

const sistema = new SistemaVentasCircular(3); // Buffer limitado a 3 registros

console.log("--- PASO 1: Llenado controlado del Buffer ---");
sistema.registrarVenta("Laptop", 1200, "Tecnología");
sistema.registrarVenta("Teclado", 50, "Tecnología");
sistema.registrarVenta("Silla", 150, "Muebles");

console.log("\n--- PASO 2: Provocar deliberadamente un desborde (Overflow) ---");
// El sistema debe rechazar este ingreso porque la capacidad máxima es 3
sistema.registrarVenta("Monitor", 300, "Tecnología"); 

console.log("\n--- PASO 3: Ejecución de Métodos Analíticos Estadísticos ---");
console.log("Total en Buffer Activo:", sistema.calcularTotalEnBuffer());
console.log("Por categoría:", sistema.ventasPorCategoriaEnBuffer());

console.log("\n--- PASO 4: Desencolar (Liberar espacio bajo principio FIFO) ---");
// Procesamos el artículo más antiguo (la Laptop que entró primero)
sistema.procesarSiguienteVenta(); 

console.log("\n--- PASO 5: Demostración del Reciclaje Circular de Memoria ---");
// Como liberamos el índice [0] al despachar la Laptop, el monitor ahora sí puede ingresar.
// ¡Observa en la consola cómo el puntero dará la vuelta hacia el índice 0!
sistema.registrarVenta("Monitor", 300, "Tecnología");

console.log("\n--- PASO 6: Estado Final del Buffer ---");
console.log("Nuevo Total en Buffer:", sistema.calcularTotalEnBuffer());
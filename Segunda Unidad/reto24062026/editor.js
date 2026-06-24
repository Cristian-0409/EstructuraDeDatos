class Pila {
    constructor() {
        this.items = [];
    }

    push(elemento) {
        this.items.push(elemento);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    verTodos() {
        return [...this.items];
    }
}

class EditorTexto {
    constructor() {
        this.historialAcciones = new Pila();
    }

    escribir(texto) {
        this.historialAcciones.push(texto);
        console.log(`[Escribiendo]: "${texto}"`);
    }

    deshacer() {
        console.log("\n[Acción]: El usuario presionó Ctrl + Z (Deshacer)");
        const accionEliminada = this.historialAcciones.pop();
        
        if (accionEliminada === null) {
            console.log("✗ Nada que deshacer. El documento está vacío.");
        } else {
            console.log(`✔ Se deshizo la última acción: "${accionEliminada}"`);
        }
    }

    mostrarTextoActual() {
        const palabras = this.historialAcciones.verTodos();
        console.log("--------------------------------====================");
        console.log("📝 TEXTO ACTUAL EN PANTALLA:");
        if (palabras.length === 0) {
            console.log("(Lienzo en blanco...)");
        } else {
            console.log(palabras.join(" "));
        }
        console.log("--------------------------------====================\n");
    }
}

class Programa {
    static main() {
        console.log("=== [SISTEMA DE EDITOR DE TEXTO INICIADO - CONTROL DE DESHACER] ===\n");
        
        const miEditor = new EditorTexto();

        miEditor.escribir("Hola");
        miEditor.escribir("mundo,");
        miEditor.escribir("estoy");
        miEditor.escribir("programando");
        miEditor.escribir("en JavaScript.");
        miEditor.mostrarTextoActual();
        miEditor.deshacer(); 
        miEditor.mostrarTextoActual();
        miEditor.deshacer();
        miEditor.mostrarTextoActual();
        miEditor.escribir("estructuras de datos.");
        miEditor.mostrarTextoActual();
        
        console.log("=== [FIN DEL FLUJO DE TRABAJO - CONTROL DE VERSIONES CORRECTO] ===");
    }
}

Programa.main();
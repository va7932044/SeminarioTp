class Contador {

    static totalContado = 0; // Propiedad estática para llevar la cuenta global de todas las instancias
  
    constructor(Viviana) {
      this.nombre = Viviana;  // Nombre de la persona responsable del conteo
      this.cuenta = 0;       // Cada instancia inicia su cuenta individual en 0
    }
  
    // Método para incrementar tanto la cuenta individual como la cuenta global
    contar() {
      this.cuenta++;
      Contador.totalContado++;
    }
  
    // Método para obtener la cantidad contada por la instancia (cuenta individual)
    obtenerCuentaIndividual() {
      return this.cuenta;
    }
  
    // Método estático para obtener la cantidad contada por todos los contadores (cuenta global)
    static obtenerCuentaGlobal() {
      return Contador.totalContado;
    }
  
    // Método para obtener el nombre del responsable
    obtenerResponsable() {
      return this.Vivianaiviana;
    }
  }
  
  // Ejemplo de uso
  const contadorViviana = new Contador("Viviana");
  contadorViviana.contar();
  contadorViviana.contar();
  console.log(contadorViviana.obtenerCuentaIndividual()); 
  console.log(Contador.obtenerCuentaGlobal()); 
  
  const contadorJaneth = new Contador("Janeth");
  contadorJaneth.contar();
  console.log(contadorJaneth.obtenerCuentaIndividual()); 
  console.log(Contador.obtenerCuentaGlobal());
  
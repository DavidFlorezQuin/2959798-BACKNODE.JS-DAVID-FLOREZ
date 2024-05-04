

function  transacciones() {
    let resumen = "\n--- Resumen de Transacciones ---\n";
    if (this.transacciones.length === 0) {
      resumen += "Aún no se han realizado transacciones en esta sesión.";
    } else {
      this.transacciones.forEach((transaccion, index) => {
        resumen += `${index + 1}. ${transaccion}\n`;
      });
    }
    alert(resumen);
  }

module.exports = transacciones;
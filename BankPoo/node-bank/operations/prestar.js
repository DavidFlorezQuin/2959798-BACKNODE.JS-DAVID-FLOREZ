function prestar(montoPrestar, interes) {
    const montoTotal = montoPrestar * interes;
    if (montoPrestar <= this.saldoInicial) { // Verificar si se puede prestar
        alert(
          "Realizas un préstamo de $" +
          montoPrestar +
          ". El total a pagar con intereses es de $" +
          montoTotal
        );
        this.saldoInicial -= montoPrestar; // Restar el préstamo al saldo inicial
        this.transacciones.push(`Préstamo de $${montoPrestar}`); // Registrar la transacción
    } else {
        alert("No se puede realizar el préstamo. El saldo es insuficiente.");
    }
  }

  module.exports = prestar; 
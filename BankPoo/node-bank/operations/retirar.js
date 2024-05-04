function retirar(vRetirar) {
  if (vRetirar <= this.saldoInicial) {
    this.saldoInicial -= vRetirar;
    alert(
      "Retiraste $" +
      vRetirar +
      ". El saldo actual es de $" +
      this.saldoInicial
    );
    this.transacciones.push(`Retiro de $${vRetirar}`); // Registrar la transacción
  } else {
    alert("El saldo es insuficiente");
  }
}

module.exports = retirar; 
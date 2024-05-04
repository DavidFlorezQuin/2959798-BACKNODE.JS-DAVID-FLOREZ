function depositar(montoDepositar, descuentoDepositado) {
    this.saldoInicial += montoDepositar;
    this.saldoInicial -= descuentoDepositado;
    alert("Se depositó $" + montoDepositar);
    alert("Por cada deposito el banco le restará: " + descuentoDepositado)
    alert("Su saldo es de $" + this.saldoInicial);
    this.transacciones.push(`Depósito de $${montoDepositar}`); // Registrar la transacción
  }

  module.exports = depositar; 
const depositar = require("./depositar");
const retirar = require("./retirar");
const consultarSaldo = require("./consultar");
const prestar = require("./prestar");
const resumenTransacciones = require("./resumenTransacciones");

class Banco {
  constructor(nombre, saldoInicial = 0) {
    this.nombre = nombre;
    this.saldoInicial = saldoInicial;
    this.transacciones = []; // Arreglo para almacenar las transacciones
  }

  Depositar(montoDepositar, descuentoDepositado) {
    depositar(this, montoDepositar, descuentoDepositado);
  }

  Retirar(vRetirar) {
    retirar(this, vRetirar);
  }

  Consultar() {
    consultar(this);
  }

  Prestar(montoPrestar, interes) {
    prestar(this, montoPrestar, interes);
  }

  transacciones() {
    transacciones(this);
  }











  // Depositar(montoDepositar, descuentoDepositado) {
  //   this.saldoInicial += montoDepositar;
  //   this.saldoInicial -= descuentoDepositado;
  //   alert("Se depositó $" + montoDepositar);
  //   alert("Por cada deposito el banco le restará: " + descuentoDepositado)
  //   alert("Su saldo es de $" + this.saldoInicial);
  //   this.transacciones.push(`Depósito de $${montoDepositar}`); // Registrar la transacción
  // }

  // Retirar(vRetirar) {
  //   if (vRetirar <= this.saldoInicial) {
  //     this.saldoInicial -= vRetirar;
  //     alert(
  //       "Retiraste $" +
  //       vRetirar +
  //       ". El saldo actual es de $" +
  //       this.saldoInicial
  //     );
  //     this.transacciones.push(`Retiro de $${vRetirar}`); // Registrar la transacción
  //   } else {
  //     alert("El saldo es insuficiente");
  //   }
  // }

  // Prestar(montoPrestar, interes) {
  //   const montoTotal = montoPrestar * interes;
  //   if (montoPrestar <= this.saldoInicial) { // Verificar si se puede prestar
  //       alert(
  //         "Realizas un préstamo de $" +
  //         montoPrestar +
  //         ". El total a pagar con intereses es de $" +
  //         montoTotal
  //       );
  //       this.saldoInicial -= montoPrestar; // Restar el préstamo al saldo inicial
  //       this.transacciones.push(`Préstamo de $${montoPrestar}`); // Registrar la transacción
  //   } else {
  //       alert("No se puede realizar el préstamo. El saldo es insuficiente.");
  //   }
  // }

  // ConsultarSaldo() {
  //   alert("El saldo es de $" + this.saldoInicial);
  // }

  // Método para mostrar un resumen de transacciones
  // mostrarResumenTransacciones() {
  //   let resumen = "\n--- Resumen de Transacciones ---\n";
  //   if (this.transacciones.length === 0) {
  //     resumen += "Aún no se han realizado transacciones en esta sesión.";
  //   } else {
  //     this.transacciones.forEach((transaccion, index) => {
  //       resumen += `${index + 1}. ${transaccion}\n`;
  //     });
  //   }
  //   alert(resumen);
  // }
}

module.exports = Banco;

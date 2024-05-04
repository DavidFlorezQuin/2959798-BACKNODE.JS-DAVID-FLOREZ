const readline = require("readline");
const Banco = require("./banck");
const usuarios = require("./usuarios");
const depositar = require("./depositar");
const retirar = require("./retirar");
const consultarSaldo = require("./consultarSaldo");
const prestar = require("./prestar");
const resumenTransacciones = require("./resumenTransacciones");

function iniciarSesion() {
  
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  function validarCredenciales(usuario, clave) {
    return usuarios[usuario] === clave;
  }

  try {
    rl.question("Ingrese su nombre de usuario: ", (nombreUsuario) => {
      rl.question("Ingrese su clave: ", (clave) => {
        if (validarCredenciales(nombreUsuario, clave)) {
          const miBanco = new Banco("Mi Banco");

          function mostrarMenu() {
            
            console.log("\nBienvenido al Banco " + miBanco.nombre);
            console.log("Que operación deseas realizar: ");
            console.log("1. Depositar");
            console.log("2. Retirar");
            console.log("3. Consultar Saldo");
            console.log("4. Prestar");
            console.log("5. Mostrar Resumen de Transacciones");
            console.log("6. Salir");
            rl.question("Seleccione una opción: ", (opcion) => {
              opcion = parseInt(opcion);

              switch (opcion) {
                case 1:
                  rl.question("Ingrese el monto a depositar: ", (monto) => {
                    miBanco.Depositar(parseFloat(monto), descuentoDepositado);
                    mostrarMenu();
                  });
                  break;
                case 2:
                  rl.question("Ingrese el monto a retirar: ", (monto) => {
                    miBanco.Retirar(parseFloat(monto));
                    mostrarMenu();
                  });
                  break;
                case 3:
                  miBanco.ConsultarSaldo();
                  mostrarMenu();
                  break;
                case 4:
                  rl.question("Ingrese el monto a prestar: ", (monto) => {
                    miBanco.Prestar(parseFloat(monto), interes);
                    mostrarMenu();
                  });
                  break;
                case 5:
                  miBanco.mostrarResumenTransacciones();
                  mostrarMenu();
                  break;
                case 6:
                  rl.close();
                  break;
                default:
                  console.log("Opción no válida.");
                  mostrarMenu();
              }
            });
          }

          var interes;
          var descuentoDepositado;

          function mostrarSucursal() {
            console.log("Elige tu sucursal");
            console.log("1. EuroBank");
            console.log("2. AmericaBank");
            console.log("3. AsiaBank");
            console.log("4. OceanBank");
            console.log("5. Salir");
            rl.question("Seleccione una opción: ", (opcion) => {
              opcion = parseInt(opcion);

              switch (opcion) {
                case 1:
                  interes = 1.3;
                  descuentoDepositado = 5;
                  break;
                case 2:
                  interes = 1.5;
                  descuentoDepositado = 6;
                  break;
                case 3:
                  interes = 1.2;
                  descuentoDepositado = 3;
                  break;
                case 4:
                  interes = 2.3;
                  descuentoDepositado = 8;
                  break;
                case 5:
                  rl.close();
                  break;
                default:
                  console.log("Opción no válida.");
                  mostrarSucursal();
              }
              mostrarMenu();
            });
          }

          mostrarSucursal();
        } else {
          console.log("Credenciales incorrectas. Inténtelo de nuevo.");
          iniciarSesion();
        }
      });
    });
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
}

iniciarSesion();

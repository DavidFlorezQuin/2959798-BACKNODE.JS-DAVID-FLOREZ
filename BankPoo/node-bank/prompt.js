const Banco = require("./banck");
const validarCredenciales = require("./credenciales");


function iniciarSesion() {

  try {
    
    const usuario = prompt("Ingrese su nombre de usuario: ");
    const clave = prompt("Ingrese su clave: ");
    

    if (validarCredenciales(usuario, clave)) {

      
      alert('Hola' + usuario[usuario])
      const miBanco = new Banco("Mi Banco");

      function mostrarMenu() {
        let menu = "\nBienvenido al Banco " + miBanco.nombre + "\n";
        menu += "Que operación deseas realizar: \n";
        menu += "1. Depositar\n";
        menu += "2. Retirar\n";
        menu += "3. Consultar Saldo\n";
        menu += "4. Prestar\n";
        menu += "5. Mostrar Resumen de Transacciones\n";
        menu += "6. Salir";

        const opcion = parseInt(prompt(menu));

        switch (opcion) {
          case 1:
            const montoDepositar = parseFloat(prompt("Ingrese el monto a depositar: "));
            miBanco.Depositar(montoDepositar, descuentoDepositado);
            mostrarMenu();
            break;
          case 2:
            const montoRetirar = parseFloat(prompt("Ingrese el monto a retirar: "));
            miBanco.Retirar(montoRetirar);
            mostrarMenu();
            break;
          case 3:
            miBanco.ConsultarSaldo();
            mostrarMenu();
            break;
          case 4:
            const montoPrestar = parseFloat(prompt("Ingrese el monto a prestar: "));
            miBanco.Prestar(montoPrestar, interes);
            mostrarMenu();
            break;
          case 5:
            miBanco.mostrarResumenTransacciones();
            mostrarMenu();
            break;
          case 6:
            alert("¡Hasta luego!");
            break;
          default:
            alert("Opción no válida.");
            mostrarMenu();
        }
      }

      var interes;
      var descuentoDepositado;

      function mostrarSucursal() {
        let sucursal = "Elige tu sucursal\n";
        sucursal += "1. EuroBank\n";
        sucursal += "2. AmericaBank\n";
        sucursal += "3. AsiaBank\n";
        sucursal += "4. OceanBank\n";
        sucursal += "5. Salir";

        const opcion = parseInt(prompt(sucursal));

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
            alert("¡Hasta luego!");
            return;
          default:
            alert("Opción no válida.");
            mostrarSucursal();
            return;
        }
        mostrarMenu();
      }

      mostrarSucursal();
    } else {
      alert("Credenciales incorrectas. Inténtelo de nuevo.");
      iniciarSesion();
    }
  } catch (error) {
    console.error("Ha ocurrido un error:", error);
  }
}

iniciarSesion();

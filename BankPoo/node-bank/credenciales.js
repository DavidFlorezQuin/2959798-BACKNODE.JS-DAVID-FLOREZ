
const usuarios = require("./usuarios");

function validarCredenciales(usuario, clave) {
    return usuarios[usuario] === clave;
}

module.exports = validarCredenciales;

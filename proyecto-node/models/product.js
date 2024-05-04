const db = require('../db');

class ProductoModel {
    static obtenerTodos(callback) {
        db.query('SELECT * FROM productos', callback);
    }
static crear(producto, callback) {
    const { nombre, descripcion, precio } = producto;
    const sql = 'INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)';
    db.query(sql, [nombre, descripcion, precio], callback);
}


}

class ProductoDetalleModel {
    static obtenerPorProductoId(productoId, callback) {
        db.query('SELECT * FROM productos_detalles WHERE producto_id = ?', productoId, callback);
    }

    static crear(detalle, callback) {
        db.query('INSERT INTO productos_detalles SET ?', detalle, callback);
    }

}

module.exports = { ProductoModel, ProductoDetalleModel };

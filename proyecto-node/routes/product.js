const express = require('express');
const router = express.Router();
const { ProductoModel, ProductoDetalleModel } = require('../models/product');

router.get('/productos', (req, res) => {
    ProductoModel.obtenerTodos((err, productos) => {
        if (err) {
            console.error('Error al obtener productos:', err);
            res.status(500).json({ error: 'Error al obtener productos' });
            return;
        }
        res.json(productos);
    });
});

// Crear un nuevo producto
router.post('/productos', (req, res) => {
    const nuevoProducto = req.body;
    ProductoModel.crear(nuevoProducto, (err, resultado) => {
        if (err) {
            console.error('Error al crear un nuevo producto:', err);
            res.status(500).json({ error: 'Error al crear un nuevo producto' });
            return;
        }
        res.json({ mensaje: 'Producto creado exitosamente', id: resultado.insertId });
        console.log(req.body);
    });
});

router.get('/productos/:id/detalles', (req, res) => {
    const productoId = req.params.id;
    ProductoDetalleModel.obtenerPorProductoId(productoId, (err, detalles) => {
        if (err) {
            console.error('Error al obtener detalles del producto:', err);
            res.status(500).json({ error: 'Error al obtener detalles del producto' });
            return;
        }
        res.json(detalles);
    });
});

router.post('/productos/:id/detalles', (req, res) => {
    const productoId = req.params.id;
    const nuevoDetalle = { producto_id: productoId, ...req.body };
    ProductoDetalleModel.crear(nuevoDetalle, (err, resultado) => {
        if (err) {
            console.error('Error al crear un nuevo detalle:', err);
            res.status(500).json({ error: 'Error al crear un nuevo detalle' });
            return;
        }
        res.json({ mensaje: 'Detalle creado exitosamente', id: resultado.insertId });
    });
});

module.exports = router;

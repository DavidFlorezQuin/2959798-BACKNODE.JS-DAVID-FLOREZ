const express = require('express');
const productosRouter = require('./routes/product');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productosRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

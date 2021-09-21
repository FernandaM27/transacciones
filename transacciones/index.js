const crud = require('./productos.js');
const sales = require('./venta');

crud.idProducto(1).then((r) => {
    console.log(r[0].idproducto);
});

sales.saveSale();
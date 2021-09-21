const pool = require('./connection');

const registrarVenta = () => {
    pool.beginTransaction((err) => {
        if (err) throw err;
        let query = 'INSERT INTO venta (total, iva) VALUES(385,15)';

        pool.query(query, (err, result) => {
            const sqlObject = {
                sql: 'INSERT INTO productoventa (idVenta, idProducto, cantidadVendida, subtotal, precioVenta) VALUES(?,?,?,?,?)',
                values: [1, 1, 50, 500, 615],
            };
            pool.query(sqlObject, (err, result) => {
                if (err)
                    return pool.rollback(() => {
                        throw err;
                    });
                pool.commit((err) => {
                    if (err)
                        return pool.rollback(() => {
                            throw err;
                        });
                    pool.end();
                });
            });
        });
    });
};

module.exports.registrarVenta = registrarVenta;

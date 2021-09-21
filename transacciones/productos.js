const pool = require('./connection');

const insertar = (nombre, precio, cantidad) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO producto (nombre, precio, cantidad) VALUES(?, ?, ?)`;
        pool.query(sql, [nombre, precio, cantidad], (error, response) =>
            error ? reject(error) : resolve(response)
        );
    });
};

const actualizar = (id, nombre, precio, cantidad) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE producto SET nombre=?, precio=?, cantidad=? WHERE idproducto=?`;
        pool.query(sql, [nombre, precio, cantidad, id], (error, response) =>
            error ? reject(error) : resolve(response)
        );
    });
};

const eliminar = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM producto WHERE idproducto = ? `;
        pool.query(sql, [id], (error, response) =>
            error ? reject(error) : resolve(response)
        );
    });
};

const consultar = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM producto`;
        pool.query(sql, (error, response) =>
            error ? reject(error) : resolve(response)
        );
    });
};

const idProducto = (id) => {
    return new Promise((resolve, reject) => {
        const sql = {
            sql: 'SELECT * FROM producto WHERE idproducto = ?',
            values: id,
        };

        pool.query(sql, (error, response) =>
            error ? reject(error) : resolve(response)
        );
    });
};

module.exports.consultar = consultar;
module.exports.idProducto = idProducto;
module.exports.actualizar = actualizar;
module.exports.insertar = insertar;
module.exports.eliminar = eliminar;

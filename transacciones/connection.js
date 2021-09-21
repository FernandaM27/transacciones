const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sesamo',
    database: 'ventas',
});

connection.connect((err, connection) => {
    if (err) {
        console.error(err);
    } 
});

module.exports = connection;

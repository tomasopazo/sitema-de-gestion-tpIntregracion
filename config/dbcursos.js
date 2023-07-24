const mysql = require('mysql2');

const connection = mysql.createConnection({
    //credenciales para poder hacer la conexion a la base de datos
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "",
    database: "sistema de gestion escolar"
});

module.exports = connection;
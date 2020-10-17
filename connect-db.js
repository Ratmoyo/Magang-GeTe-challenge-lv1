const mysql = require('mysql');

//  login database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magang_challenge'
});

//connect ke datbase
connection.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected bismillah...');
});


module.exports = connection;
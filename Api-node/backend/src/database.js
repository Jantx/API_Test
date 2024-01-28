const mysql = require('mysql2');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345678',
    database:'company'
});

mysqlConnection.connect(function (err){
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('Db is connected');
    }
});

module.exports = mysqlConnection;
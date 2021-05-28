var mysql = require('mysql2');
var cnx = mysql.createConnection({
    host: 'localhost',
    user: 'daniel',
    password: 'daniel123',
    database: 'hhd',
    multipleStatements: true
});

cnx.connect(err => {
    if(!err){
        console.log(`Database connection successful`);;
    }else{
        console.log(`Databse connection failed: ${err}`);
    }
});

module.exports = cnx;


var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3308,
    database: "CUST"
});

con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");

    var nameToDelete = "Disha";
    var sql = "DELETE FROM customers WHERE name = ?";
    
    con.query(sql, nameToDelete, function(err, result){
        if (err) throw err;
        console.log("1 record deleted");
    });
});


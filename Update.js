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

    var nameToUpdate = "Disha";
    var newAddress = "CSN";
    var sql = "UPDATE customers SET address = ? WHERE name = ?";
    
    con.query(sql, [newAddress, nameToUpdate], function(err, result){
        if (err) throw err;
        console.log("1 record updated");
    });
});

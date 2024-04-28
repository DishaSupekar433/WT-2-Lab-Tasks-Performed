var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3308,
    database: "CUST"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var customer = { name: "Disha", address: "AUB" };
    var sql = "INSERT INTO customers SET ?";

    con.query(sql, customer, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

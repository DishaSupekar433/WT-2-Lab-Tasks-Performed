var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: 3308
});
con.connect(function(err){
    console.log("Connected!");
    con.query("CREATE DATABASE CUST",
    function (err, result){
        console.log("Database created");
    });
});
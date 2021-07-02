var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'todo'
});
db.on('error', function(err) {
        console.log("[mysql error]",err);
});
module.exports = db;
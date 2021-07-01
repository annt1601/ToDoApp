var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

var server = require('http').Server(app);
var mysql = require('mysql');
var port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969);
server.listen(port, () => console.log('Server running in port ' + port));

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'todo'
    });
conn.on('error', function(err) {
        console.log("[mysql error]",err);
      });

app.get('/', (req, res) => {
    res.send("Home page. Server running okay.");
    console.log("connect");
})
app.get('/todo', (req, res,next) => {
    var sql ="select * from todos";
    conn.query(sql, function(err,response){
        res.send(response)
    })
})
app.post('/todo/new', (err, res,body) => {
    console.log(err)
    console.log(body)
    res.send(body.json)
})

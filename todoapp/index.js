var express = require('express');
var app = express();
var cors = require('cors');

var server = require('http').Server(app);

var port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969);
server.listen(port, () => console.log('Server running in port ' + port));

var db = require('./database');
const internal = require('stream');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send("Home page. Server running okay.");
    console.log("connect");
})
app.get('/todo', (req, res) => {
    var sql ="select * from todos";
    db.query(sql, function(err,response){
        res.send(response)
    })
})
app.post('/todo/new', function(req, res){
    //console.log(req.body.userObject.message)
    if(req.body.m.message){
        var sql = "insert into todos (id,message) values ('null','"+req.body.m.message+"')";
        db.query(sql, function(err){
           if(err){
               res.send("Loi")
           }
           else{
            res.send(req.body.m.message)
           }
        })
    }
})

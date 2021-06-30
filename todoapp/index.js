var express = require('express');
var app = express();

var server = require('http').Server(app);
var mysql = require('mysql');
var port = (process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 6969);
server.listen(port, () => console.log('Server running in port ' + port));

app.get('/', (req, res) => {
    res.send("Home page. Server running okay.");
    console.log("connect");
})

// Include the cluster module
var cluster = require('cluster');

// Code to run if we're in the master process
if (cluster.isMaster) {

    // Count the machine's CPUs
    var numWorkers = require('os').cpus().length;

    console.log('Master cluster setting up ' + numWorkers + ' workers...');

    // Create a worker for each CPU
    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }

    // Listen for online workers
    cluster.on('online', function (worker) {
        console.log('Worker ' + worker.process.pid + ' is online');
    });

    // Listen for dying workers
    cluster.on('exit', function (worker, code, signal) {
        console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
        console.log('Starting a new worker');
        cluster.fork();
    });

    // Code to run if we're in a worker process
} else {
    //LOAD NODE MODULES
    var express = require('express'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        path = require('path'),
        fs = require('fs'),
        mysql = require('mysql');


    var connection = mysql.createConnection({
        host: 'alstest.cewrkmemvonk.us-west-1.rds.amazonaws.com:3306',
        user: 'root',
        password: 'T1jv2016$'
        database: 'alstest'
    });
    
    //SETUP APP
    var app = express();
    app.use(cors()); //ENABLE REQUEST TO OTHER DOMAINS
    app.use("/www", express.static(path.join(__dirname, '/client/'))); //WE DECLARE HERE OUR PUBLIC FOLDER

    //SETUP BODY PARSER
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    //SETUP SQL FILE READER
    var sqlPath = __dirname + '/sql/';
    var file = function (file) {
        return fs.readFileSync(sqlPath + file + '.sql', "utf8");
    }

    //SETUP ROUTES

    app.get('/api/home', function (req, res, next) {
        res.send('HelloWorld');
    });

    var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server running on worker %d listening at http://%s:%s', cluster.worker.id, host, port);
    });

    console.log('Worker %d running!', cluster.worker.id);
}
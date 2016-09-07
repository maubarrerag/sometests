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


    var connection = mysql.createPool({
        connectionLimit: 100,
        host: 'angular.cewrkmemvonk.us-west-1.rds.amazonaws.com',
        database: 'angular',
        user: 'root',
        password: 'T1jv2016$'
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

    app.post('/api/products', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            // Use the connection 
            connection.query(file('products'), function (err, rows) {
                if (err) throw err;
                //Send response
                res.send(rows);
                // And done with the connection.
                connection.release();
            });
        });
    });

    app.post('/api/products/insert', function (req, res, next) {
        pool.getConnection(function (err, connection) {
            // Use the connection 
            if(!!req.body.pr_json) {
                connection.query(file('products.insert'), [JSON.stringify(req.body.pr_json)], function (err, result) {
                    if (err) throw err;
                    //Send response
                    res.send(JSON.stringify(result.insertId));
                    // And done with the connection.
                    connection.release();
                });
            } else {
                throw new Error('pr_json cannot be null');
            }
        });
    });


    var server = app.listen(8000, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server running on worker %d listening at http://%s:%s', cluster.worker.id, host, port);
    });

    console.log('Worker %d running!', cluster.worker.id);
}
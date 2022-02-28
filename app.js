var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
constsaltRounds = 10
const secret = 'Fullstack-Login-2022'



app.use(cors())

const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'register_user'
});

app.post('/register', jsonParser, function(req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        connection.execute(
            'INSERT INTO users (username, email, password, sex) VALUES (?, ?, ?, ?)', [req.body.username, req.body.email, hash, req.body.sex],
            function(err, results, fields) {
                if (err) {
                    res.json({
                        status: 'error',
                        message: err
                    })
                    return
                }
                res.json({
                    status: 'save data'
                })
            }
        );
    });

})




app.listen(3333, jsonParser, function() {
    console.log('CORS-enabled web server listening on port 3333')
})
const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser');
const mysql = require('mysql');


// parse application/json
router.use(bodyParser.json());


//  login database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magang_challenge'
});

//connect ke datbase
conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql Connected bismillah...');
});


//menampilkan daftar user
router.get('/', (req, res) => {
    const sql = "SELECT * FROM Users";
    const query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});

//menampilkan daftar user dengan id
router.get('/user/:id', (req, res) => {
    const sql = "SELECT * FROM Users WHERE id=" + req.params.id;
    const query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});


//membuat user baru
router.post('/', (req, res) => {
    const data = {
        id: req.body.id,
        fullname: req.body.fullname,
        username: req.body.username,
        password: req.body.password
    };
    const sql = "INSERT INTO Users SET ?";
    const query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
        console.log(req.body.fullname)
    });
});

//update data user dengan id
router.put('/user/:id', (req, res) => {
    const sql = "UPDATE Users SET fullname='" + req.body.fullname + "', username='" + req.body.username + "',password='" + req.body.password + "' WHERE id=" + req.params.id;
    const query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
        console.log(req.body.fullname)
    });
});

//Delete data product berdasarkan id
router.delete('/user/:id', (req, res) => {
    let sql = "DELETE FROM Users WHERE id=" + req.params.id + "";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.send(JSON.stringify({
            "status": 200,
            "error": null,
            "response": results
        }));
    });
});


module.exports = router;
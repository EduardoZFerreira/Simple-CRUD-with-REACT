const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "react_crud"
});

app.get("/healthcheck", (req, res) => {
    res.status(200);
    res.json({msg: "OK"});
});

app.get("/student", (req, res) => {
    const query = "SELECT * FROM student";

    db.query(query, (err, data) => {
        if (err) return res.json({msg: err.message});
        else return res.json(data);
    });
});


app.get("/student/:id", (req, res) => {
    const query = "SELECT * FROM student WHERE id = ?";

    db.query(query, [req.params.id], (err, data) => {
        if (err) return res.json({msg: err.message});
        else return res.json(data);
    });
});

app.post("/student", (req, res) => {
    const sql = "INSERT INTO student (`name`, `email`) VALUES (?)";
    const values = [req.body.name, req.body.email];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json({msg: err.message});
        else return res.json(data);
    });
});

app.put("/student/:id", (req, res) => {
    const sql = "UPDATE student SET name = ?, email = ? where id = ?";
    const values = [req.body.name, req.body.email];
    db.query(sql, [...values, req.params.id], (err, data) => {
        if (err) return res.json({msg: err.message});
        else return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
});
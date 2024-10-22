const express = require("express");
const app = express();

const cors = require("cors");
const mysql = require("mysql");

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

app.get("/", (req, res) => {
    const query = "SELECT * FROM student";

    db.query(query, (err, data) => {
        if (err) return res.json({msg: err.message});
        else return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
});
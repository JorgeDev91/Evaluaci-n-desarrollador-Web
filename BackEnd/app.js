require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');



const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.PASS,
    database: "evaluation"
});


app.get("/proyectos", (req, res) => {
    const q = "SELECT * FROM proyecto"
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.get("/usuarios", (req, res) => {
    const q = "SELECT * FROM usuario"
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})


app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto', process.env.PORT);
});
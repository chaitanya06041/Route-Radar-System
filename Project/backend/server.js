const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

app.get('/', (req, res) => {
    return res.json("From backend side");
});

app.post('/buses', (req, res) => {
    const { source, destination } = req.body;
    const sql = "SELECT * FROM bus_details WHERE source = ? AND destination = ?";
    db.query(sql, [source, destination], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/stops', (req, res) => {
    const sourceStop = req.body.source;
    const destinationStop = req.body.destination;
    const sql = `
        SELECT DISTINCT s1.BusNo,  s1.StopNo as SourceStop, s2.StopNo as DestinationStop
        FROM stops s1
        JOIN stops s2 ON s1.BusNo = s2.BusNo
        WHERE s1.StopName = ? 
        AND s2.StopName = ? 
        AND s1.StopNo < s2.StopNo;
    `;
    db.query(sql, [sourceStop, destinationStop], (err, data) => {
        if (err) {
            return res.json("Error retrieving bus data!");
        }
        if (data.length > 0) {
            return res.json(data);
        } else {
            return res.json("No bus route found!");
        }
    });
});

app.post('/login', (req, res)=>{
    const sql = "select * from login where username=? and password=?";
    db.query(sql, [req.body.username,req.body.password], (err, data) =>{
        if(err)return res.json("Login Failed!");
        if(data.length > 0)return res.json("Login Successful");
        else return res.json("User Not Found!");
    })
})



app.post('/insert', (req, res) => {
    const { BusNo, Source, Destination, SrcTime, dstTime, Fare } = req.body;
    const sql = "INSERT INTO bus_details (BusNo, Source, Destination, SrcTime, dstTime, Fare) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [BusNo, Source, Destination, SrcTime, dstTime, Fare], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: "Internal server error" });
        }
        console.log("Data inserted successfully");
        return res.status(201).json({ message: "Data inserted successfully" });
    });
});



app.listen(8081, () => {
    console.log("listening");
});


const express = require('express');
let app = express();
// app.use(express.json());
app.get("/",(req, res)=>{
    res.send("get request running app ")
    // console.log('checking get call')
});

module.exports = app;

const express = require('express');
const app = express();
const  PORT = 8000;
const mongoose = require('./database/db')
app.get('/', (req, res) => {
    res.send("Hello world ")
})

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
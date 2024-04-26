const express = require('express');
const app = express();
const  PORT = 8000;
const connectDB = require('./database/db')
const cors = require('cors')
const cookieParser = require('cookie-parser')


app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: true})) //middele ware

// routes import 
const recruiterRoute = require('./routes/recruiterRoutes')

//router decleretion 
app.use('/api/recruiters', recruiterRoute)


app.listen(PORT,() => {
    connectDB();
    console.log(`Server is running on port ${PORT}`)
})
const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT; 
const route = require('./route');
const dbconnect = require('./config/db');
dbconnect()
app.express(express.json())
app.use(route)




app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})
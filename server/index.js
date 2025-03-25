const express = require("express");
const cors = require('cors')
const dotenv = require("dotenv").config();
const swaggerjsdocs = require("swagger-jsdoc");
const connectTodatbase = require("./db/connection");

const app = express();

app.use(cors())


app.use((error,req,res,next)=>{
    const errorMessage = error.message || 'internal server error';
    const errorCode = error.status || 500;
    return res.status(errorCode).send(errorMessage)
})


const PORT = process.env.port || 9000;


app.listen(PORT,()=>{
    connectTodatbase();
    console.log("app is running at the port", PORT)
})
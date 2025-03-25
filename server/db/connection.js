const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// console.log(process.env.DB)

const connectTodatbase = async () =>{
    try{
        await mongoose.connect(process.env.DB);
        console.log('database is conneted successfully !')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectTodatbase;
const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:4
    },
    email:{
        type:String,
        reuired:true,
        unique:true
    },
    role:{
        type:String,
        reuired:true,
        default:'user',
        enum:['user', 'admin','doctor','seller', 'chemist']
    },
    password:{
        type:String,
        reuired:true,
        min:4
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    district:{
        type:String
    },
    pincode:{
        type:String
    }
})

module.exports = mongoose.model('user', userschema)
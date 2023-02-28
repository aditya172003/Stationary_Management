const mongoose = require("mongoose")


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }

})

const User=mongoose.model('HUSER',userSchema);
module.exports=User;
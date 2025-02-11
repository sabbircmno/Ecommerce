const { default: mongoose, Schema } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        required:true,
        unique:[true , "email obossoi unique hote hobe"
        ]
    },
    password: {
        type: String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    role:{
        type: String,
        enum:["user","admin"],
        defult:"user"
    }
})
module.exports = mongoose.model("user",userSchema)
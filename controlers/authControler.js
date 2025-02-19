const userModel = require("../models/userModel");

async function SignupController(req,res){
    const{name,email,password,phone}= req.body;
        try{
          const user= new userModel({
            name,
            email,
            password,
            phone,
            role,
          });
          await user.save()
        }catch(error){
            req.statuds(500).json({msg:error})
        } 
}
function LoginController(req ,res){
    res.send("jdfnjn")
}
module.exports = {SignupController,LoginController}
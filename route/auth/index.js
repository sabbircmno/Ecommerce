const express = require('express')
const router = express.Router()


// localhost:3000/auth/signup
router.post("/signup",(req,res)=>{
    res.send("sign up")
})

module.exports = router


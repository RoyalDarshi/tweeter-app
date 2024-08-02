const User = require('../models/User');
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken");

function createToken(id){
    return jwt.sign(id,"fagaklctyay55656fgd4346yffy7vse3")
}

exports.registerUser = async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;
        if(password.trim().length<6){
            return res.status(401).send({err:"Password must be at least 6 char long!"})
        }
        if(!email.includes('@')||!email.endsWith(".com")){
            return res.status(401).send({err:"Wrong email format!"})
        }
        const existedUser=await User.findOne({email: email},null,{})
        if(existedUser){
            return res.status(403).send({err:"User already existed!"})
        }
        bcrypt.hash(password,10,async (err1,hash)=>{
            const user = new User({email:email,password:hash});
            await user.save()
            res.status(201).send(user);
        })
    }catch(err){
        console.log(err);
        res.status(500).send({err:"Something went wrong while creating the user!"});
    }
}

exports.loginUser=async (req,res)=>{
   try{
       const email=req.body.email;
       const password=req.body.password;
       const user=await User.findOne({email:email},null,{})
       if(!user){
           return res.status(401).send({err:"User is not registered!"})
       }

       bcrypt.compare(password,user.password,(err,data)=>{
           if(data){
               return res.status(201).send({
                   msg:"Login successfully",
                   id:createToken(user.id)
               });
           }else {
               return res.status(401).send({err:"Wrong password!"})

           }
       })
   } catch (err) {
       console.log(err)
       res.status(500).send({err:"Something went wrong while login the user!"});
   }
}
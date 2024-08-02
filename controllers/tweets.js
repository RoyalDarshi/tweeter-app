const jwt=require("jsonwebtoken");
const Tweet=require("../models/Tweet")
const User=require("../models/User")

function decodeToken(token) {
    return jwt.decode(token);
}

module.exports.createTweet=async (req,res)=>{
    try{
        const text=req.body.text;
        const userId=decodeToken(req.body.id);
        if(text.trim().length===0){
            return res.status(401).send({err:"Msg should not be empty!"})
        }
        const user=await User.findOne({_id:userId});
        if(!user){
            return res.status(401).send({err:"User doesn't exist!"})
        }
        const tweet=new Tweet({text,userId})
        await tweet.save();
        res.status(201).send(tweet);
    }catch (err) {
        console.log(err);
        res.status(500).send({err:"Something went wrong while creating tweet",data:err})
    }
}

module.exports.getUserTimeline=async (req,res)=>{
    try{
        const userId=decodeToken(req.params.userId);
        const cursor=+req.query.cursor;
        const limit=+req.query.limit||10;
        const tweets=await Tweet.find({userId: userId})
            .skip(cursor?parseInt(cursor):0).limit(limit).sort({createdAt:-1});
        let nextCursor=limit;
        if(tweets.length<limit){
            if(cursor){
                nextCursor=cursor+tweets.length;
            }else{
                nextCursor=tweets.length;
            }
        }else{
            if(cursor){
                nextCursor=cursor+limit;
            }else{
                nextCursor=limit;
            }
        }
        res.status(200).send({tweets:tweets,nextCursor:nextCursor})
    }catch (err){
        console.log(err)
        res.status(500).send({msg:"Something went wrong while fetching tweets"})
    }
}
const mongoose = require("mongoose");
const TweetSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }
});
const Todo = mongoose.model("tweet", TweetSchema);

module.exports = Todo;

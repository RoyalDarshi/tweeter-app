const mongoose = require("mongoose");

const database = () => {
    mongoose
        .connect(
            "mongodb+srv://priyadarshiroy92:oH7uoeHxL9BZWJZI@cluster0.9njwyr3.mongodb.net/tweeter?retryWrites=true&w=majority&appName=Cluster0"
        )
        .catch((err) => console.log(err));
};

module.exports = database;

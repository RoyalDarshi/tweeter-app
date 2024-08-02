let express = require('express');
let path = require('path');
const database=require("./util/database")

let usersRouter = require('./routes/users');
let tweetRouter = require('./routes/tweets');

let app = express();

database()
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetRouter);

app.listen(3000);

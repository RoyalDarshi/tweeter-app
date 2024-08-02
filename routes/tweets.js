let express = require('express');
let router = express.Router();
const tweets=require('../controllers/tweets')

router.post("/",tweets.createTweet);
router.get("/:userId/timeline",tweets.getUserTimeline);

module.exports = router;

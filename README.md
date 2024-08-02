"# tweeter-app"

# Assignment Overview

This application is a simplified version of twitter using node js as runtime environment and mongodb as database

# How to Run the Application

1. First need to install node.js
2. need to clone repository in local system
3. In project folder in cmd run code "npm install"
4. you can configure your mongodb url in util folder inside database.js file
5. then run "npm start" in cmd

# Dependncies

1. express
2. nodemon
3. jsonwebtoken
4. bcrypt
5. mongodb
6. mongoose

# Installation Instruction

1. Node.js: You can install node.js from its official website from internet
2. MongoDb: you can install it or you simply
   login to mongodb official website
   create a project
   inside project create a cluster choose free one
   create a user,
   then in connection method choose drivers
   then copy url from there
   and past in project folder util/database.js

# Testing

there is no testing tools present need to test each api manually

# Issues and Troubleshouting

Make sure in mongodb url is

# API Documentation

Base URL: http://localhost:3000/api

1. User Registration
   endpoint: POST /users/ .
   Description: Create a new user with unique email and password.
   Request body: {"email": admin@gmail.com,"password":123456}

2. User Login
   endpoint: POST /users/login .
   Description: Validate user with email and password and return a unique token.
   Request body: {"email": admin@gmail.com,"password":123456}

3. Post Tweet
   endpoint: POST /tweets .
   Description: Create a tweet of a user.
   Requested body: {"text":"some text","id":"token returned from login user api"}

4. Get all Tweet
   endpoint: GET /users/:userId/timeline .
   Description: fetch timeline of tweets of a user with cursor based pagination.
   Path Parameter: {userId:"token returned from login user api"} .
   Query Parameter(optional): {"cursor": 6,limit: 5}

# Contact Information

Name: Priyadarshi Roy
email: priyadarshiroy92@gmail.com

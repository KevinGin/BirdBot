"use strict";

const https = require("https");
const request = require("request");
const logger = require("de-loggingsystem");
const OAuth2 = require("oauth").OAuth2;
const twit = require("twit");

module.exports.tweet = async event => {

  
  console.log("hello world");

  let config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  };

  const Twitter = new twit(config);


  let tweet = "hello world, i am a bot";

  tweet += Math.random().toPrecision(4);

  Twitter.post("statuses/update", { status: tweet }, function(err, data, response) {
    if (err) {
      console.log("error -- ");
      console.log(err);
      console.log("   ");
      console.log(err.twitterReply.errors[0]);
    } else {
      console.log("tweet posted");
      console.log(response);
    }});
  

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };

};




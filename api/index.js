const restify = require('restify');
const express = require('express');
const app = express();
const restifyPlugins = require('restify').plugins;
const corsMiddleware = require('restify-cors-middleware');
// Trying to get around cors with our axios.get request on the frontend
// const cors = corsMiddleware({
//     preflightMaxAge: 5,
//     origins: ['*'],
//     allowHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
//     exposeHeaders: ['Content-Type']
// })

const config = require('./config');

const server = restify.createServer({
    name: config.name,
});


//Getting around cors
// server.pre(cors.preflight);
// server.use(cors.actual);

//5/22/2018 - Attempted to solve the issue by adding OPTIONS to the list of Access-Control-Allow-Methods... but I still get the 405 error for OPTIONS not allowed
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    if('OPTIONS' == req.method){
        console.log("HELLO: IS ANYONE HERE: IM IN THE OPTIONS REQUEST");
        res.send(200);
    }else{
        next();
    }
  });
  
// Load some standard Restify plugins to auto wire some things for you
server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());


// Start the server
server.listen(config.port, () => {
    require('./routes')(server);  
    console.log('%s is listening at %s', server.name, server.url);
});


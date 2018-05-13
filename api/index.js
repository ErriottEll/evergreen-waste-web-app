const restify = require('restify');
const restifyPlugins = require('restify').plugins;
const corsMiddleware = require('restify-cors-middleware');
//Trying to get around cors with our axios.get request on the frontend
const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
    exposeHeaders: ['Content-Type']

})

const config = require('./config');

const server = restify.createServer({
    name: config.name,
});
//Getting around cors
server.pre(cors.preflight);
server.use(cors.actual);
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


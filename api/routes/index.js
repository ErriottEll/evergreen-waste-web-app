const errors = require('restify-errors');
// const config = {
//     host: 'localhost',
//     port: 5432,
//     database: 'egdb',
//     user: 'erriott',
//     password: 'sudo'
// }

const options = {};

const pgp = require('pg-promise')(options);
const db = pgp('postgres://erriott:gust@localhost:5433/egdb');

module.exports = function(server) {

    //Get list of events
    server.get('/events', (req, res, next) => {
        db.any('select * from events')
        .then(function(data) {
            console.log(data);
            res.send(200, data);
            })
        .catch(function (err){
            return next(err);
        });
    })

    //post an event to the events list
    server.post('/events', (req, res, next) => {
        console.log("Reached post")
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("The service expects JSON. Set Header Content Type to 'application/json'"));
        }
        //Check data and validate that it exists
        data = req.body || {};
        if(!data.id == null){
            return next(new errors.InvalidContentError("The service expects JSON. Set Header Content Type to 'application/json'"));
        }
        rTitle = req.params.title;
        rAllDay = req.params.allDay;
        rStartDate = req.params.startDate;
        rEndDate = req.params.endDate;
        db.one('INSERT INTO events(title, allDay, startDate, endDate) VALUES($1, $2, $3, $4) RETURNING id', [rTitle, rAllDay, rStartDate, rEndDate])
        .then(data => {
            res.send(200, data);
            next();
        })
        .catch(error => {
            console.log('ERROR:', error);
            res.send(500);
        })
        
    })

    // OPTIONS handler for /
    server.opts('/', (req, res, next) => {
        //set access control headers to allow the preflight/options request
        console.log('in opts');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version', 'X-Requested-With');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    
        // Access-Control-Max-Age header catches the preflight request in the browser for the desired
        // time. 864000 is ten days in number of seconds. Also during development you may want to keep
        // this number too low e.g. 1.
        res.setHeader('Access-Control-Max-Age', 1);
        res.send(200);
        next();
});
}
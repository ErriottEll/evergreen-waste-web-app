var options = {
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/egdb';
var db = pgp(connectionString);

// setting up query functions
module.exports = {
    getAllEvents: getAllEvents,
}

function getAllEvents(req, res, next){
    db.any('select * from events')
    .then(function(data) {
        res.status(200)
        .json({
            status: 'success',
            data: data,
            message: 'Retrieved all the events'
        });
    })
    .catch(function (err){
        return next(err);
    });
}
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
}
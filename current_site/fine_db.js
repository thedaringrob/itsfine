const pgp = require('pg-promise')();
var db = pgp
const pgp = require('pg-promise')();
var db = pgp('postgres://robertcrozier@localhost:5432/rsvp')


var confirmation = function(req, res, next){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var phone = req.body.phone;
    var party = req.body.party;
    var email = req.body.email;
}

module.exports = {confirmation}

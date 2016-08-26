const express = require('express');
const app = express();
const pgp = require('pg-promise')();
// var db = pgp;

const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');


// finish this route.  right now this is only posting data to something that
// isn't lisening for it
// will need to have the html render
// will also then be able to test the complete route for data.
//
// the way that you're doing the site is not actually hosting it.!!!
//figure it out.


var db = pgp('postgres://robertcrozier@localhost:5432/premiere');
app.use(express.bodyParser());

// need this?
// var confirmation = function(req, res, next){
//     var fname = req.body.fname;
//     var lname = req.body.lname;
//     var phone = req.body.phone;
//     var party = req.body.party;
//     var email = req.body.email;
// };

app.post('/premiere', function(req,res){
  console.log(req.body);

  // db.none("INSERT INTO rsvp (fname, lname, phone, party, email) VALUES ($1, $2, $3, $4, $5)");

});

app.get('/', function(req, res){
  res.render('/');
});



app.listen(3000, function(){
  console.log('app is running on 3 stacks');
});


// module.exports = {confirmation};

// This array will not be here when we add a database
// that is where data wshould be based
var geeseArray = [
    {
        name: 'Fred',
        age: 5,
        type: 'Betelgeusian Goosian'
    },
    {
        name: 'Carla',
        age: 4,
        type: 'Canadian'
    }
];
// requries
var express = require('express');
var bodyParser = require('body-parser');
// globals
var app = express();
var port = 5000;
// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/geese', function(req, res){
    res.send(geeseArray);
}); // end geese get route

app.post('/geese', function(req, res) {
    console.log( 'in /geese post call:', req.body);
    // push new goose into the gaggle
    if( req.body.name === '' ){
      res.sendStatus( 400 );
    } // blank name detected
    else{
      // check array for another goose with this name
      // loop though the array
      for (var i = 0; i < geeseArray.length; i++) {
        // if I find this name res.send( 400 )
        if( geeseArray[i].name == req.body.name ){
          res.sendStatus( 400 );
        }
      }
      // continue if no match found
      geeseArray.push( req.body );
      res.sendStatus( 201 );
    } // end no blank name
}); // end geese post route

app.listen(port, function(){
    console.log('Running on port', port);
}); // end server spni up

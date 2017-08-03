betelgeuse-jquery-express-list-of-geesen
===

From the 8-2-2017 PAH

First, added some server side code to check if the name of the new goose was blank:

```
if( req.body.name === '' ){
  res.sendStatus( 400 );
} // blank name detected
else{
  geeseArray.push( req.body );
  res.sendStatus( 201 );
} // end no blank name
```

Next, looped through the existing geese to see if one already existed in the array with the name of the new goose:

```
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
```

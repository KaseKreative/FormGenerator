var express 	= require('express'),
	app 		= express();
var	port        = process.env.PORT || 3000;
	// Environmental variable
 
app.get('/derp', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port);
console.log('Server active on port: ',port);
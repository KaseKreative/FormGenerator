var express 	= require('express'),
	app 		= express(),
	exphbs      = require('express-handlebars'),
	port        = process.env.PORT || 3000;
	// Environmental variable
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.get('/derp', function (req, res) {
  res.send('Hello World');
});
 
app.listen(port);
console.log('Server active on port: ',port);
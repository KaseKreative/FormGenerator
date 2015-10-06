
var express 	= require('express'),
	app 		= express(),
	exphbs      = require('express-handlebars'),
	mongoose    = require('mongoose'),
	port        = process.env.PORT || 3000;


	// Environmental variable
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use( express.static(__dirname + '/Public'));
app.use( express.static(__dirname + '/bower_components'));
// DATABASE CONNECTION vvvvvvv
mongoose.connect('mongodb://localhost:5000');

mongoose.model('users', {name: String});

// var Cat = mongoose.model('Cat', {name : String });
// var kitty = new Cat({name: 'Cougar'});
// kitty.save(function(err){
// 	if(err){
// 		console.log('meow');
// 	}
// })

 // ROUTES -------------------------------
app.get('/', function (req, res) {
  res.render('home');
});

app.get('/users', function (req, res) {
	mongoose.model('users').find(_.function(err, users) {
		res.send(users);
	})
})


// myApp.directive('genForm', function(){
// 	return{
// 		restrict: 'E',
// 		scope: {
// 			payload: '=',
// 			callback: '&'
// 		},
// 		template: '<div class="genForm">' +
// 				  '<div ng-show="payloadProcessed"><h1>{[{payload.something}]}</h1></div>' +
// 				  '<div ng-show="payloadProcessed">' +
// 				  '<h1>{[{payload.title}]}</h1>'
// 	}
// })

// myApp.service('formGenData', function(){
// 	var FormGen = function(args) {
// 		this.title   = args.title || '';
// 		this.inputs  = args.aryInputs || [];
// 		this.actionTitle = args.actionTitle || '';
// 		this.successMsg = args.sucessMsg || 'Success';
// 		this.processed = false;
// 		this.extractedData;
// 	}
// });

// formGenData.prototype.addInput = function(){
// };

// formGenData.prototype.extractFormData =
// 	var objData = {};
// 	var aryTargetProps = {'title', 'value'}
 
app.listen(port);
console.log('Server active on port: ',port);
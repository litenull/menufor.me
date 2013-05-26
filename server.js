var express = require('express');
var http = require('http');
var path = require('path');
var routes  = require('./routes/routes.js')
var db = require('./db.js')

var app = express();

app.configure(function() {
  app.set("port", 3003);
  app.set("views", "" + __dirname + "/views");
  app.set("view engine", "jade");
  app.use(express.logger());
  app.use(express.compress());
  app.use(express.favicon());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.cookieSession({ key:'menufor.me', secret:'secret'}));
  app.use(app.router);
  app.use(express["static"](path.join(__dirname, "app")));
});

Error.stackTraceLimit = Infinity;

app.configure("development", function() {
  return app.use(express.errorHandler());
});

var checkAuth = function(req, res, next) {
	if (!req.session.username) {
	  res.send('not authenticated')
	}else{
	  next()
	}
}


// RESTful API
app.get('/api/recipe', routes.recipe);
app.post('/login',     routes.login)
app.get('/checkauth',  routes.auth)
app.get('/clearsession', routes.clearsession)
app.post('/api/recipe', checkAuth, routes.add_recipe)

http.createServer(app).listen(app.get('port'));

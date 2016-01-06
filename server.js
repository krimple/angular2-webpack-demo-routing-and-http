/*var express = require('express');
var app = express();

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: 'index.html',
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
}

app.use(express.static('public', options));

app.listen(3000, function() {
  console.log('running on port 3000');
});

*/

var express = require('express');
var http = require('http');
var path = require('path');
var jsonServer = require('json-server');


var errorHandler = require('express-error-handler'),
  handler = errorHandler({
    static: {
      '404': 'public/index.html'
    }
  });

// CONFIGURE json middleware
var jsons = jsonServer.create();
jsons.use(jsonServer.defaults());
var jsonRouter = jsonServer.router('db.json');

// CONFIGURE Express App Server
var app = express();

// add route for JSON stuff
app.use('/api', jsonRouter); // use json middleware in /api

// add static directory for static files
app.use(express.static(
  path.join(__dirname, 'public')));

app.use( errorHandler.httpError(404) );
app.use( handler );

// launch a HTTP server running express (which is configured
//	with the json-server middleware and static routes)
var server = http.createServer(app);
server.listen(3009, function() {
  console.log('Server started on port 3009');
});


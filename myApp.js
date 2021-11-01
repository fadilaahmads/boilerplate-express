var express = require('express');
var app = express();

/** 1) Meet the Console */
//console.log('Hello World');

/** 2) Start a Working Express Server */
/*app.get('/', (req, res) => {
    res.send('Hello Express'); //it can send files too
});*/

/** 3) Serve an HTML files */
absolutePath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

/** 4) Serve Static Assets */
app.use('/public', express.static(__dirname + '/public/'));

/** 5) Serve JSON on a Specific Route */
/*app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" });
});*/

/** 6) Use the .env File */
/*app.get('/json', (req, res) => {
    var response;
    if(process.env.MESSAGE_STYLE === 'uppercase'){
       response = "Hello json".toUpperCase();
    }else{
       response = "Hello json";
    }
    res.json({ "message": response });
  });*/
  
/** 7) Implement a Root-Level Request Logger Middleware */
app.use(function middleware(req, res, next) {
  const response = req.method+' '+req.path+' - '+req.ip;
  console.log(response);
  next();
});

/** 8) Chain Middleware to Create a Time Server */
app.get('/now', (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    time: req.time
  });
});

/** 9) Get Route Parameter Input from the Client */
app.get('/:word/echo', function(req, res){
  const word = req.params.word;
  res.json({ echo: word});
});

/** 10) Get Query Parameter Input from the Client */
app.get('/name', (req, res) => {
  var firstName = req.query.first;
  var lastName = req.query.last;

  res.json({
    name: `${firstName} ${lastName}`
  });
});

/** 11) Use body-parser to Parse POST Requests */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** 12) Get Data from POST Requests */
app.post('/name', (req, res) => {
  const string = req.body.first+' '+req.body.last;
  res.json({ name: string});
});




























 module.exports = app;

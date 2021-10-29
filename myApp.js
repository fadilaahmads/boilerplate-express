var express = require('express');
var app = express();

//Meet the Console
//console.log('Hello World');

//Start a Working Express Server
/*app.get('/', (req, res) => {
    res.send('Hello Express'); //it can send files too
});*/

//Serve an HTML files
absolutePath = __dirname + '/views/index.html';
app.get('/', (req, res) => {
  res.sendFile(absolutePath);
});

//Serve Static AssetsPassed
app.use('/public', express.static(__dirname + '/public/'));

//Serve JSON on a Specific Route
app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" });
});
  




































 module.exports = app;

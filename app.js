var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const https = require('https');
const fs = require('fs');

app.use("/",require("./myroute"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

const options = {
  key: fs.readFileSync('./keys/214051319980677.key'),//你的私钥
  cert: fs.readFileSync('./keys/214051319980677.pem')//你的证书
};

const httpsServer = https.createServer(options, app);

httpsServer.listen(8443,function(){
  var host = httpsServer.address().address;
  var port = httpsServer.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


const express = require('express');
const bodyParser = require('body-parser');

const config = require('./config');

const app = express();

global.jsonData = {};
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const port = config.port;

require('./app/routes')(app);

app.listen(port, () => 
	{  console.log('We are live on ' + port); }
);

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Set up Express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static('app/public'));

// Router
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, () => console.log("Server listening on: http://localhost:" + PORT));
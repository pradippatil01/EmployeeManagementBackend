/**************************************************************************
*   Excecution : 1. default Node 
*   Purpose    : Employee payroll - Building a Restful CRUD API with Node.js, Express and MongoDB
*   @description 
*   @author    : Pradip R patil (BridgeLabz)
*   @file      : server.js
*   @version   : v15.6.0
***************************************************************************/
const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/DB.connect');
var cors = require('cors');

// create express app
var app = express();
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

//catch error
app.use((error, req, res, next) => {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
  });

require('./route/employee.routes.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
    console.log('try to connect Database...');
    connection.connection();
});
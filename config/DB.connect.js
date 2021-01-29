// Configuring the database
const dbConfig = require('./DB.config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
connection = () => {
    mongoose.connect(dbConfig.url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database. Exiting now...', err);
        process.exit();
    });
}

module.exports = { connection };

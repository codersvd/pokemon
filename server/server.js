const express = require("express");
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const expressSession = require('express-session');
const mongoose = require('mongoose');
const fs = require('fs');
const config = require("./config.json");

app.set('trust proxy', true);
app.set('json spaces', config.app.jsonSpaces || 0);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended": false}));

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodb.app).then((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MongoDB was conneted");
});

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
}, app).listen(config.app.port, 'localhost', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at https://localhost:' + config.app.port);
});

var pathControllers = __dirname + "/controllers/";

fs.readdirSync(pathControllers).forEach(function (file) {
    if (file.substr(-3) === '.js') {
        var route = require(pathControllers + file);
        route(app);
    }
});

module.exports = {app};
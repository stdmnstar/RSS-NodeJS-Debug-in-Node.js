var express = require('express');
var app = express();
require('dotenv').config();
var db = require('./db');
var user = require('./controllers/usercontroller');
var game = require('./controllers/gamecontroller')


db.sync();
app.use(require('body-parser').json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))
app.use('/api/game', game);
app.listen(process.env.SERVER_PORT || 4000,function() {
    console.log("App is listening on 4000");
})

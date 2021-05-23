const express = require('express');

const app = express();
require('dotenv').config();
const db = require('./db');
const user = require('./controllers/usercontroller');
const game = require('./controllers/gamecontroller');


db.sync().catch((err) => console.log(`Error: ${err}`));
app.use(require('body-parser').json());

app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))

app.use('/api/game', game);
app.listen(process.env.SERVER_PORT || 4000, () => console.log("App is listening on 4000"));

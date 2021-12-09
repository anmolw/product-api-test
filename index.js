const express = require("express");
const app = express();

const port = 8000;
const db = require('./config/mongodb');
app.use(express.json());

const router = require('./routes');

app.use('/', router);
app.listen(port, (err) => {
    console.log(`Listening at http://localhost:${port}`);
});
// Import express & initialize app
const express = require("express");
const app = express();

const PORT = 8000;
const db = require('./config/mongodb');

// Register JSON parser middleware
app.use(express.json());

// Import default router and register routes
const router = require('./routes');
app.use('/', router);

app.listen(PORT, (err) => {
    console.log(`Listening at http://localhost:${{ PORT }}`);
});
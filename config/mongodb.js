const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/productapi");

const db = mongoose.connection;
db.once("connected", (err) => {
    if (err) {
        console.error("Error connecting to mongodb");
        console.error(err);
        return;
    }
    console.log("Connected to MongoDB");
})

module.exports = db;
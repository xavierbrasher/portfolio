import dotenv from "dotenv";
dotenv.config();

import express from "express";

const port = 80;
const app = express();

app.use(express.static(__dirname + "/public/"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

// Starts server
app.listen(port, () => {
    console.log("Blog-Site Backend Listening on Port: " + port);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const port = 80;
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + "/public/"));
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

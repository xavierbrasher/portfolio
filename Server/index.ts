import dotenv from "dotenv";
dotenv.config();

import express from "express";
import sendPush from "./lib/sendPush";
import cors from "cors";

const port = 80;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public/"));

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/public/" + "index.html");
});

app.post("/api/push", async (req, res) => {
    const { name, email, content } = req.body;
    if (name === undefined || email === undefined || content === undefined) {
        res.status(400).json({ responce: 0, error: "Not enough paramaters" });
        return;
    }
    res.status(200).send({
        push_status: "sent",
        internal_push_status: await sendPush(name, email, content),
    });
});

// Starts server
app.listen(port, () => {
    console.log("Portfolio is listening on port: " + port);
});

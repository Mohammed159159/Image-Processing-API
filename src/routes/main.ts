import express from "express";

//this is the apps' main route
const main = express.Router();

main.get("/", (req, res) => {
    res.send("Welcome to main route!");
});

export default main;

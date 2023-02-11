// import fs from "fs";
// import data from "./JSquestions.json" assert { type: "json" };
// console.log(data);
// console.log(fs);


//do not use "type": "module" in package.json while using require

const express = require('express');

const app = express();
const data = require("./JSquestions.json");
// app.use(express.static('public'))
app.use(express.json());
app.get('/', (req, res) => {
    const fs2 = require("fs");
    console.log(fs2);
    console.log(data);
    // res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    res.send('Home Page Route')
});
app.get("/allobjects", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(JSON.stringify(data));
});
app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

module.exports = app

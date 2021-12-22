const express = require("express");
const { get } = require("http");
const path = require('path');

const app = express();


const staticFiles = express.static('public');
app.use(staticFiles)


app.listen(process.env.PORT || 3000, () => console.log('Tenemos la Web'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
});

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
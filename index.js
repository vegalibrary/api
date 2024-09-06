const express = require('express');
const bodyParser = require('body-parser');
const API = require("./API/router");

const app = express();

app.use(bodyParser.json())

app.use(API)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`
        ---------------------------------

            http://localhost:${PORT}/

        ---------------------------------
    `);
});
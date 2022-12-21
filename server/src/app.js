const express = require('express');
const cors = require('cors');

const api = require('./routes/api');

const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(express.json());

app.use('/v1', api)

module.exports = app;
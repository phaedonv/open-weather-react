const PORT = 8000;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.get('/', (req,res) => {
    res.json('hello friend')
})
/*
app.get('api', (req,res) => {
    const k3y = process.env.REACT_APP_WEATHER_KEY;

    const api = {
    key: k3y,
    base: "https://api.openweathermap.org/data/2.5/"
    }

    axios.request(options).then((response) => {
        res.json(response.data)
    }).catch((error) => {
        console.error(error)
    })
})
*/
app.listen(8000, () => console.log(`Server is running on ${PORT}`))
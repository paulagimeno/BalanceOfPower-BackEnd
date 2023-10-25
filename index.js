const express = require('express');
const {connectDb} = require('./src/utils/database');
const routeCharacters = require('./src/api/routes/CharacterRoute');
const env = require('dotenv');
env.config();


const app = express();
connectDb()

const cloudinary = require("cloudinary").v2;
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

app.use('/characters', routeCharacters)


const PORT = 5051;
app.listen(PORT, () => {
console.log('escuchando por el puerto ' + PORT);
});
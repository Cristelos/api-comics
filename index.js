//requiero express
const express = require('express');
//requiero dotenv
const dotenv = require('dotenv');
//requiero cloudinary
const cloudinary= require("cloudinary").v2;

//importamos la función connect de database.js
const {connect} = require('./src/utils/database');

//importo el router
const routerComics = require('./src/api/routes/comics.routes');


//configuracion dotenv
dotenv.config();


//configuracion coundinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET
});

//asigno una variable al puerto
const PORT = process.env.PORT || 8000;

//genero mi servidor
const app = express();

//llamo a conectar 
connect();

//configuro express
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//pongo las rutas
app.use('/comics', routerComics);

//le decimos donde escucha y asignamos una funcion 
app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));
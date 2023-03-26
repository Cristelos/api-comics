//requerimos la bbdd:
const mongoose = require('mongoose');

//Obtenemos el Schema de mongoose:
const Schema = mongoose.Schema;

//Creamos el Schema de nuestra api:
const comicsSchema = new Schema({
    title: {type: String, required: true}, 
    author: {type: String, required: true},
    editorial: {type: String, required: true}, 
    year: {type: Number, required: true}, 
    genre: {type: String, required: true}, 
    descripción: {type: String, required: true},
    image: {type: String,required: false, default:"https://res.cloudinary.com/dgguxcib9/image/upload/v1679852981/comics/caratula-libro_ma9zkp.png"}
},{
   //esto nos va a generar dos campos más de los anteriores, que son fecha de creación y fecha de modificación
   timestamps: true,
});


//Generamos el modelo
const Comics = mongoose.model('comics', comicsSchema);

//Lo exportamos
module.exports = Comics;
const mongoose = require('mongoose');
const comics = require('../api/models/comics.models');
const dotenv = require('dotenv');

dotenv.config();

const arrayComics = [
    {
        "título": "El tesoro del Cisne Negro",
        "autor": "Paco Roca",
        "editorial": "Astiberri",
        "año": 2018,
        "género": "Aventuras",
        "descripción": "Un grupo de buceadores en busca de un tesoro perdido en las costas de la Comunidad Valenciana."
    },
    {
        "título": "Las Meninas",
        "autor": "Santiago García y Javier Olivares",
        "editorial": "Astiberri",
        "año": 2014,
        "género": "Histórico",
        "descripción": "Una reimaginación de la vida de Velázquez en la Corte de Felipe IV y su creación de la obra maestra 'Las Meninas'."
    },
    {
        "título": "Los surcos del azar",
        "autor": "Paco Roca",
        "editorial": "Astiberri",
        "año": 2013,
        "género": "Histórico",
        "descripción": "La historia real de la compañía de republicanos españoles que lucharon en la Segunda Guerra Mundial como parte de la Resistencia Francesa."
    },
    {
        "título": "Arrugas",
        "autor": "Paco Roca",
        "editorial": "Astiberri",
        "año": 2007,
        "género": "Drama",
        "descripción": "La historia de un anciano que ingresa en una residencia de ancianos y su lucha contra el Alzheimer."
    },
    {
        "título": "La Casa",
        "autor": "Paco Roca",
        "editorial": "Astiberri",
        "año": 2015,
        "género": "Drama",
        "descripción": "La historia de tres hermanos que se reúnen en la casa familiar para decidir qué hacer con ella después de la muerte de su madre."
    },
    {
        "título": "El Juego de la Luna",
        "autor": "Santi Casas",
        "editorial": "Dibbuks",
        "año": 2014,
        "género": "Ciencia ficción",
        "descripción": "En un futuro cercano, un hombre lucha contra el gobierno opresivo y su control sobre la información en la red."
    },
    {
        "título": "El ala rota",
        "autor": "Antonio Altarriba y Kim",
        "editorial": "Norma Editorial",
        "año": 2013,
        "género": "Drama",
        "descripción": "La historia de un hombre que, después de sufrir un accidente, recuerda su vida y reflexiona sobre la muerte."
    },
    {
        "título": "Yo, asesino",
        "autor": "Antonio Altarriba y Keko",
        "editorial": "Norma Editorial",
        "año": 2012,
        "género": "Thriller",
        "descripción": "La historia de un hombre que empieza a escribir sobre su vida como asesino en serie."
    },
    {
        "título": "La Casa",
        "autor": "Paco Roca y Seguridad Social",
        "editorial": "Astiberri",
        "año": 2020,
        "género": "Musical",
        "descripción": "Un relato sobre la música y la amistad, que se desarrolla en una casa que ha sido testigo de la vida de varias generaciones."
    },
    {
        "título": "El gran hotel Budapest",
        "autor": "Wes Anderson y Hugo Guinness",
        "editorial": "Norma Editorial",
        "año": 2015,
        "género": "Comedia",
        "descripción": "Adaptación al cómic de la película homónima de Wes Anderson, que cuenta las aventuras del conserje de un hotel en Europa del Este."
    },
    {
        "título": "Dolores y Lolo",
        "autor": "Jordi Lafebre y Tonino",
        "editorial": "Dibbuks",
        "año": 2019,
        "género": "Drama",
        "descripción": "La historia de dos amigos que se reencuentran después de años y deben enfrentarse a sus problemas y traumas del pasado."
    },
    {
        "título": "La ira del fuego",
        "autor": "Carlos Sisí y Javi Rueda",
        "editorial": "Planeta Cómic",
        "año": 2019,
        "género": "Fantasía",
        "descripción": "Un cómic de aventuras en el que un grupo de personajes se adentra en un mundo de fantasía para detener la propagación del fuego que amenaza con destruirlo todo."
    },
    {
        "título": "Hasta el último hombre",
        "autor": "Robert Venditti y Zack Giallongo",
        "editorial": "Planeta Cómic",
        "año": 2017,
        "género": "Histórico",
        "descripción": "La historia del sargento Alvin York, un héroe de la Primera Guerra Mundial, que luchó en la batalla de Argonne."
    },
    {
        "título": "El largo camino de Clara",
        "autor": "José Luis Munuera",
        "editorial": "Astiberri",
        "año": 2020,
        "género": "Aventuras",
        "descripción": "La historia de una joven que debe luchar por sobrevivir en una época convulsa y hostil, durante la Guerra de los Treinta Años."
    },
    {
        "título": "La estrella del norte",
        "autor": "Javier de Isusi",
        "editorial": "Astiberri",
        "año": 2018,
        "género": "Histórico",
        "descripción": "Una obra que narra la historia del explorador John Rae y su descubrimiento del paso del Noroeste."
    }, { 
        "título": "Bukowsky", 
        "autor": "Javier Lozano", 
        "editorial": "Astiberri", 
        "año": 2021, 
        "género": "Biográfico", 
        "descripción": "Una biografía del escritor Charles Bukowski, que repasa su vida y obra." 
    }, { 
        "título": "El invierno del dibujante", 
        "autor": "Paco Roca", 
        "editorial": "Astiberri", 
        "año": 2010, 
        "género": "Drama", 
        "descripción": "Un relato sobre la creación del cómic en España en los años 50, y la lucha de los autores por conseguir un lugar en la industria del tebeo." 
    }, { 
        "título": "Las meninas", 
        "autor": "Santiago García y Javier Olivares", 
        "editorial": "Astiberri", 
        "año": 2014, 
        "género": "Histórico", 
        "descripción": "Una reinterpretación de la obra de Velázquez, que narra la vida de la corte de Felipe IV y las intrigas que se tejían en ella." 
    }, { 
        "título": "Mundo idiota", 
        "autor": "Guillermo Mordillo", 
        "editorial": "DeBolsillo", 
        "año": 2013, 
        "género": "Humor", 
        "descripción": "Una recopilación de viñetas del humorista gráfico Guillermo Mordillo, conocido por su estilo colorido y absurdo." 
    }, { 
        "título": "Mondrian", 
        "autor": "Luis Bustos", 
        "editorial": "Astiberri", 
        "año": 2022, 
        "género": "Biográfico", 
        "descripción": "Una biografía del pintor neerlandés Piet Mondrian, que explora su vida y obra en el contexto de la vanguardia artística del siglo XX." 
    }

];

//Me conecto a mongoose:
mongoose.connect(process.env.DB_URL,{//aquí nos conectamos a nuestra BBDD en mongo db
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () =>{ //Esto es como un ternario reducido
    const allComics = await comics.find();
    if(allComics.length){
        await comics.collection.drop();
        console.log('Comics borrados');
    } //le he dicho que me busque todas las películas y que me borre los anteriores
}).catch((error) => console.log('Error borrando comics',error)).then(async () => {
    const comicsMaps = arrayComics.map((comic) => new comics(comic));
    await comics.insertMany(comicsMaps);
    console.log('Comics insertados')
}).catch((error) => console.log('Error insertando comics',error))
.finally(() => mongoose.disconnect());
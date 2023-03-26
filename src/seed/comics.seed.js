const mongoose = require('mongoose');
const comics = require('../api/models/comics.models');
const dotenv = require('dotenv');

dotenv.config();

const arrayComics = [
    {
        "title": "El tesoro del Cisne Negro",
        "author": "Paco Roca",
        "editorial": "Astiberri",
        "year": 2018,
        "genre": "Aventuras",
        "descripción": "Un grupo de buceadores en busca de un tesoro perdido en las costas de la Comunidad Valenciana."
    },
    {
        "title": "Las Meninas",
        "author": "Santiago García y Javier Olivares",
        "editorial": "Astiberri",
        "year": 2014,
        "genre": "Histórico",
        "descripción": "Una reimaginación de la vida de Velázquez en la Corte de Felipe IV y su creación de la obra maestra 'Las Meninas'."
    },
    {
        "title": "Los surcos del azar",
        "author": "Paco Roca",
        "editorial": "Astiberri",
        "year": 2013,
        "genre": "Histórico",
        "descripción": "La historia real de la compañía de republicanos españoles que lucharon en la Segunda Guerra Mundial como parte de la Resistencia Francesa."
    },
    {
        "title": "Arrugas",
        "author": "Paco Roca",
        "editorial": "Astiberri",
        "year": 2007,
        "genre": "Drama",
        "descripción": "La historia de un anciano que ingresa en una residencia de ancianos y su lucha contra el Alzheimer."
    },
    {
        "title": "La Casa",
        "author": "Paco Roca",
        "editorial": "Astiberri",
        "year": 2015,
        "genre": "Drama",
        "descripción": "La historia de tres hermanos que se reúnen en la casa familiar para decidir qué hacer con ella después de la muerte de su madre."
    },
    {
        "title": "El Juego de la Luna",
        "author": "Santi Casas",
        "editorial": "Dibbuks",
        "year": 2014,
        "genre": "Ciencia ficción",
        "descripción": "En un futuro cercano, un hombre lucha contra el gobierno opresivo y su control sobre la información en la red."
    },
    {
        "title": "El ala rota",
        "author": "Antonio Altarriba y Kim",
        "editorial": "Norma Editorial",
        "year": 2013,
        "genre": "Drama",
        "descripción": "La historia de un hombre que, después de sufrir un accidente, recuerda su vida y reflexiona sobre la muerte."
    },
    {
        "title": "Yo, asesino",
        "author": "Antonio Altarriba y Keko",
        "editorial": "Norma Editorial",
        "year": 2012,
        "genre": "Thriller",
        "descripción": "La historia de un hombre que empieza a escribir sobre su vida como asesino en serie."
    },
    {
        "title": "La Casa",
        "author": "Paco Roca y Seguridad Social",
        "editorial": "Astiberri",
        "year": 2020,
        "genre": "Musical",
        "descripción": "Un relato sobre la música y la amistad, que se desarrolla en una casa que ha sido testigo de la vida de varias generaciones."
    },
    {
        "title": "El gran hotel Budapest",
        "author": "Wes Anderson y Hugo Guinness",
        "editorial": "Norma Editorial",
        "year": 2015,
        "genre": "Comedia",
        "descripción": "Adaptación al cómic de la película homónima de Wes Anderson, que cuenta las aventuras del conserje de un hotel en Europa del Este."
    },
    {
        "title": "Dolores y Lolo",
        "author": "Jordi Lafebre y Tonino",
        "editorial": "Dibbuks",
        "year": 2019,
        "genre": "Drama",
        "descripción": "La historia de dos amigos que se reencuentran después de años y deben enfrentarse a sus problemas y traumas del pasado."
    },
    {
        "title": "La ira del fuego",
        "author": "Carlos Sisí y Javi Rueda",
        "editorial": "Planeta Cómic",
        "year": 2019,
        "genre": "Fantasía",
        "descripción": "Un cómic de aventuras en el que un grupo de personajes se adentra en un mundo de fantasía para detener la propagación del fuego que amenaza con destruirlo todo."
    },
    {
        "title": "Hasta el último hombre",
        "author": "Robert Venditti y Zack Giallongo",
        "editorial": "Planeta Cómic",
        "year": 2017,
        "genre": "Histórico",
        "descripción": "La historia del sargento Alvin York, un héroe de la Primera Guerra Mundial, que luchó en la batalla de Argonne."
    },
    {
        "title": "El largo camino de Clara",
        "author": "José Luis Munuera",
        "editorial": "Astiberri",
        "year": 2020,
        "genre": "Aventuras",
        "descripción": "La historia de una joven que debe luchar por sobrevivir en una época convulsa y hostil, durante la Guerra de los Treinta Años."
    },
    {
        "title": "La estrella del norte",
        "author": "Javier de Isusi",
        "editorial": "Astiberri",
        "year": 2018,
        "genre": "Histórico",
        "descripción": "Una obra que narra la historia del explorador John Rae y su descubrimiento del paso del Noroeste."
    }, { 
        "title": "Bukowsky", 
        "author": "Javier Lozano", 
        "editorial": "Astiberri", 
        "year": 2021, 
        "genre": "Biográfico", 
        "descripción": "Una biografía del escritor Charles Bukowski, que repasa su vida y obra." 
    }, { 
        "title": "El invierno del dibujante", 
        "author": "Paco Roca", 
        "editorial": "Astiberri", 
        "year": 2010, 
        "genre": "Drama", 
        "descripción": "Un relato sobre la creación del cómic en España en los años 50, y la lucha de los autores por conseguir un lugar en la industria del tebeo." 
    }, { 
        "title": "Las meninas", 
        "author": "Santiago García y Javier Olivares", 
        "editorial": "Astiberri", 
        "year": 2014, 
        "genre": "Histórico", 
        "descripción": "Una reinterpretación de la obra de Velázquez, que narra la vida de la corte de Felipe IV y las intrigas que se tejían en ella." 
    }, { 
        "title": "Mundo idiota", 
        "author": "Guillermo Mordillo", 
        "editorial": "DeBolsillo", 
        "year": 2013, 
        "genre": "Humor", 
        "descripción": "Una recopilación de viñetas del humorista gráfico Guillermo Mordillo, conocido por su estilo colorido y absurdo." 
    }, { 
        "title": "Mondrian", 
        "author": "Luis Bustos", 
        "editorial": "Astiberri", 
        "year": 2022, 
        "genre": "Biográfico", 
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
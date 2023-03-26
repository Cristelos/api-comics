const Comics = require("../models/comics.models");

//Gets
const getComics = async (req, res) => {
    try {
        //GET PAGINADO
      let {page, limit} = req.query;
      const numComics = await Comics.countDocuments();
      limit = limit ? parseInt(limit) : 5;
      if(page && !isNaN(parseInt(page))){
        page = parseInt(page);
        // console.log(page)
        let numPages = numComics % limit > 0 ? numComics / limit + 1 : numComics / limit;
        
        if(page> numPages) page = numPages;
        
        if(page < 1) page = 1;      
  
        const skip = (page - 1) * limit; 
  
        const info = await Comics.find().skip(skip).limit(limit)
        return res.status(200).json(
          {
            info: {
              numTotal: numComics,
              page: page,
              limit: limit,
              nextPage: numPages >= page + 1 ? `/comics?page=${page + 1}&limit=${limit}` : null,
              prevPage: page != 1 ? `/comics?page=${page - 1}&limit=${limit}` : null
            },
            results:info
          }
        )
  
      }else{
        const info = await Comics.find().limit(limit);
        return res.status(200).json({
          info: {
            numTotal: numComics,
            page: 1,
            limit: limit,
            nextPage: numComics > limit ? `/comics?page=2&limit=${limit}` : null,
            prevPage: null
          },
          results: info
        });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const getComicsById = async (req,res) => {
    try {
        const {id} = req.params;
        const comicsSearchById = await Comics.findById(id).populate('comics');
        console.log(comicsSearchById);
        if(!comicsSearchById){
            return res.status(404).json({'message':'Comic not found'})
        }
        return res.status(200).json(comicsSearchById);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getComicsByTitle = async (req,res) => {
    try {
        const {title} = req.params;
        const comicByTitle = await Comics.find({title: title});
        return res.status(200).json(comicByTitle);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getComicsByGenre = async (req,res) => {
    try {
        const {genre} = req.params;
        const comicByGenre = await Comics.find({genre: genre});
        return res.status(200).json(comicByGenre);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getComicsByYear = async (req,res) => {
    try {
        const {year} = req.params;
        const comicByYear = await Comics.find({year:year});
        return res.status(200).json(comicByYear);
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Post
const postComics = async (req,res) => {
    try {
        const newComic = new Comics(req.body);

        const createComics = await newComic.save();
        return res.status(201).json(createComics);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Put
const putComics = async (req,res) => {
    console.log(req.file);
    try {
        const {id} = req.params;
        const putComic = new Comics(req.body);
        putComic._id = id;

        const updateComic = await Comics.findOneAndUpdate(id, putComic,{new: true});
        if(!updateComic){ 
            return res.status(404).json({"message":"Comic not found"});
        }
        return res.status(200).json(updateComic);
    } catch (error) {
        return res.status(500).json(error);
    }
};

//Delete
const deleteComics = async (req,res) => {
    try {
        const {id} = req.params;//Le pasamos el id
        const deleteComic = await Comics.findOneAndDelete(id);//Le decimos que borramos el elemento 
        if(!deleteMComic){  //Si no existiera devolvemos 404
            return res.status(404).json({"message":"Movie not found"});
        }
        return res.status(200).json(deleteComic);// y si existiera lo eliminamos 
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {getComics, postComics, putComics, deleteComics,getComicsById,getComicsByTitle,getComicsByGenre,getComicsByYear};  
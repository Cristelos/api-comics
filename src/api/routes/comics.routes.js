const express = require("express");
const upload = require('../middlewares/upload.file');
const router = express.Router();

const {
  getComics,
  postComics,
  getComicsById,
  getComicsByTitle,
  getComicsByGenre,
  getComicsByYear,
  putComics,
  deleteComics
} = require("../controllers/comics.controllers");

router.get("/", getComics);

router.get("/id/:id", getComicsById);

router.get("/title/:título", getComicsByTitle);

router.get("/genre/:genre", getComicsByGenre);

router.get("/year/:year", getComicsByYear);

router.post("/", upload.single('image'), postComics);

router.put("/:id", upload.single('image'), putComics);

router.delete("/:id", deleteComics);

module.exports = router;

const express = require("express");

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

router.get("/title/:title", getComicsByTitle);

router.get("/genre/:genre", getComicsByGenre);

router.get("/year/:year", getComicsByYear);

router.post("/", postComics);

router.put("/:id", putComics);

router.delete("/:id", deleteComics);

module.exports = router;

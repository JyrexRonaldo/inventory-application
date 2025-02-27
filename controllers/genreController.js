const db = require("../db/queries");

async function getGenrePage(req, res) {
  const genresData = await db.getAllGenres();
  res.render("pages/genres", { genresData });
}

function getForm(req, res) {
  res.render("forms/genre-form");
}

async function addNewGenre(req, res) {
  await db.addNewGenre(req.body.genreName)
  res.redirect("/genres");
}

async function getItem(req,res) {
  const genreItem = await db.getGenreItem(req.params.genreId)
  res.render("items/genre-item", {genreItem})
  
}

module.exports = { getGenrePage, getForm, addNewGenre, getItem };

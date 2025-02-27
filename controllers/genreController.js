const db = require("../db/queries");

async function getGenrePage(req, res) {
  const genresData = await db.getAllGenres();
  res.render("pages/genres", { genresData });
}

function getForm(req, res) {
  res.render("forms/genre-form", {edit: false});
}

async function addNewGenre(req, res) {
  await db.addNewGenre(req.body.genreName)
  res.redirect("/genres");
}

async function getItem(req,res) {
  const genreItem = await db.getGenreItem(req.params.genreId)
  res.render("items/genre-item", {genreItem}) 
}

async function getEditForm(req, res) {
  const genreItem = await db.getGenreItem(req.params.genreId)
  res.render("forms/genre-form", {edit : true, genreItem})
}

async function editGenre(req,res) {
  const newGenreInfo =  req.body.genreName
  const genreId = req.params.genreId
  db.editGenre(newGenreInfo, genreId)
  res.redirect(`/genres/${genreId}`)
}

module.exports = { getGenrePage, getForm, addNewGenre, getItem, getEditForm, editGenre };

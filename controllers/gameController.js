const db = require("../db/queries");

async function getGamesPage(req, res) {
  const gamesData = await db.getGamesPageInfo();
  res.render("pages/games", { gamesData });
}

async function getForm(req, res) {
  const allGenres = await db.getAllGenres();
  const allDevelopers = await db.getAllDevelopers();
  res.render("forms/game-form", { allGenres, allDevelopers });
}

function getItem(req, res) {
  res.render("items/game-item", { title: "game" });
}

async function addNewGame(req, res) {
  const { title, releaseDate, quantity, genre, developer } = req.body;
  await db.addNewGame(title, releaseDate, quantity, genre, developer)
  res.redirect("/games");
}

module.exports = { getGamesPage, getForm, getItem, addNewGame };

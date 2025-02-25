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

module.exports = { getGamesPage, getForm, getItem };

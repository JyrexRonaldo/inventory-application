const db = require("../db/queries")

async function getGamesPage(req, res) {
  const gamesData = await db.getGamesPageInfo()
  res.render("pages/games", {gamesData} );
}

async function getForm(req, res) {
  const allGenres = await db.getAllGenres()
  res.render("forms/game-form", {allGenres});
}

function getItem(req, res) {
  res.render("items/game-item", { title: "game" });
}

module.exports = { getGamesPage, getForm, getItem };

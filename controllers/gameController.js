const db = require("../db/queries")

async function getGamesPage(req, res) {
  const gamesData = await db.getGamesPageInfo()
  res.render("pages/games", {gamesData} );
}

function getForm(req, res) {
  res.render("forms/game-form");
}

function getItem(req, res) {
  res.render("items/game-item", { title: "game" });
}

module.exports = { getGamesPage, getForm, getItem };

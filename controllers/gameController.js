function getGamesPage(req, res) {
  res.render("pages/games");
}

function getForm(req, res) {
  res.render("forms/game-form");
}

function getItem(req, res) {
  res.render("items/game-item", { title: "game" });
}

module.exports = { getGamesPage, getForm, getItem };

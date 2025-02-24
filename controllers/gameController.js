function getGamesPage(req, res) {
  res.render("pages/games");
}

function getForm(req, res) {
  res.render("forms/game-form");
}

module.exports = { getGamesPage, getForm };

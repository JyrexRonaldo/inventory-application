const db = require("../db/queries");

async function getHomePage(req, res) {
  const gameCount =  await db.getGamesCount();
  const developerCount = await db.getDevelopersCount();
  const genreCount = await db.getGenresCount();
  res.render("pages/index", { gameCount, developerCount, genreCount });
}

module.exports = { getHomePage };

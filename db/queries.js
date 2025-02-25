const pool = require("./pool");

async function getGamesCount() {
  const { rows } = await pool.query("SELECT COUNT(*) FROM games;");
  return rows[0].count;
}

async function getDevelopersCount() {
  const { rows } = await pool.query("SELECT COUNT(*) FROM developers;");
  return rows[0].count;
}

async function getGenresCount() {
  const { rows } = await pool.query("SELECT COUNT(*) FROM genres;");
  return rows[0].count;
}

async function getGamesPageInfo() {
  const { rows } = await pool.query("SELECT g.title, d.name AS developers, ge.name AS genre, g.quantity FROM games as g INNER JOIN games_developers as gd ON g.id = gd.game_id INNER JOIN developers as d ON gd.developer_id = d.id INNER JOIN games_genres AS gg  ON g.id = gg.game_id INNER JOIN genres AS ge ON gg.genre_id = ge.id;");
  return rows;
}

module.exports = {
  getGamesCount,
  getDevelopersCount,
  getGenresCount,
  getGamesPageInfo
};

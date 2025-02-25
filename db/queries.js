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

module.exports = {
  getGamesCount,
  getDevelopersCount,
  getGenresCount
};

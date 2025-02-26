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
  const { rows } = await pool.query(
    `SELECT g.id, g.title, d.name AS developers, ge.name AS genre, g.quantity 
    FROM games as g 
    INNER JOIN games_developers as gd ON g.id = gd.game_id 
    INNER JOIN developers as d ON gd.developer_id = d.id 
    INNER JOIN games_genres AS gg  ON g.id = gg.game_id 
    INNER JOIN genres AS ge ON gg.genre_id = ge.id;`
  );
  return rows;
}

async function getAllDevelopers() {
  const { rows } = await pool.query("SELECT * FROM developers;");
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres;");
  return rows;
}

async function addNewGenre(name) {
  await pool.query("INSERT INTO genres (name) VALUES ($1);", [name]);
}

async function addNewDeveloper(name, country, headquaters, website) {
  await pool.query(
    `INSERT INTO developers (name, country, headquaters, website) 
VALUES
  ($1,$2,$3,$4)`,
    [name, country, headquaters, website]
  );
}

async function addNewGame(title, releaseDate, quantity, genre, developer) {
  await pool.query(
    `INSERT INTO games (title, release_date, quantity) VALUES ($1, $2, $3)`,
    [title, releaseDate, quantity]
  );
  const { rows } = await pool.query(
    "SELECT games_id_seq.last_value FROM games_id_seq;"
  );
  const newGameId = +rows[0].last_value;
  await pool.query(
    "INSERT INTO games_genres (game_id, genre_id) VALUES ($1,$2)",
    [newGameId, genre]
  );
  await pool.query(
    `INSERT INTO games_developers (game_id, developer_id) VALUES ($1,$2);`,
    [newGameId, developer]
  );
}

async function getGameItem(gameId) {
  const { rows } = await pool.query(
    `SELECT g.id, g.title, g.release_date, d.name AS developers, ge.name AS genre, g.quantity 
    FROM games as g
    INNER JOIN games_developers as gd ON g.id = gd.game_id 
    INNER JOIN developers as d ON gd.developer_id = d.id 
    INNER JOIN games_genres AS gg  ON g.id = gg.game_id 
    INNER JOIN genres AS ge ON gg.genre_id = ge.id 
    WHERE g.id = $1;`,
    [gameId]
  );
  return rows[0]
}

module.exports = {
  getGamesCount,
  getDevelopersCount,
  getGenresCount,
  getGamesPageInfo,
  getAllDevelopers,
  getAllGenres,
  addNewGenre,
  addNewDeveloper,
  addNewGame,
  getGameItem,
};

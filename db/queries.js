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
    `SELECT g.id, g.title, g.release_date, d.name AS developers, ge.name AS genre, g.quantity, ge.id AS genreid
    FROM games as g
    INNER JOIN games_developers as gd ON g.id = gd.game_id 
    INNER JOIN developers as d ON gd.developer_id = d.id 
    INNER JOIN games_genres AS gg  ON g.id = gg.game_id 
    INNER JOIN genres AS ge ON gg.genre_id = ge.id 
    WHERE g.id = $1;`,
    [gameId]
  );
  return rows[0];
}

async function getDeveloperItem(developerId) {
  const { rows } = await pool.query(
    `SELECT * FROM developers WHERE developers.id = $1;`,
    [developerId]
  );
  return rows[0];
}

async function getGenreItem(genreId) {
  const { rows } = await pool.query(
    "SELECT * FROM genres WHERE genres.id = $1;",
    [genreId]
  );
  return rows[0];
}

async function editGenre(newInfo, genreId) {
  await pool.query(`UPDATE genres SET name = $1 WHERE genres.id = $2;`, [
    newInfo,
    genreId,
  ]);
}

async function editDeveloper(newInfo, genreId) {
  await pool.query(
    `UPDATE developers SET name = $1, country = $2, headquaters = $3, website = $4  WHERE developers.id = $5;`,
    [
      newInfo.name,
      newInfo.country,
      newInfo.headquaters,
      newInfo.website,
      genreId
    ]
  );
}

async function editGame(newInfo, gameId) {
  await pool.query(`UPDATE games SET title = $1, release_date = $2, quantity = $3 WHERE games.id = $4;`,[newInfo.name, newInfo.releaseDate, +newInfo.quantity, gameId])
  await pool.query(`UPDATE games_genres SET genre_id = $1 WHERE game_id = $2;`, [newInfo.genre, gameId])
  await pool.query(`UPDATE games_developers SET developer_id = $1 WHERE game_id = $2;`, [newInfo.developer, gameId])
}

async function deleteGenre(genreId) {
  // await pool.query(`DELETE FROM games WHERE id IN (SELECT game_id FROM games_genres WHERE genre_id = $1);`,[genreId])
  await pool.query(`DELETE FROM genres WHERE id = $1;`, [genreId])
}

async function deleteDeveloper(developerId) {
  await pool.query(`DELETE FROM developers WHERE id = $1;`, [developerId])
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
  getDeveloperItem,
  getGenreItem,
  editGenre,
  editDeveloper,
  editGame,
  deleteGenre,
  deleteDeveloper,
};

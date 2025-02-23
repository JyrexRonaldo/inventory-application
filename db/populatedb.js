const { argv } = require("node:process")

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS games (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title VARCHAR ( 50 ),
  release_date TIMESTAMP,
  quantity INTEGER
);

CREATE TABLE IF NOT EXISTS developers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 50 ),
  country VARCHAR ( 50 ),
  headquaters VARCHAR ( 50 ),
  website VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 50 )
);

CREATE TABLE IF NOT EXISTS games_developers (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  game_id INTEGER REFERENCES games(id),
  developer_id INTEGER REFERENCES developers(id)
);

CREATE TABLE IF NOT EXISTS games_genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  game_id INTEGER REFERENCES games(id),
  genre_id INTEGER REFERENCES genres(id)
);


INSERT INTO games (title, release_date, quantity) 
VALUES
  ('Grand Theft Auto V', '2013-09-17', 25 );
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: argv[2],
  });
  console.log(argv[2])
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

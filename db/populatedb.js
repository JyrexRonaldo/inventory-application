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
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
  developer_id INTEGER REFERENCES developers(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS games_genres (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
  genre_id INTEGER REFERENCES genres(id) ON DELETE CASCADE
);

INSERT INTO games (title, release_date, quantity) 
VALUES
  ('Grand Theft Auto V', '2013-09-17', 25 ),
  ('Dante Inferno', '2010-02-04', 235 ),
  ('Mass Effect 3', '2012-03-06', 13 ),
  ('Devil May Cry 4', '2008-01-31', 65 ),
  ('Metal Gear Solid', '1998-09-03', 5 );

  INSERT INTO developers (name, country, headquaters, website) 
VALUES
  ('Rockstar', 'United States of America', 'New York City', 'https://www.rockstargames.com/'),
  ('Electronic Arts Inc.', 'United States of America', 'Califonia', 'https://www.ea.com/'),
  ('Capcom', 'Japan', '	Chūō-ku, Osaka', 'http://www.capcom.com/'),
  ('Motive Studio', 'Canada', 'Montreal', 'https://www.ea.com/studios/motive'),
 ('Konami', 'Japan', 'Ginza, Chūō, Tokyo', 'https://www.konami.com/en/');

  INSERT INTO genres (name) 
VALUES
  ('Action'),
  ('Stealth'),
  ('hack and slash');

  INSERT INTO games_developers (game_id, developer_id) 
VALUES
  (1,1),
  (2,2),
  (3,2),
  (4,3),
  (5,5);

  INSERT INTO games_genres (game_id, genre_id) 
VALUES
  (1,1),
  (2,1),
  (3,1),
  (4,3),
  (5,2);
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

const db = require("../db/queries")

async function getGenrePage(req, res) {
  const genresData = await db.getGenresPageInfo()
    res.render("pages/genres", {genresData});
  }

  function getForm(req, res) {
  res.render("forms/genre-form");
  }
  
  module.exports = { getGenrePage, getForm };
  
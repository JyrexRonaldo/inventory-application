function getGenrePage(req, res) {
    res.render("pages/genres");
  }

  function getForm(req, res) {
  res.render("forms/genre-form");
  }
  
  module.exports = { getGenrePage, getForm };
  
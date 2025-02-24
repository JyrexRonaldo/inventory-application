function getDevelopersPage(req, res) {
  res.render("pages/developers");
}

function getForm(req, res) {
  res.render("forms/developer-form");
}

module.exports = { getDevelopersPage, getForm };

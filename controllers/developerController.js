function getDevelopersPage(req, res) {
  res.render("pages/developers");
}

function getForm(req, res) {
  // res.render("forms/developer-form");
  res.render("items/developer-item.ejs", {title: "game"});
}

module.exports = { getDevelopersPage, getForm };

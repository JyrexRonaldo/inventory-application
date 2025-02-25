 const db = require("../db/queries")

async function getDevelopersPage(req, res) {
  const developersData = await db.getAllDevelopers()
  res.render("pages/developers", {developersData});
}

function getForm(req, res) {
  res.render("forms/developer-form");
}

module.exports = { getDevelopersPage, getForm };

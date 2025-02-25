 const db = require("../db/queries")

async function getDevelopersPage(req, res) {
  const developersData = await db.getDevelopersPageInfo()
  console.log(developersData)
  res.render("pages/developers", {developersData});
}

function getForm(req, res) {
  // res.render("forms/developer-form");
  res.render("items/developer-item.ejs", {title: "game"});
}

module.exports = { getDevelopersPage, getForm };

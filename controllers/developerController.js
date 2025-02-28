 const db = require("../db/queries")

async function getDevelopersPage(req, res) {
  const developersData = await db.getAllDevelopers()
  res.render("pages/developers", {developersData});
}

function getForm(req, res) {
  res.render("forms/developer-form");
}

async function addNewDeveloper(req,res) {
  const {name, country, headquaters, website}  = req.body;
  await db.addNewDeveloper(name, country, headquaters, website)
  res.redirect("/developers")
}

module.exports = { getDevelopersPage, getForm, addNewDeveloper };

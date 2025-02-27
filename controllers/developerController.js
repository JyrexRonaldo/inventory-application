 const db = require("../db/queries")

async function getDevelopersPage(req, res) {
  const developersData = await db.getAllDevelopers()
  res.render("pages/developers", {developersData});
}

function getForm(req, res) {
  res.render("forms/developer-form", {edit: false});
}

async function addNewDeveloper(req,res) {
  const {name, country, headquaters, website}  = req.body;
  await db.addNewDeveloper(name, country, headquaters, website)
  res.redirect("/developers")
}

async function getItem(req,res) {
    const developerItem = await db.getDeveloperItem(req.params.developerId)
   res.render("items/developer-item", {developerItem}) 
}

async function getEditForm(req,res) {
  const developerItem = await db.getDeveloperItem(req.params.developerId)
  res.render("forms/developer-form", { edit: true, developerItem })
}

async function editDeveloper(req,res) {
  const newDeveloperInfo = req.body
  const developerId = req.params.developerId
  await db.editDeveloper(newDeveloperInfo, developerId)
  res.redirect(`/developers/${developerId}`)
}

module.exports = { getDevelopersPage, getForm, addNewDeveloper, getItem, getEditForm, editDeveloper };

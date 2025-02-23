const { Router } = require("express")
const developerRouter = Router()
const developerController = require("../controllers/developerController")

developerRouter.get("/", developerController.getDevelopersPage)

module.exports = developerRouter
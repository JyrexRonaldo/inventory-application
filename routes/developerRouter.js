const { Router } = require("express")
const developerRouter = Router()
const developerController = require("../controllers/developerController")

developerRouter.get("/", developerController.getDevelopersPage)
developerRouter.get("/add", developerController.getForm)

module.exports = developerRouter
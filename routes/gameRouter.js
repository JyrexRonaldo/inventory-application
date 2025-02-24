const { Router } = require("express")
const gameRouter = Router()
const gameController = require("../controllers/gameController")

gameRouter.get("/", gameController.getGamesPage)
gameRouter.get("/add", gameController.getForm)

module.exports = gameRouter
const { Router } = require("express")
const gameRouter = Router()
const gameController = require("../controllers/gameController")

gameRouter.get("/", gameController.getGamesPage)

module.exports = gameRouter
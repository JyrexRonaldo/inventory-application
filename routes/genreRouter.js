const { Router } = require("express")
const genreRouter = Router()
const genreController = require("../controllers/genreController")

genreRouter.get("/", genreController.getGenrePage)
genreRouter.get("/add", genreController.getForm)

module.exports = genreRouter
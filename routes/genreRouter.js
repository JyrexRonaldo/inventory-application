const { Router } = require("express")
const genreRouter = Router()
const genreController = require("../controllers/genreController")

genreRouter.get("/", genreController.getGenrePage)

module.exports = genreRouter
const { Router } = require("express");
const genreRouter = Router();
const genreController = require("../controllers/genreController");

genreRouter.get("/", genreController.getGenrePage);
genreRouter
  .route("/add")
  .get(genreController.getForm)
  .post(genreController.addNewGenre);

module.exports = genreRouter;

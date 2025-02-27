const { Router } = require("express");
const genreRouter = Router();
const genreController = require("../controllers/genreController");

genreRouter.get("/", genreController.getGenrePage);
genreRouter
  .route("/add")
  .get(genreController.getForm)
  .post(genreController.addNewGenre);
genreRouter.get("/:genreId", genreController.getItem);
genreRouter
  .route("/:genreId/edit")
  .get(genreController.getEditForm)
  .post(genreController.editGenre);

module.exports = genreRouter;

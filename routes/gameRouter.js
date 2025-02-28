const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gameController");

gameRouter.get("/", gameController.getGamesPage);
gameRouter
  .route("/add")
  .get(gameController.getForm)
  .post(gameController.addNewGame);
gameRouter.get("/:gameId", gameController.getItem);
gameRouter
  .route("/:gameId/edit")
  .get(gameController.getEditForm)
  .post(gameController.editGame);

module.exports = gameRouter;

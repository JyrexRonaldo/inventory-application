const { Router } = require("express");
const gameRouter = Router();
const gameController = require("../controllers/gameController");

gameRouter.get("/", gameController.getGamesPage);
gameRouter
  .route("/add")
  .get(gameController.getForm)
  .post(gameController.addNewGame);
gameRouter.get("/item", gameController.getItem);

module.exports = gameRouter;

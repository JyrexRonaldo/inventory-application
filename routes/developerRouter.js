const { Router } = require("express");
const developerRouter = Router();
const developerController = require("../controllers/developerController");

developerRouter.get("/", developerController.getDevelopersPage);
developerRouter
  .route("/add")
  .get(developerController.getForm)
  .post(developerController.addNewDeveloper);

module.exports = developerRouter;

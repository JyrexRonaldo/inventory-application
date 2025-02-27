const { Router } = require("express");
const developerRouter = Router();
const developerController = require("../controllers/developerController");

developerRouter.get("/", developerController.getDevelopersPage);
developerRouter
  .route("/add")
  .get(developerController.getForm)
  .post(developerController.addNewDeveloper);
developerRouter.get("/:developerId", developerController.getItem);
developerRouter
  .route("/:developerId/edit")
  .get(developerController.getEditForm)
  .post(developerController.editDeveloper);

module.exports = developerRouter;

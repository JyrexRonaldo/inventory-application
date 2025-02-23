require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const gameRouter = require("./routes/gameRouter")
const genreRouter = require("./routes/genreRouter")
const developerRouter = require("./routes/developerRouter")
const app = express();
const path = require("node:path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)
app.use("/games", gameRouter)
app.use("/developers", developerRouter)
app.use("/genres", genreRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Express app running at port ${PORT}`);
});
const express = require("express");
const app = express();
const Movierouter = require("./routes/routesBooks");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/books", Movierouter);

app.get("*", (req, res) => {
  res.status(404).send({ message: "Upsss! Táto stránka neexistuje!" });
});

app.listen(3000, () => {
  console.log("Server spustený na porte 3000");
});

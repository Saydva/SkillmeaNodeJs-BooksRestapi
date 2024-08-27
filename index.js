const express = require("express");
const app = express();
let books = require("./booksArr");

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(3000, () => {
  console.log("Server spustený na porte 3000");
});

console.log(books);

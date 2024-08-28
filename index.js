const express = require("express");
const app = express();
const arr = require("./booksArr");
const { v4: uuid } = require("uuid");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/books", (req, res) => {
  res.send(["arr length is: " + arr.length, arr]);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const result = arr.find((element) => {
    return element.id == id;
  });
  res.send(result);
});

app.post("/books/", (req, res) => {
  const { title, type, price } = req.body;
  if (!title) {
    res.status(404).send({ message: `no ${title}` });
  } else {
    let newBook = {
      title,
      type,
      price,
    };

    newBook = {
      id: uuid(),
      title: title,
      type: type,
      price: price,
    };

    arr.push(newBook);
    res.status(201).send(newBook);
  }
});

app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, type, price } = req.body;
  let result = arr.find((element) => {
    return element.id == id;
  });
  if (title) {
    (result.title = title),
      res.send({ message: `book is updated with ${result.title}` });
  }
  if (type) {
    (result.type = type),
      res.send({ message: `book is updated with ${result.type}` });
  } else {
    res.send({ message: "please define some of the atributes" });
  }
});

app.listen(3000, () => {
  console.log("Server spustený na porte 3000");
});

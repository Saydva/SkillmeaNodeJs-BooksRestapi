const express = require("express");
const app = express();
let books = require("./booksArr");
const { v4: uuid } = require("uuid");

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/books", (req, res) => {
  res.send(["books length is: " + books.length, books]);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const result = books.find((element) => {
    return element.id == id;
  });
  res.send(result);
});

app.post("/books/", (req, res) => {
  const { title, type, price } = req.body;
  if (title && type && price) {
    let newBook = {
      id: uuid(),
      title: title,
      type: type,
      price: price,
    };
    books.push(newBook);
    res.status(201).send(newBook);
  } else {
    res.status(400).send({ message: `Eror .Please define atributes!!` });
  }
});

app.patch("/books/:id", (req, res) => {
  const { type, price } = req.body;
  const { id } = req.params;
  const result = books.find((element) => {
    return element.id == id;
  });
  if (price) {
    (result.price = price),
      res.send({
        message: `kniha ${result.title} ma novu cenu : ${result.price} `,
      });
  } else if (type) {
    (result.type = type),
      res.send({
        message: `kniha ${result.title} je odteraz : ${result.type} `,
      });
  } else {
    res.send({ message: "please define some of the atributes" });
  }
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  books = books.filter((book) => book.id !== id);
  res.send({ message: `film s${id} bol vymazany  ${books.length}` });
});

app.get("*", (req, res) => {
  res.status(404).send({ message: "Upsss! Táto stránka neexistuje!" });
});

app.listen(3000, () => {
  console.log("Server spustený na porte 3000");
});

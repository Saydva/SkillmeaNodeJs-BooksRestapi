const express = require("express");
const app = express();
const arr = require("./booksArr");
const uid = arr.uid;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/books", (req, res) => {
  res.send(arr);
});

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const result = arr.find((element) => {
    return element.id == id;
  });
  res.send(result);
});

app.post("/books/", (req, res) => {
  const title = req.params;
  const newBook = {
    id: 6,

    title,
  };
  if (!title) {
    res.status(404).send({ message: `${title}` });
  } else {
    newBook.title = title;

    arr.books.push(newBook);
    res.status(201).send({ message: "new book is created" });
  }
});

app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  res.send({ message: `book is updated with ${id}` });
});

app.listen(3000, () => {
  console.log("Server spustený na porte 3000");
});

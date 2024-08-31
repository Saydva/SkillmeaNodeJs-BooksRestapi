const { getAllBooks } = require("../models/bookArrModel");
const { bookDelete } = require("../models/bookArrModel");

const { result } = require("../models/bookArrModel");
const { createNewBook } = require("../models/bookArrModel");

const getMovie = (req, res) => {
  res.send(getAllBooks());
};

const getOne = (req, res) => {
  const { id } = req.params;
  let succes = result(id);
  if (succes) {
    res.send(succes);
  } else {
    res.send({ message: " Boook not find" });
  }
};

const postNew = (req, res) => {
  const { title, type, price } = req.body;
  if (title && type && price) {
    const book = createNewBook(title, type, price);
    res.status(201).send(book);
  } else {
    res.status(400).send({ message: `Eror .Please define atributes!!` });
  }
};

const patchBook = (req, res) => {
  const { type, price } = req.body;
  const { id } = req.params;
  let succes = result(id);
  if (price) {
    (succes.price = price),
      res.send({
        message: `kniha ${succes.title} ma novu cenu : ${succes.price} `,
      });
  } else if (type) {
    (succes.type = type),
      res.send({
        message: `kniha ${succes.title} je odteraz : ${succes.type} `,
      });
  } else {
    res.send({ message: "please define some of the atributes" });
  }
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const find = result(id);
  if (find) {
    bookDelete(id);
    res.send({ message: `Knih s nazvom ${id} bola vymazana` });
  } else {
    res.send("not found");
  }
};

module.exports = {
  getMovie,
  getOne,
  postNew,
  patchBook,
  deleteBook,
};

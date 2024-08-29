const express = require("express");
let books = require("../booksArr");
const { v4: uuid } = require("uuid");

const getMovie = (req, res) => {
  res.send(["books length is: " + books.length, books]);
};

const getOne = (req, res) => {
  const { id } = req.params;
  const result = books.find((element) => {
    return element.id == id;
  });
  if (result) {
    res.send(result);
  } else {
    res.send({ message: " Bokk not find" });
  }
};

const postNew = (req, res) => {
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
};

const patchBook = (req, res) => {
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
};

const deleteBook = (req, res) => {
  const { id } = req.params;
  const result = books.find((element) => {
    return element.id == id;
  });
  if (result) {
    books = books.filter((book) => book.id !== id);
    res.send({ message: `film s${id} bol vymazany  ${books.length}` });
  } else {
    res.send({ message: "Book with this id dont exist" });
  }
};

module.exports = {
  getMovie,
  getOne,
  postNew,
  patchBook,
  deleteBook,
};

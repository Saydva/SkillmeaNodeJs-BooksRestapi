const { v4: uuid } = require("uuid");

let books = [
  {
    id: 1,
    type: "Brožovaná",
    title: "Nové pohledy na neinvazivní laser",
    price: 12.01,
  },
  { id: uuid(), type: "Tlačená", title: "Pierko na vode", price: 15.29 },
  { id: uuid(), type: "E-kniha", title: "Prekliata", price: 12.27 },
  { id: uuid(), type: "Pevná šitá väzba", title: "Červený stan", price: 6.99 },
];

module.exports = books;

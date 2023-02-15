import { inventory } from "./inventory.js";

// ------------------ Opdracht 1a -------------------

// const tvNamesType = inventory.map((tvtype) => tvtype.type);
// console.table(tvNamesType);

// ------------------ Opdracht 1b - tv's all sold-out -------------------

const tvSoldOut = inventory.filter((soldOut) => soldOut.originalStock - soldOut.sold === 0);
// console.table(tvSoldOut);

// ------------------ Opdracht 1c - tv's with ambi-light -------------------

// filter-method geeft true - wil je false dan voeg je ! voor de variable toe

const tvAmbi = inventory.filter((ambi) => ambi.options.ambiLight);

// console.table(tvAmbi);

// ------------------ Opdracht 1d - tv's sorting -------------------

// sort tv from low to highest price

const sortPrice = inventory.sort((a,b) => a.price - b.price);

// console.table(sortPrice);


export { tvSoldOut, tvAmbi, sortPrice };
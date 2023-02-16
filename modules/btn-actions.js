import { inventory } from "./inventory.js";


// ------------------ Opdracht 1a -------------------

// const tvNamesType = inventory.map((tvtype) => tvtype.type);
// console.table(tvNamesType);

// ------------------ Opdracht 1b - tv's all sold-out -------------------

function handleTvSoldOut() {
  // console.log(e.target);
  const tvSoldOut = inventory.filter((soldOut) => soldOut.originalStock - soldOut.sold === 0);

  return tvSoldOut;

}

// console.table(handleTvSoldOut());

// ------------------ Opdracht 1c - tv's with ambi-light -------------------

// filter-method geeft true - wil je false dan voeg je ! voor de variable toe

function handleTvAmbi() {
  // console.log(e.target);
  const tvAmbi = inventory.filter((ambi) => ambi.options.ambiLight);

  return tvAmbi;

}

// console.table(handleTvAmbi());

// ------------------ Opdracht 1d - tv's sorting -------------------

function handleTvSortPrice() {

const sortedTvPrice = inventory.sort((a,b) => a.price - b.price);

return sortedTvPrice
}

// console.table(handleTvSortPrice());

export { handleTvSoldOut, handleTvAmbi, handleTvSortPrice };
// ------------------ Opdracht 1a -------------------

// const tvNamesType = inventory.map((tvtype) => tvtype.type);
// console.table(tvNamesType);

// ------------------ Opdracht 1b - tv's all sold-out -------------------

function handleTvSoldOut(arr) {
  
 return arr.filter((soldOut) => soldOut.originalStock - soldOut.sold === 0);

}

// console.table(handleTvSoldOut());

// ------------------ Opdracht 1c - tv's with ambi-light -------------------

// filter-method geeft true - wil je false dan voeg je ! voor de variable toe

function handleTvAmbi(arr) {
  // console.log(e.target);
  return arr.filter((ambi) => ambi.options.ambiLight);

}

// console.table(handleTvAmbi());

// ------------------ Opdracht 1d - tv's sorting -------------------

function handleTvSortPrice(arr) {

arr.sort((a,b) => a.price - b.price);

}


// console.table(handleTvSortPrice(inventory));

export { handleTvSoldOut, handleTvAmbi, handleTvSortPrice };
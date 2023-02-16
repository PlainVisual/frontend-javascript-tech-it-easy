// Modules
import { inventory } from "./inventory.js";
import { tvSoldStock, tvStock, tvInStock } from "./stockamount.js";
// import { handleTvSoldOut, handleTvAmbi, handleTvSortPrice } from "./btn-actions.js";
import { TvSpecAll } from "./tv-instore-totall.js";
// import { detailsTv, StoreDetails, dataInStore, priceTv, screenSizeTv, TvSpecification } from "./functions.js";

// ---------------------- Variables StockAmount Elementen die in de DOM komen -------------------

//  totalen uitverkocht uitgedrukt in integers
const tvSoldFromStock = document.querySelector(".numb_sold-stock");
tvSoldFromStock.innerHTML = `${tvSoldStock}`;
// console.log(tvSoldFromStock);

//  totalen ingekocht uitgedrukt in integers
const tvInventoryStock = document.querySelector(".numb_inventory");
tvInventoryStock.innerHTML = `${tvStock}`
// console.log(tvInventoryStock);

//  totalen hoeveel nog verkopen uitgedrukt in integers
const tvCurrentStock = document.querySelector(".numb_current");
tvCurrentStock.innerHTML =  `${tvInStock}`;
// console.log(tvCurrentStock);

// ------------------ Bonusopdracht sorteer laagste prijs -------------------

const btnSortPrice = document.getElementById('btn-sort');

function handleTvSortPrice(e) {
  console.log(e.target);
const sortedInventory = inventory.sort((a,b) => a.price - b.price);
const sortedTvSpecs = TvSpecAll(sortedInventory);
return tvTotal.innerHTML = `${sortedTvSpecs}`;
}

btnSortPrice.addEventListener('click', handleTvSortPrice);

// ------------------ Bonusopdracht selectie Ambilight TV -------------------

const btnAmbi = document.getElementById('btn-ambi');

function handleTvAmbi(e) {
  console.log(e.target);
  const sortedTvAmbi = inventory.filter((ambi) => ambi.options.ambiLight);
  const sortedWithAmbi = TvSpecAll(sortedTvAmbi);
  return tvTotal.innerHTML = `${sortedWithAmbi}`;

}

btnAmbi.addEventListener('click', handleTvAmbi);

// ------------------ Bonusopdracht TV's uitverkocht -------------------

function handleTvSoldOut(e) {
  console.log(e.target);
  const sortedTvSoldOut = inventory.filter((soldOut) => soldOut.originalStock - soldOut.sold === 0);
  const sortedSoldOutTv = TvSpecAll(sortedTvSoldOut);
  return tvTotal.innerHTML = `${sortedSoldOutTv}`;

}

const btnSoldOut = document.getElementById('btn-sold');
btnSoldOut.addEventListener('click', handleTvSoldOut);


// ------------------ Opdracht 4e - zie tv-instore-total.js ------------------

const tvTotal = document.querySelector(".content-list-tv");
tvTotal.innerHTML = `${TvSpecAll(inventory)}`;
// console.log(tvTotal);
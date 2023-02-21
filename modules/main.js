// Modules
import { inventory } from "./inventory.js";
import { tvSoldStock, tvStock, tvInStock } from "./stockamount.js";
import { handleTvSoldOut, handleTvAmbi, handleTvSortPrice } from "./btn-actions.js";
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


// ------------------ Opdracht 4e Toon totale lijst TV's - zie tv-instore-total.js ------------------

const tvTotal = document.querySelector(".content-list-tv");
tvTotal.innerHTML = `${TvSpecAll(inventory)}`;

// ------------------ Bonusopdracht sorteer laagste prijs -------------------

const btnSortPrice = document.getElementById('btn-sort');

function TvSortPrice() {
  
  handleTvSortPrice(inventory);
  TvSpecAll(inventory);

}

btnSortPrice.addEventListener('click', TvSortPrice);

// ------------------ Bonusopdracht selectie Ambilight TV -------------------

const btnAmbi = document.getElementById('btn-ambi');

function filterTvAmbi() {
  
  const ambiTv = handleTvAmbi(inventory);
  TvSpecAll(ambiTv);

}

btnAmbi.addEventListener('click', filterTvAmbi);

// // ------------------ Bonusopdracht TV's uitverkocht -------------------

const btnSoldOut = document.getElementById('btn-sold');
function filterTvSoldOut() {
  
  const sortedSoldOut = handleTvSoldOut(inventory);
  TvSpecAll(sortedSoldOut);

}

btnSoldOut.addEventListener('click', filterTvSoldOut);




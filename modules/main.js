// Modules
import { inventory } from "./inventory.js";
import { tvSoldStock, tvStock, tvInStock } from "./stockamount.js";
import { TvSpecAll } from "./tv-instore-totall.js";
import { tvSoldOut, tvAmbi, sortPrice } from "./btn-actions.js";
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

// ------------------ Opdracht 4e - zie tv-instore-total.js ------------------

const tvTotal = document.querySelector(".content-list-tv");
tvTotal.innerHTML = `${TvSpecAll(inventory)}`
// console.log(tvTotal);

// ------------------ Bonusopdracht -------------------

console.table(tvSoldOut);
console.table(tvAmbi);
console.table(sortPrice);
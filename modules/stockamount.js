import { inventory } from "./inventory.js";
//  ------------------- Opdracht 2 - Elementen in de DOM plaatsen -----------------------

//  ------------------- 2a - For Loop -----------------------

// let tvSold = 0;

// for (let i = 0; i < inventory.length; i++) {

//     tvSold = tvSold += inventory[i].sold;
//     console.log(inventory[i]);
// }

// console.table(tvSold);

//  ------------------- Array method reduce Simplefied -----------------------

const tvSoldStock = inventory.reduce((total, singleValue) => {

  return total + singleValue.sold;

}, 0);

// console.log(tvSoldStock);

//  ------------------- 2b - For Loop -----------------------

// let tvStock = 0;

// for (let i = 0; i < inventory.length; i++) {

//     tvStock = tvStock += inventory[i].originalStock;

// }

// console.log(tvStock);

//  ------------------- 2b - Array method reduce Simplefied -----------------------

const tvStock = inventory.reduce((total, singleValue) => {

  return total + singleValue.originalStock;

},0);

// console.log(tvStock);

const tvInStock = tvStock - tvSoldStock;

// console.log(tvInStock);


export { tvSoldStock, tvStock, tvInStock };
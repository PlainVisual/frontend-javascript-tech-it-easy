// import { inventory } from "./inventory.js";

// ---------------------- Referentie die gebruikt kunnen worden in de main.js. In dit document staan verder ook de uitwerkingen van de function van opdracht 3a t/m 4e.    -------------------------------------------------------------



// //  --------------- Opdracht 3b - zie functions.js ----------


// const tvBrandsInStore = dataInStore(inventory);
// console.table(tvBrandsInStore);

// const storeProperty = StoreDetails(inventory, 'brand');
// console.table(storeProperty);



// // ------------------ Opdracht 4a - zie functions.js ------------------
  
// const tvInfo = detailsTv(inventory, 'toshiba');
// console.log(tvInfo);

// // ------------------ Opdracht 4b - zie functions.js ------------------
  
// const tvCost = priceTv(inventory, 'toshiba');
// console.log(tvCost);

// // ------------------ Opdracht 4c - zie functions.js ------------------

// const tvSize = screenSizeTv(inventory, 'toshiba');
// console.log(tvSize);

// // ------------------ Opdracht 4d - zie functions.js ------------------

// const tvSpecs = TvSpecification(inventory, 'samsung');
// console.log(tvSpecs);



// -----------------------------------------------------------------------------------

//  --------------- Opdracht 3a -------------

// tv brands - overzicht lijst met tv-merken

const tvBrands = inventory.map((inventoryBrand) => {

  return inventoryBrand.brand;

})

console.table(tvBrands);

//  function - array met data objecten

function dataInStore (arr) {
    
  return arr;

}

// ---------------- Opdracht 3b - Functie om de value's per property uit te lezen ----------------------

function storeDetails (arr, object) {
    
  const details = arr.map((inventoryObject) => {

      return inventoryObject[object];
  
  })
  
  return details;

}

// ------------------------- Opdracht 4a ----------------------

function detailsTv (arr, name) {
    
  const nameOfTv = arr.find((tvdetail) => {
     
      
      return tvdetail.brand.toLowerCase() === name;
          
     });

  //    Check om te controleren of de tv is gevonden - if statement controleert of nameOfTv false is. Wordt de brand niet gevonden dan krijg je false terug.

     if (!nameOfTv) {

      const msgNoTv = "No tv found" 
      return msgNoTv;

     }
  
 return `${nameOfTv.brand} ${nameOfTv.type} - ${nameOfTv.name}`
  
  }

  // ------------------------- Opdracht 4b ----------------------

function priceTv (arr, name) {

  const priceOfTv = arr.find((price) => {

    return price.brand.toLowerCase() === name;

  })

  if (!priceOfTv) {

    const msgNoPrice = "No price found" 
    return msgNoPrice;

   }

  return `€${priceOfTv.price},-`;

}

  // ------------------------- Opdracht 4c ----------------------

function screenSizeTv (arr, name) {

  const sizeOfTv = arr.find((size) => {

    return size.brand.toLowerCase() === name;
    
  })

  if (!sizeOfTv) {

    const msgNoSize = "No screensize found" 
    return msgNoSize;
   }

   const sizeNewArray = sizeOfTv.availableSizes;
   let availableSize = '';

   for (let i = 0; i < sizeNewArray.length; i++) {

      const inchCm = sizeNewArray[i] * 2.54;
      // samenvoegen string met nieuwe data omzetting naar inch en afronden
      availableSize +=  `${sizeNewArray[i]} inch (${Math.round(inchCm)} cm)`;
      //  Doordat we niet kunnen eindigen met een | zullen we een if statement gebruiken waarin de index i kleiner is dan de array. Per item wordt | toegevoegd en door -1 de laatste niet. Op deze manier kunnen we een karakter tussen de tekst in plaatsen en de laatste negeren.
      if (i < sizeNewArray.length -1) {
        availableSize += ' | '
      }

      // console.log(sizeNewArray[i])
   }

//  console.log(availableSize);
  
  return availableSize;
}


 // ------------------------- Opdracht 4d ----------------------

  function TvSpecification (arr, name) {

    const specsOfTv = arr.find((specs) => {
  
      return specs.brand.toLowerCase() === name;
      
    })
  
    if (!specsOfTv) {
  
      const msgNoSpecs = "No Television with this brand found" 
      return msgNoSpecs;
     }
  
     const specsNewArray = specsOfTv.availableSizes;
     let availableScreenSize = '';
  
     for (let i = 0; i < specsNewArray.length; i++) {
  
        const inchCm = specsNewArray[i] * 2.54;
        // samenvoegen string met nieuwe data omzetting naar inch en afronden
        availableScreenSize +=  `${specsNewArray[i]} inch (${Math.round(inchCm)} cm)`;
        //  Doordat we niet kunnen eindigen met een | zullen we een if statement gebruiken waarin de index i kleiner is dan de array. Per item wordt | toegevoegd en door -1 de laatste niet. Op deze manier kunnen we een karakter tussen de tekst in plaatsen en de laatste negeren.
        if (i < specsNewArray.length -1) {
          availableScreenSize += ' | '
        }
  
        // console.log(sizeNewArray[i])
     }
  
  //  console.log(availableSize);
    
    return `
   -------------------------------------------------------

   ${specsOfTv.brand} ${specsOfTv.type} - ${specsOfTv.name}
   €${specsOfTv.price},-
   ${availableScreenSize};
  
   -------------------------------------------------------
    `
    
  }

  
 // ------------------------- Opdracht 4e ----------------------


  function TvSpecAll (arr) {
    // Array map methode om informatie uit de array te halen
    const specsAllTv = arr.map((specs) => {
       return specs;
    })
    //  if statement waarbij wordt gekeken of de array leeg is. Is dit het geval dan krijg je een foutmelding
    if (!specsAllTv.length) {
  
       return "No Television's are available";
     }

    //  Omdat we gebruik maken van 2 for loop's om door de hoofd array en de sub array heen te lopen twee let's aangemaakt zodat we deze apart kunnen benaderen en deze elkaar niet in de weg zitten.
     let result = '';
     for (let i = 0; i < specsAllTv.length; i++) {

        // Deze for loop is specifiek voor de sreen sizes. Hierin zitten aparte array's.
        let availableScreenSize = '';
        for (let j = 0; j < specsAllTv[i].availableSizes.length; j++) {
             
          const size = specsAllTv[i].availableSizes[j];
          // Dit is de formule om van inch naar cm te gaan
          const inchCm = size * 2.54;
          // Hieronder passen wij de let availableScreenSize aan door deze samen te voegen met de resultaat van de for loop j en de berekeing inchCm
          availableScreenSize += `${size} inch (${Math.round(inchCm)} cm)`;
        
          if (j < specsAllTv[i].availableSizes.length - 1) {
            availableScreenSize += ' | '
          }
                    
        }
  
      //  Hier passen we de let result aan zodat we deze later kunnen returnen vanuit de functie en er een gehele overzicht wordt getoond van de resultaten in de console log.
    result += `
    -------------------------------------------------------
       
    ${specsAllTv[i].brand} ${specsAllTv[i].type} - ${specsAllTv[i].name}
    €${specsAllTv[i].price},-
    ${availableScreenSize}
   
    -------------------------------------------------------
     `;
     
  }

  
  return result;

}



// export { detailsTv, StoreDetails, dataInStore, priceTv, screenSizeTv, TvSpecification };
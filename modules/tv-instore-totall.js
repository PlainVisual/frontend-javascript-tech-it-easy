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
  <div class='list-wrapper'>
  <span><img class='tv-image' src="${specsAllTv[i].image}" alt="" /></span>
  <div class='tv-spec'>
  <h2 class='tv-title'>${specsAllTv[i].brand}</h2>
  <p class='tv-type'>${specsAllTv[i].type} - ${specsAllTv[i].name}</p>
  <p><span class='tv-price'>€${specsAllTv[i].price},-</span></p> <p><strong>screensize:</strong> ${availableScreenSize}</p>
  </div>
  </div>
    `;
   
}


return result;

}


export { TvSpecAll };
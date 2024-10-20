let prices=[250,656,834,723,84];
let i=0;
let Offer=10/100;
for (let val of prices){
    console.log(`Item price=${val}`);
    prices[i]=prices[i]-prices[i]*Offer;
    console.log(`final prices with discount ${prices[i]}`);
    i++;
}
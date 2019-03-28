var cookieStoresEl = document.getElementById('cookieStores'); //Step 1

var cookiesPurchasePerHour = [];
//---------------
// Global Functions
//----------------

var renderStores = function(){
  var section = document.createElement('section');
  cookieStoresEl.appendChild(section);
};




//--------------------------
//Constructor Function
//--------------------------

function SalmonCookieStores(name, location, minHourCust, maxHourCust, avgCookie){
  this.name = name;
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
  allCookieStores.push(this);
}
//Generates Random Cookies Purchased
SalmonCookieStores.prototype.cookiePurchase = function(){
  var result = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
  cookiesPurchasePerHour.push(result);
  return result;
};
//Attaches CookieStore to Section
SalmonCookieStores.prototype.render = renderStores;

//--------------------------
// Define all data
//--------------------------

var allCookieStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


//--------------------
// Creating TABLE
//--------------------

// 1. Create Parent Element
var cookieStoreTable = document.getElementById('cookieStoreTable');
// 2. create element
var theadEl = document.createElement('thead');
// 3. append
cookieStoreTable.appendChild(theadEl);

var tr = document.createElement('tr');
theadEl.appendChild(tr);


var th = document.createElement('th');
tr.appendChild(th);

//fucntion cookieStoreTabHeadCell(typecontent, attr);

//Function creates table header
function cookieStoreTableHeadCell(content) {
  var resultElememt = document.createElement('th');
  resultElememt.textContent = content;
  return resultElememt;
}

//Loops through all hours open and creates/displays row
for(var i = 0; i < hoursOpen.length; i++){
  th = cookieStoreTableHeadCell(hoursOpen[i]);
  tr.appendChild(th);
}

var tbody = document.createElement('tbody');
cookieStoreTable.appendChild(tbody);

var td = document.createElement('td');

//DATA CELL
function cookieStoreTableDataCell(content){
  var resultElement = document.createElement('td');
  resultElement.textContent = content;
  return resultElement;
}

//----------------------------------------------------------------
// Attaches pre-determined stores to table
// Can simplify into function
//------------------------------------------------------------------
//CookieStoreOne Title Displayed
td = cookieStoreTableHeadCell('1st and Pike');
tbody.appendChild(td);

//Getting randomCookie number for storeOne
var storeOneFromConstructorFunction = new SalmonCookieStores('Cookie Store One', '1st and Pike', 23, 65, 6.3);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeOneFromConstructorFunction.cookiePurchase());
  tbody.appendChild(td);
}
//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreTwo Title Displayed
td = cookieStoreTableHeadCell('SeaTac Airport');
tr.appendChild(td);

//Getting randomCookie number for storeTwo
var storeTwoFromConstructorFunction = new SalmonCookieStores('Cookie Store Two', 'SeaTac Airport', 3, 24, 1.2);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeTwoFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);

}


//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreThree Title Displayed
td = cookieStoreTableHeadCell('Seattle Center');
tr.appendChild(td);

//Getting randomCookie number for storeThree
var storeThreeFromConstructorFunction = new SalmonCookieStores('Cookie Store Three', 'Seattle Center', 11, 38, 3.7);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeThreeFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreFour Head Displayed
td = cookieStoreTableHeadCell('Capitol Hill');
tr.appendChild(td);

var storeFourFromConstructorFunction = new SalmonCookieStores('Cookie Store Four', 'Capitol Hill', 20, 38, 2.3);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeFourFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreFive Data Displayed
td = cookieStoreTableHeadCell('Alki');
tr.appendChild(td);

var storeFiveFromConstructorFunction = new SalmonCookieStores('Cookie Store Five', 'Alki', 2, 16, 4.6);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeFiveFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}
//Table Footer Displayed
var tfoot = document.createElement('tfoot');
cookieStoreTable.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);

td = cookieStoreTableHeadCell('Total');
tfoot.appendChild(td);


//Appends data to total row
// for(var i=0; i < hoursOpen.length; i++){
//   // td = cookieStoreTableDataCell(2);
//   td = cookieStoreTableDataCell(renderRowOfTotals(cookieStoresEl, allCookieStores));
//   tfoot.appendChild(td);
// }

//------Close to getting totals---------//


// var randomCustomer = function(maxCustomer, minCustomer){
//   return Math.floor(Math.random() * (maxCustomer - minCustomer) + minCustomer);
// };


// for (var k = 0; k < hoursOpen.length; k++){
//   var totalCookies = Math.ceil(randomCustomer(this.maxCustomer, this.minCustomer) * this.averageCookieSold);
//   cookiesPurchasePerHour.push(totalCookies);
// }
// console.log(storeFiveFromConstructorFunction.cookiePurchase());

// for(var i = 0; i < allCookieStores.length; i++){
//   for(var j = 0; j < hoursOpen.length; j++){
//     console.log(cookiesPurchasePerHour);
//   }
  
// }

// console.log(cookiesPurchasePerHour);
// console.log(allCookieStores);

// for (var i = 0; i < cookiesPurchasePerHour.length; i++){
//   var storeTotals = 0;
//   for(var j = 0; j < allCookieStores.length; j++){
//     storeTotals += allCookieStores.cookiesPurchasePerHour;
//   }
//   console.log(storeTotals);
// }
// console.log(SalmonCookieStores);

// for(var i = 0; i < allCookieStores[0].cookiePurchase().length; i++){
//   var storesTotal = 0;
//   for(var j = 0; j < allCookieStores.length; j++){
//     storesTotal += allCookieStores[j].cookiePurchase()[i];
//     console.log(storesTotal);
//   }
// }

// var renderRowOfTotals = function(parentElement, locationStores) {
//   var tr = document.createElement('tr');
//   // tr.setAttribute('id', ROW_ATTRIBUTE_FOR_TOTALS);
//   parentElement.appendChild(tr);


//   for (var i = 0; i < locationStores[0].cookiesPurchasePerHour.length; i++) {
//     var storeTotals = 0;
//     td = document.createElement('td');
//     for (var j = 0; j < locationStores.length; j++) {
//       storeTotals += locationStores[j].cookiesPurchasePerHour[i];    
//     }
//     td.textContent = storeTotals;
//     tr.appendChild(td);
//     // console.log(locationStores[i]);
//   }
// };
console.log(allCookieStores);
// for(var i = 0; i < hoursOpen.length; i++){
//   var storeTotals = 0;
//   td=document.createElement('td');
//   for(var j = 0; j < hoursOpen.length; j++){
//     storeTotals += cookiesPurchasePerHour[j];
//     td.textContent = storeTotals;
//     tr.appendChild(td);
//     console.log(storeTotals);
//   }
// }
//--------IMPORTANT Changinng line 244 to j adds it to the right 5 times. Changing it to i keeps adding index 0 to itself 5 times using allCookieStores.length; Changing to hoursOpen.length adds the entire row for store one

for(var i = 0; i < hoursOpen.lenqth; i++){
  var storeTotals = 0;
  for(var j = 0; j < hoursOpen.length; j++){
    storeTotals += cookiesPurchasePerHour[j];
    storeTotals += storeFourFromConstructorFunction.cookiePurchase();
    td.textContent = storeTotals;
    tr.appendChild(td);
    console.log(storeTotals);
  }
}


// for(var i = 0; i < hoursOpen.length; i++){
//   td = cookieStoreTableDataCell(cookiesPurchasePerHour);
//   tfoot.appendChild(td);
// }


// for(var i= 0; i < storeFiveFromConstructorFunction.cookiePurchase().length; i++){
//   var totals = 0;
//   // console.log(totals);
//   for(var j =0; j < hoursOpen; j++){
//     totals += storeFiveFromConstructorFunction.cookiePurchase().length;
//     // console.log(totals);
//   }
//   console.log(totals);
// }

// var numCookieArrayFour = [];
// var sumCookieArrayFour = 0;

// function cookiePurFour(){
//   for(var i = 0; i < hoursOpen.length; i++){
//     numCookieArrayFour.push(storeTwoFromConstructorFunction.cookiePurchase());
//     console.log(numCookieArrayFour);
//     // sumCookieArrayFour += numCookieArrayFour[i];
//   }
// //   numCookieArrayFour.push(storeTwoFromConstructorFunction.sumCookieArrayOne);
// }

// cookiePurFour();
// console.log(numCookieArrayFour);

// var sumTwo = numCookieArrayFour.reduce(add);
// function add (a, b) {
//   return a + b;
// }
// // console.log(cookiesPurchasePerHour);
// console.log(sumTwo);

// console.log(totals);


//-----------------
//Run Script
//-----------------

console.log(cookiesPurchasePerHour);
console.log(storeThreeFromConstructorFunction.cookiePurchase());
console.log(storeTwoFromConstructorFunction.cookiePurchase() + storeThreeFromConstructorFunction.cookiePurchase());

///----------------
///EVENT HANDLERS
///------------------

var addStoreForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){

  event.preventDefault();


  var target = event.target;

  var newName = target.name.value;
  var newLocation = target.location.value;
  var minCustomers = parseInt(target.minCustomers.value);
  var maxCustomers = parseInt(target.maxCustomers.value);
  var newAvgCookies = parseInt(target.avgCookie.value);

  target.reset();

  var newStore = new SalmonCookieStores(newName, newLocation, minCustomers, maxCustomers, newAvgCookies);

  //CookieStoreNew Data Displayed
  td = cookieStoreTableHeadCell(newLocation);
  tr.appendChild(td);
  //------WORKING!!------
  for(var i=0; i < hoursOpen.length; i++){
    td = cookieStoreTableDataCell(newStore.cookiePurchase());
    tr.appendChild(td);
  }

  tr = document.createElement('tr');
  tbody.appendChild(tr);

  //Calculates Grand Total
var sum = cookiesPurchasePerHour.reduce(add);
function add (a, b) {
  return a + b;
}
//Appends Grand Total
var h2 = document.createElement('h2');
h2.textContent = `Grand Total: ${sum}`;
tfoot.appendChild(h2);

};
addStoreForm.addEventListener('submit', addStoreEventHandler);


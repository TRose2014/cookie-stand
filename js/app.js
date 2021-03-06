'use strict';

//--------------------------
// Define all data
//--------------------------
var cookieStoresEl = document.getElementById('cookieStores');
var allCookieStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var combinedDailyTotals = [];
var combinedHourlyTotals = [];


//---------------
// Global Functions
//----------------

var renderStores = function(){
  var section = document.createElement('section');
  cookieStoresEl.appendChild(section);
};

var renderShop = function(){
  var tbody = document.getElementById('cookieSalesTable');
  // var tbody = document.createElement('tbody');
  for(var i =0; i < allCookieStores.length; i++){
    var tr = document.createElement('tr');
    // tr.setAttribute('id', 'shop' +i);
    // tbody.appendChild(tr);

    var td = document.createElement('td');
    td.textContent = `${allCookieStores[i].location}`;
    tr.appendChild(td);
    for(var j = 0; j < hoursOpen.length; j++){
      td = document.createElement('td');
      td.textContent = `${allCookieStores[i].cookiesPurchasePerHour[j]}`;
      tr.appendChild(td);
      combinedHourlyTotals.push(parseInt(`${allCookieStores[i].cookiesPurchasePerHour[j]}`));
    }
    td = document.createElement('td');
    td.textContent = `${allCookieStores[i].totalCookiesSold}`;
    tr.appendChild(td);
    combinedDailyTotals.push(`${allCookieStores[i].totalCookiesSold}`);

  }
};

//--------------------------
//Constructor Function
//--------------------------

function SalmonCookieStores(location, minHourCust, maxHourCust, avgCookie){
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
  this.cookiesPurchasePerHour = [];
  allCookieStores.push(this);
}
//Generates Random Cookies Purchased
SalmonCookieStores.prototype.cookiePurchase = function(){
  var result = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
  this.cookiesPurchasePerHour.push(result);
  return result;
};
//Attaches CookieStore to Section
SalmonCookieStores.prototype.render = renderStores;

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
var storeOneFromConstructorFunction = new SalmonCookieStores('1st and Pike', 23, 65, 6.3);
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
var storeTwoFromConstructorFunction = new SalmonCookieStores('SeaTac Airport', 3, 24, 1.2);
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
var storeThreeFromConstructorFunction = new SalmonCookieStores('Seattle Center', 11, 38, 3.7);
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

var storeFourFromConstructorFunction = new SalmonCookieStores('Capitol Hill', 20, 38, 2.3);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeFourFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreFive Head Displayed
td = cookieStoreTableHeadCell('Alki');
tr.appendChild(td);

var storeFiveFromConstructorFunction = new SalmonCookieStores('Alki', 2, 16, 4.6);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeFiveFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//Table Footer Displayed
var tfoot = document.createElement('tfoot');
cookieStoreTable.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);


// ------Total Row----//
td = cookieStoreTableHeadCell('Total');
tfoot.appendChild(td);

// //Appends data to total row
for (var i =0; i < hoursOpen.length; i++){
  var total = 0;
  for (var j = 0; j < allCookieStores.length; j++){
    total += allCookieStores[j].cookiesPurchasePerHour[i];
  }
  td = cookieStoreTableDataCell(total);
  tfoot.appendChild(td);
}

console.log(allCookieStores);

// //Calculates Grand Total 
// var sum = cookiesPurchasePerHour.reduce(add);
// function add (a, b) {
//   return a + b;
// }
renderShop();

///----------------
///EVENT HANDLERS
///------------------

var addStoreForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){

  event.preventDefault();


  var target = event.target;

  var newLocation = target.location.value;
  var minCustomers = parseInt(target.minCustomers.value);
  var maxCustomers = parseInt(target.maxCustomers.value);
  var newAvgCookies = parseInt(target.avgCookie.value);
  // allCookieStores.push(this);

  target.reset();

  var newStore = new SalmonCookieStores(newLocation, minCustomers, maxCustomers, newAvgCookies);

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

  console.log(allCookieStores);
};



addStoreForm.addEventListener('submit', addStoreEventHandler);


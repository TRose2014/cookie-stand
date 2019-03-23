var cookieStoresEl = document.getElementById('cookieStores'); //Step 1

//---------------
// Global Functions
//----------------

var renderStores = function(){
  var section = document.createElement('section');
  cookieStoresEl.appendChild(section);
};

function addTableToDOM(){
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
  
}
//--------------------------
//Constructor Function
//--------------------------

function SalmonCookieStores(name, location, minHourCust, maxHourCust, avgCookie, cookiePurchasedEachStoreHour){
  this.name = name;
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
  this.cookiePurchasedEachStoreHour = cookiePurchasedEachStoreHour;
  allCookieStores.push(this);
}
//Generates Random Cookies Purchased
SalmonCookieStores.prototype.cookiePurchase = function(){
  var result = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
  return result;
};
//Attaches CookieStore to Section
SalmonCookieStores.prototype.render = renderStores;
// SalmonCookieStores.prototype.getTotalCookies = function(){
//   var totalCookies = 0;
//   for (var i = 0; i < this.cookiePurchasePerHour.length; i++){
//     totalCookies = totalCookies + this.cookiePurchasePerHour[i];
//   }
//   return totalCookies;
// };
// console.log(totalCookies);
//--------------------------
// Define all data
//--------------------------

var allCookieStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//----------
//TABLE
//----------

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
//CookieStoreOne Data Displayed
td = cookieStoreTableHeadCell('1st and Pike');
tbody.appendChild(td);



// function renderTable(){
//   for(var i = 0; i < cookieStoresEl.length; i++){
//     allCookieStores[i].render(cookieStoresEl);
//   }
// }

// td.textContent = `${allCookieStores[i].cookiePurchase()}`;


var storeOneFromConstructorFunction = new SalmonCookieStores('Cookie Store One', '1st and Pike', 23, 65, 6.3);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeOneFromConstructorFunction.cookiePurchase());
  tbody.appendChild(td);
}
//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreTwo Data Displayed
td = cookieStoreTableHeadCell('SeaTac Airport');
tr.appendChild(td);

var storeTwoFromConstructorFunction = new SalmonCookieStores('Cookie Store Two', 'SeaTac Airport', 3, 24, 1.2);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeTwoFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreThree Data Displayed
td = cookieStoreTableHeadCell('Seattle Center');
tr.appendChild(td);

var storeThreeFromConstructorFunction = new SalmonCookieStores('Cookie Store Three', 'Seattle Center', 11, 38, 3.7);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeThreeFromConstructorFunction.cookiePurchase());
  tr.appendChild(td);
}

//New row added
tr = document.createElement('tr');
tbody.appendChild(tr);

//CookieStoreFour Data Displayed
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

// //New row added
// tr = document.createElement('tr');
// tbody.appendChild(tr);


//Table Footer Displayed
var tfoot = document.createElement('tfoot');
cookieStoreTable.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);

td = cookieStoreTableHeadCell('Total');
tfoot.appendChild(td);


// var grandTotal = 0;
// for(var i=0; i < allCookieStores.length; i++){
//   grandTotal = (allCookieStores[i].cookiePurchase() + hoursOpen.cookiePurchase());
//   tbody.appendChild(td);
// }

// var grandTotal = 0;
// td = document.createElement('td');
// for (i = 0; i < allCookieStores.length; i++) {
//   grandTotal += allCookieStores[i].getTotalCookies();
// }
// td.textContent = grandTotal;
// tr.appendChild(td);

// console.log(grandTotal);

//-----------------
//Run Script
//-----------------

///----------------
///EVENT HANDLERS
///------------------

var addStoreForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){
  // var footElement  = document.getElementById('cookieStoreTable');
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

};
addStoreForm.addEventListener('submit', addStoreEventHandler);


//---------------
// Global Functions
//----------------

var renderStores = function(cookieStoresEl){
  var section = document.createElement('section');
  // article.setAttribute('id', `$cookieStoreOne.name.toLowerCase().replace( ' S, ')`)
  cookieStoresEl.appendChild(section);
}

//   //Creating h3 Cookie One and appending it
//   var h3 = document.createElement('h3'); //Step 2
//   h3.textContent = this.name; // Step 3
//   section.appendChild(h3); //Step 4

//   //Creating h4 Cookie One Location and appending it
//   var h4 = document.createElement('h4');
//   h4.textContent = this.location;
//   section.appendChild(h4);

//   //Creating h4 Cookie One Location and appending it
//   var h4 = document.createElement('h4');
//   h4.textContent = ('Min. Hours '+`${this.minHourCust}`);
//   section.appendChild(h4);

//   var h4 = document.createElement('h4');
//   h4.textContent = ('Max. Hours '+`${this.maxHourCust}`);
//   section.appendChild(h4);

//   //Creating ol for li for Cookie Store one
//   var ul = document.createElement('ul');
//   section.appendChild(ul);

//   //Creates lis for hours and then creates lis for random cookies; displayed like hours:randomCookies
//   for(var i = 0; i < hoursOpen.length; i++){
//     var li= document.createElement('li');

//     var numberOfCookies = this.cookiePur();

//     var content = `${hoursOpen[i]}: ${numberOfCookies} cookies`;
//     li.textContent = content;
//     ul.appendChild(li);

//   }
// };
//--------------------------
//Constructor Function
//--------------------------

function SalmonCookieStores(name, location, minHourCust, maxHourCust, avgCookie){
  this.name = name;
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
}


SalmonCookieStores.prototype.randomCustHour = function (){
  var randomNum = Math.floor(Math.random() * 50);
  console.log(randomNum);
  return randomNum;
};
SalmonCookieStores.prototype.cookiePur = function(){
  var result = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
  return result;
};
SalmonCookieStores.prototype.render = renderStores;

//--------------------------
// Define all data
//--------------------------

// var allCookieStores = [];
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


var storeOneFromConstructorFunction = new SalmonCookieStores('Cookie Store One', '1st and Pike', 23, 65, 6.3);
for(var i=0; i < hoursOpen.length; i++){
  td = cookieStoreTableDataCell(storeOneFromConstructorFunction.cookiePur());
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
  td = cookieStoreTableDataCell(storeTwoFromConstructorFunction.cookiePur());
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
  td = cookieStoreTableDataCell(storeThreeFromConstructorFunction.cookiePur());
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
  td = cookieStoreTableDataCell(storeFourFromConstructorFunction.cookiePur());
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
  td = cookieStoreTableDataCell(storeFiveFromConstructorFunction.cookiePur());
  tr.appendChild(td);
}


//Table Footer Displayed
var tfoot = document.createElement('tfoot');
cookieStoreTable.appendChild(tfoot);

tr = document.createElement('tr');
tfoot.appendChild(tr);

td = cookieStoreTableHeadCell('Total');
tr.appendChild(td);


//Still trying to get totals to work
// var sumValue = 0;
// for(var i = 1; i < cookieStoreTable.rows.length; i++){
//   sumValue = sumValue + cookieStoreTable.rows[i];
// }
// console.log(sumValue);

//-----------------
//Run Script
//-----------------
var cookieStoresEl = document.getElementById('cookieStores'); //Step 1
console.log(cookieStoresEl);

// storeOneFromConstructorFunction.render(cookieStoresEl);
// storeTwoFromConstructorFunction.render(cookieStoresEl);
// storeThreeFromConstructorFunction.render(cookieStoresEl);




///----------------
///EVENT HANDLERS
///------------------

var addStoreForm = document.getElementById('addStoreForm');

var addStoreEventHandler = function(event){
  // addStoreEl.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
};

//   var target = event.target;

//   var name = target.name.value;
//   var location = target.location.value;
//   var minCustomers = target.minCustomers.value;
//   var maxCustomers = target.maxCustomers.value;

//   target.reset();

//   var newStore = new SalmonCookieStores(name, location, minCustomers, maxCustomers);
//   newStore.render(document.getElementById('newStoreInfo'));
// };
// // addStoreForm.addEventListener('submit', addStoreEventHandler);

// console.log(addStoreEventHandler());

// addStoreEl.addEventListener('submit', function(event){
//   console.log(event);
//   event.preventDefault();
//   var target = event.target;
//   var name = target.name.value;
//   var location = target.name.value;
//   var minCustomers = target.minCustomers.value;
//   var maxCustomers = target.maxCustomers.value;

//   var newStore = new SalmonCookieStores(name, location, minCustomers, maxCustomers);
//   newStore.render(document.getElementById('newStoreInfo'));
// });



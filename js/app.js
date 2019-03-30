'use strict';

//Global Variables
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var combinedStoresCookieSoldHourly = 0;
var combinedDailyTotals = [];
var combinedHourlyTotals = [];
var allCookieStores = [];

var tr = document.createElement('tr');
var td = document.createElement('td');
var th = document.createElement('th');

var cookieStoreTable = document.getElementById('cookieStores');

//---------------
// Global Functions
//----------------

function addTableToDOM(){
  // Creating HTML Elements
  // var cookieStoreTable = document.getElementById('cookieStores');

  //Creates Table Element
  var table = document.createElement('table');
  table.setAttribute('id', 'cookieSalesTable');
  cookieStoreTable.appendChild(table);
  console.log(table);

  //Creates Table Head
  var thead = document.createElement('thead');
  table.appendChild(thead);

  //Creates Table Row
  var tr = document.createElement('tr');
  thead.appendChild(tr);

  //Creates Table Header
  var th = document.createElement('th');
  tr.appendChild(th);

  //Loops through all hours open and creates/displays row
  for(var i = 0; i < hoursOpen.length; i++){
    // th = cookieStoreTableHeadCell(hoursOpen[i]);
    th = document.createElement('th');
    th.textContent = hoursOpen[i];
    tr.appendChild(th);
  }

  //Creates th for Daily Location Total title
  th = document.createElement('th');
  th.textContent = 'Daily Location Total';
  tr.appendChild(th);

  //Creates Table Body
  // var tbody = document.createElement('tbody');
  // tbody.setAttribute('id', 'tableBody');
  // cookieStoreTable.appendChild(tbody);
  // console.log(tbody);

  var tfoot = document.createElement('tfoot');
  table.appendChild(tfoot);
// }

// //Table Footer Displayed
// var addFootertoTable = function(){
//   var table = document.getElementById('');
//   // var table = document.createElement('table');

//   //Creates Table Foot
//   var tfoot = document.createElement('tfoot');
//   table.appendChild(tfoot);

  tr = document.createElement('tr');
  tr.setAttribute('id', 'foot');
  tfoot.appendChild(tr);

  var td = document.createElement('td');
  td.textContent = 'Hourly Cookie Sales Total';
  tr.appendChild(td);

  for(var i = 0; i < hoursOpen.length; i++){
    td = document.createElement('td');
    for(var j = 0; j < allCookieStores.length; j++){
      combinedStoresCookieSoldHourly += parseInt(allCookieStores[j].cookiesPurchasePerHour);
    }
    td.textContent = combinedStoresCookieSoldHourly;
    tr.appendChild(td);
  }

  for(i = 0; i < combinedDailyTotals.length; i++){
    combinedDailyTotals += parseInt(combinedDailyTotals[i]);
  }

  // var footerData = document.getElementById('foot');
  var footerData = document.createElement('tfoot');
  td = document.createElement('td');
  td.textContent = combinedDailyTotals;
  footerData.appendChild(td);

}

var renderShop = function(){
  var tbody = document.getElementById('cookieSalesTable');
  // var tbody = document.createElement('tbody');
  for(var i =0; i < allCookieStores.length; i++){
    var tr = document.createElement('tr');
    // tr.setAttribute('id', 'shop' +i);
    tbody.appendChild(tr);

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

//Head Cell
function cookieStoreTableHeadCell(content) {
  // var tbody = document.getElementById('cookieSalesTable');
  var resultElememt = document.createElement('th');
  resultElememt.textContent = content;
  cookieStoreTable.appendChild(resultElememt);
  return resultElememt;
}

//Data Cell
function cookieStoreTableDataCell(content){
  var resultElement = document.createElement('td');
  resultElement.textContent = content;
  return resultElement;
}


//--------------------------
// Define all data
//--------------------------
//--------------------------
//Constructor Function
//--------------------------

function SalmonCookieStores(name, location, minHourCust, maxHourCust, avgCookie){
  this.name = name;
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
  this.cookiesPurchasePerHour = [];
  this.totalCookiesSold = 0;
 
  this.calculateCookiesSoldHourly = function(){
    for(var i = 0; i < hoursOpen.length; i++){
      this.cookiesPurchasePerHour.push(Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust));
      this.totalCookiesSold += this.cookiesPurchasePerHour[i];
    }
  };
  this.calculateCookiesSoldHourly();
  allCookieStores.push(this);
}

function generateInitalStoreData(){
  var cookieStoreOne = new SalmonCookieStores('Cookie Store One', '1st and Pike', 23, 65, 6.3);
  var cookieStoreTwo =  new SalmonCookieStores('Cookie Store Two', 'SeaTac Airport', 3, 24, 1.2);
  var cookieStoreThree = new SalmonCookieStores('Cookie Store Three', 'Seattle Center', 11, 38, 3.7);
  var cookieStoreFour = new SalmonCookieStores('Cookie Store Four', 'Capitol Hill', 20, 38, 2.3);
  var cookieStoreFive = new SalmonCookieStores('Cookie Store Five', 'Alki', 2, 16, 4.6);
}

//-----------------
//Run Script
//-----------------

function renderTable(){
  addTableToDOM();
  generateInitalStoreData();
  renderShop();
  // addFootertoTable();
}

//Attaches CookieStore to Section
SalmonCookieStores.prototype.render = renderShop;

renderTable();
// addTableToDOM();
// generateInitalStoreData();
// renderShop();
// addFootertoTable();


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
  // tr.appendChild(td);
  console.log(td);

  for(var i=0; i < hoursOpen.length; i++){
    td = cookieStoreTableDataCell(newStore.calculateCookiesSoldHourly());
    tr.appendChild(td);
    console.log(td);
  }

  // var tr = document.createElement('tr');
  // // theadEl.appendChild(tr);
  
  
  // var th = document.createElement('th');
  // tr.appendChild(th);
  
  
  // var td = document.createElement('td');
  // for(var i=0; i < hoursOpen.length; i++){
  //   td = cookieStoreTableDataCell(newStore.cookiesPurchasePerHour());
  //   tr.appendChild(td);
  // }
  


  //CookieStoreNew Data Displayed
  // var td = document.createElement('td');
  // td = cookieStoreTableHeadCell(newLocation);
  // var tbody = document.createElement('tbody');


  // var tr = document.createElement('tr');
  // tr.appendChild(td);
  // //------WORKING!!------
  // for(var i=0; i < hoursOpen.length; i++){
  //   td = cookieStoreTableDataCell(newStore.calculateCookiesSoldHourly());
  //   tr.appendChild(td);
  // }

  // tr = document.createElement('tr');

  // var tbody = document.createElement('tbody');
  // tbody.appendChild(tr);

//   //Calculates Grand Total
//   // var sum = cookiesPurchasePerHour.reduce(add);
//   var grandTotal = function(){
//     var sum = this.cookiesPurchasePerHour.reduce(add);
//     function add (a, b) {
//       return a + b;
//     }
//     //Appends Grand Total
//     // var h2 = document.createElement('h2');
//     td = cookieStoreTableHeadCell(`Grand Total: ${sum}`);
//     tfoot.appendChild(td);
//     // h2.textContent = `Grand Total: ${sum}`;
//     // tfoot.appendChild(h2);

//   };
//   grandTotal();
};

addStoreForm.addEventListener('submit', addStoreEventHandler);


console.log('Hello World');

//---------------
// Global Functions
//----------------

var renderStores = function(cookieStoresEl){
  var article = document.createElement('article');
  // article.setAttribute('id', `$cookieStoreOne.name.toLowerCase().replace( ' S, ')`)
  cookieStoresEl.appendChild(article);

  //Creating h3 Cookie One and appending it
  var h3 = document.createElement('h3'); //Step 2
  h3.textContent = this.name; // Step 3
  article.appendChild(h3); //Step 4

  //Creating h4 Cookie One Location and appending it
  var h4 = document.createElement('h4');
  h4.textContent = this.location;
  article.appendChild(h4);

  //Creating ol for li for Cookie Store one
  var ul = document.createElement('ul');
  article.appendChild(ul);

  //Creating for loop for li for Cookie Store One
  for(var i = 0; i < hoursOpen.length; i++){
    var li = document.createElement('li');
    li.textContent = hoursOpen[i];
    ul.appendChild(li);
  }

  // for(var j = 0; j < this.length; j++){
  //   var li = document.createElement('li');
  //   li.textContent = this.allCookieStores[j];
  //   ul.appendChild(li);
  // }


  for(var i = 0; i < hoursOpen.length; i++){
    var li = document.createElement('li');
    li.textContent = this.cookiePur();
    ul.appendChild(li);
  }
};

// function tableCreate (){
//   var article = document.createElement('article');
//   var tbody = document.createElement('tbody');
//   article.appendChild(tbody);
//   for (var i = 0; i < 15; i++){
//     var tr = document.createElement('tr');
//     var td = document.createElement('td');
//     td.textContent = hoursOpen;
//     tbody.appendChild(tr);
//     tr.appendChild(td);
//   }
//   // tbody.appendChild(tr);
//   // tr.appendChild(td);
//   console.log(tableCreate());
// }

// var cookieStoreTable = function() {

//   var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//   // get the reference for the body
//   var body = document.getElementsByTagName('body');

//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement('table');
//   var tblBody = document.createElement('tbody');

//   // creating all cells
//   for (var i = 0; i < hoursOpen.length; i++) {
//     // creates a table row
//     var row = document.createElement('tr');

//     for (var j = 0; j < this.randomCookie; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement('td');
//       var cellText = document.createTextNode('cell in row '+i+', column '+j);
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   // body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute('border', '2');
// };

// 1. parent
var cookieStoreTable = document.getElementById('cookieStoreTable');
// 2. create element
var theadEl = document.createElement('thead');
// 3. append
cookieStoreTable.appendChild(theadEl);

var tbodyEl = document.createElement('tbody');
cookieStoreTable.appendChild(tbodyEl);

var tr = document.createElement('tr');
theadEl.appendChild(tr);

// var th = document.createElement('th');
// tr.appendChild(th);

th = document.createElement('th');
tr.textContent = '6:00am';
tr.appendChild(th);

var th = document.createElement('th');
tr.appendChild(th);

th = cookieStoreTableHeadCell('6:00am');
tr.appendChild(th);

//fucntion cookieStoreTabHeadCell(typecontent, attr);

function cookieStoreTableHeadCell(content) {
  var resultElememt = document.createElement('th');
  resultElememt.textContent = content;
  return resultElememt;
}

var tbody = document.createElement('tbody');
cookieStoreTable.appendChild(tbody);

tr = document.createElement('tr');
tbody.appendChild(tr);

th = cookieStoreTableHeadCell('1st and Pike');
tbody.appendChild(th);

var td = document.createElement('td');
td.textContent = '20 cookies';
tr.appendChild(td);

// td = document.createElement('td');
// td.textContent = '30 cookies';
// tr.appendChild(td);

td = cookieStoreTableDataCell('20 cookies');
tr.appendChild(td);

function cookieStoreTableDataCell(content){
  var resultElement = document.createElement('td');
  resultElement.textContent = content;
  return resultElement;
}

//if (attr){
//   resultElement.setAttribute(attr);
// }resultElememt.textContent = content;

function SalmonCookieStores(name, location, minHourCust, maxHourCust, avgCookie){
  this.name = name;
  this.location = location;
  this.minHourCust = minHourCust;
  this.maxHourCust = maxHourCust;
  this.avgCookie = avgCookie;
  this.randomCookie = [];
  allCookieStores.push(this);
}


SalmonCookieStores.prototype.randomCustHour = function (){
  var randomNum = Math.floor(Math.random() * 50);
  console.log(randomNum);
  return randomNum;
};
// SalmonCookieStores.prototype.randomCookieHour = function(){
//   var randomCookieHour = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
//   return randomCookieHour;
//   // randomCookie.push(randomCookieHour);

// };
SalmonCookieStores.prototype.cookiePur = function(){
  for(var i = 0; i < hoursOpen.length; i++){
    this.randomCookie.push(Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust));
    // var randomCookieHour = Math.floor(Math.random() * (this.maxHourCust - this.minHourCust) + this.minHourCust);
    return this.randomCookie;
  }
  // randomCookie.push(this.cookiePur());
  // sumRandomCookie += randomCookie;
};

SalmonCookieStores.prototype.render = renderStores;

//--------------------------
// Define all data
//--------------------------

var allCookieStores = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// console.log(randomCookie);
//-----------------
//Run Script
//-----------------
var cookieStoresEl = document.getElementById('cookieStores'); //Step 1
console.log(cookieStoresEl);

var storeOneFromConstructorFunction = new SalmonCookieStores('Cookie Store One', '1st and Pike', 23, 65, 6.3);


for(var i = 0; i < allCookieStores.length; i++){
  allCookieStores[i].render(cookieStoresEl);
}

console.log(storeOneFromConstructorFunction.randomCookie);
// console.log(storeOneFromConstructorFunction.randomCookie);
// console.log(allCookieStores);
// for(var i = 0; i < allCookieStores.length; i++){
//   randomCookie[i].render(cookieStoresEl);
// }



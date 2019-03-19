//Store One - Object Literals
var cookieStoreOne = {
  name: 'Cookie Store One',
  location: '1st and Pike',
  minHourCust: 23,
  maxHourCust: 65,
  avgCookie: 6.3,
  randomCustHour: function (){
    var randomNum = Math.floor(Math.random() * 50);
    return randomNum;
  },
  randomCookieHour: function(){
    var randomCookieHour = Math.floor(Math.random() * (cookieStoreOne.maxHourCust - cookieStoreOne.minHourCust) + cookieStoreOne.minHourCust);
    return randomCookieHour;
  },
//   message: `$hoursOpen`: `$numCookieArrayOne`,
};

//Generates an array for all random numbers for Store One; Hours Open used for all functions
var numCookieArrayOne = [];
var hoursOpen = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var sumCookieArrayOne = 0;

function cookiePurOne(){
  for(var i = 0; i < hoursOpen.length; i++){
    numCookieArrayOne.push(cookieStoreOne.randomCookieHour());
    sumCookieArrayOne += numCookieArrayOne[i];
  }
  numCookieArrayOne.push(sumCookieArrayOne);
}

cookiePurOne();
console.log(numCookieArrayOne);

{/* <article id= "cookieStoreOne">
<h3>Cookie Store One</h3>
<h4>1st and Pike</h4>
<p>Minimum Hourly Customers</p>
<p>Maximum Hourly Customers</p>
<p>Average Cookies</p>
</article> */}

//Creating article to house all Cookie Stores
var cookieStoresEl = document.getElementById('cookieStores'); //Step 1
console.log(cookieStoresEl);
var article = document.createElement('article'); // Step 2
cookieStoresEl.appendChild(article);

//Creating h3 Cookie One and appending it
var h3 = document.createElement('h3'); //Step 2
h3.textContent = cookieStoreOne.name; // Step 3
article.appendChild(h3); //Step 4

//Creating h4 Cookie One Location and appending it
var h4 = document.createElement('h4');
h4.textContent = cookieStoreOne.location;
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

for(var j = 0; j < numCookieArrayOne.length; j++){
  var li = document.createElement('li');
  li.textContent = numCookieArrayOne[j];
  ul.appendChild(li);
}

//Store Two - Object Literal
var cookieStoreTwo = {
  name: 'Cookie Store Two',
  location: 'SeaTac Airport',
  minHourCust: '3',
  maxHourCust: '24',
  avgCookie: '1.2',
  randomCustHour: function (){
    var randomNum = Math.floor(Math.random() * 50);
    return randomNum;
  },
  randomCookieHour: function(){
    var randomCookieHour = Math.floor(Math.random() * (cookieStoreTwo.maxHourCust - cookieStoreTwo.minHourCust) + cookieStoreTwo.minHourCust);
    return randomCookieHour;
  },
};

//Creates random number for each hour and totals random number - Store Two

var numCookieArrayTwo = [];
var sumCookieArrayTwo = 0;

function cookiePurTwo(){
  for(var i = 0; i < hoursOpen.length; i++){
    numCookieArrayTwo.push(cookieStoreTwo.randomCookieHour());
    sumCookieArrayTwo += numCookieArrayTwo[i];
  }
  numCookieArrayTwo.push(sumCookieArrayTwo);
}

cookiePurTwo();
console.log(numCookieArrayTwo);

{/* <article id= "cookieStoreTwo">
                        <h3>Cookie Store Two</h3>
                        <h4>SeaTac Airport</h4>
                        <p>Minimum Hourly Customers</p>
                        <p>Maximum Hourly Customers</p>
                        <p>Average Cookies</p>
                </article> */}

//Creating h3 Cookie Two and appending it
var h3 = document.createElement('h3'); //Step 2
h3.textContent = cookieStoreTwo.name; // Step 3
article.appendChild(h3); //Step 4

//Creating h4 Cookie Two Location and appending it
var h4 = document.createElement('h4');
h4.textContent = cookieStoreTwo.location;
article.appendChild(h4);

//Creating ol for li for Cookie Store Two
var ul = document.createElement('ul');
article.appendChild(ul);

//Creating for loop for li for Cookie Store Two - Hours Open
for(var i = 0; i < hoursOpen.length; i++){
  var li = document.createElement('li');
  li.textContent = hoursOpen[i];
  ul.appendChild(li);
}

//Creating for loop for li for Cookie Store Two - Random Cookies
for(var j = 0; j < numCookieArrayTwo.length; j++){
  var li = document.createElement('li');
  li.textContent = numCookieArrayTwo[j];
  ul.appendChild(li);
}

//Store Three - Object Literal
var cookieStoreThree = {
  name: 'Cookie Store Three',
  location: 'Seattle Center',
  minHourCust: '11',
  maxHourCust: '38',
  avgCookie: '3.7',
  randomCustHour: function (){
    var randomNum = Math.floor(Math.random() * 50);
    return randomNum;
  },
  randomCookieHour: function(){
    var randomCookieHour = Math.floor(Math.random() * (cookieStoreThree.maxHourCust - cookieStoreThree.minHourCust) + cookieStoreThree.minHourCust);
    return randomCookieHour;
  },
};

//Creates random number for each hour and totals random number - Store Three

var numCookieArrayThree = [];
var sumCookieArrayThree = 0;

function cookiePurThree(){
  for(var i = 0; i < hoursOpen.length; i++){
    numCookieArrayThree.push(cookieStoreThree.randomCookieHour());
    sumCookieArrayThree += numCookieArrayThree[i];
  }
  numCookieArrayThree.push(sumCookieArrayThree);
}

cookiePurThree();
console.log(numCookieArrayThree);

{/* <article id= "cookieStoreThree">
<h3>Cookie Store Three</h3>
<h4>Seattle Center</h4>
<p>Minimum Hourly Customers</p>
<p>Maximum Hourly Customers</p>
<p>Average Cookies</p>
</article> */}

//Creating h3 Cookie Three and appending it
var h3 = document.createElement('h3'); //Step 2
h3.textContent = cookieStoreThree.name; // Step 3
article.appendChild(h3); //Step 4

//Creating h4 Cookie Three Location and appending it
var h4 = document.createElement('h4');
h4.textContent = cookieStoreThree.location;
article.appendChild(h4);

//Creating ol for li for Cookie Store Three
var ul = document.createElement('ul');
article.appendChild(ul);

//Creating for loop for li for Cookie Store Three - Hours Open
for(var i = 0; i < hoursOpen.length; i++){
  var li = document.createElement('li');
  li.textContent = hoursOpen[i];
  ul.appendChild(li);
}

//Creating for loop for li for Cookie Store Three - Random Cookies
for(var j = 0; j < numCookieArrayThree.length; j++){
  var li = document.createElement('li');
  li.textContent = numCookieArrayThree[j];
  ul.appendChild(li);
}

//Store Four - Object Literal
var cookieStoreFour = {
  name: 'Cookie Store Four',
  location: 'Capitol Hill',
  minHourCust: '20',
  maxHourCust: '38',
  avgCookie: '2.3',
  randomCustHour: function (){
    var randomNum = Math.floor(Math.random() * 50);
    return randomNum;
  },
  randomCookieHour: function(){
    var randomCookieHour = Math.floor(Math.random() * (cookieStoreFour.maxHourCust - cookieStoreFour.minHourCust) + cookieStoreFour.minHourCust);
    return randomCookieHour;
  },
};

//Creates random number for each hour and totals random number - Store Four
var numCookieArrayFour = [];
var sumCookieArrayFour = 0;

function cookiePurFour(){
  for(var i = 0; i < hoursOpen.length; i++){
    numCookieArrayFour.push(cookieStoreFour.randomCookieHour());
    sumCookieArrayFour += numCookieArrayFour[i];
  }
  numCookieArrayFour.push(sumCookieArrayOne);
}

cookiePurFour();
console.log(numCookieArrayFour);

{/* <article id= "cookieStoreFour">
<h3>Cookie Store Four</h3>
<h4>Capitol Hill</h4>
<p>Minimum Hourly Customers</p>
<p>Maximum Hourly Customers</p>
<p>Average Cookies</p>
</article> */}

//Creating h3 Cookie Four and appending it
var h3 = document.createElement('h3'); //Step 2
h3.textContent = cookieStoreFour.name; // Step 3
article.appendChild(h3); //Step 4

//Creating h4 Cookie Four Location and appending it
var h4 = document.createElement('h4');
h4.textContent = cookieStoreFour.location;
article.appendChild(h4);

//Creating ol for li for Cookie Store Four
var ul = document.createElement('ul');
article.appendChild(ul);

//Creating for loop for li for Cookie Store Four - Hours Open
for(var i = 0; i < hoursOpen.length; i++){
  var li = document.createElement('li');
  li.textContent = hoursOpen[i];
  ul.appendChild(li);
}

//Creating for loop for li for Cookie Store Four - Random Cookies
for(var j = 0; j < numCookieArrayFour.length; j++){
  var li = document.createElement('li');
  li.textContent = numCookieArrayFour[j];
  ul.appendChild(li);
}

//Store Five - Object Literal
var cookieStoreFive = {
  name: 'Cookie Store Five',
  location: 'Alki',
  minHourCust: 2,
  maxHourCust: 16,
  avgCookie: 4.6,
  randomCustHour: function (){
    var randomNum = Math.floor(Math.random() * 50);
    return randomNum;
  },
  randomCookieHour: function(){
    var randomCookieHour = Math.floor(Math.random() * (cookieStoreFive.maxHourCust - cookieStoreFive.minHourCust) + cookieStoreFive.minHourCust);
    return randomCookieHour;
  },
};

//Creates random number for each hour and totals random number - Store Five
var numCookieArrayFive = [];
var sumCookieArrayFive = 0;

function cookiePurFive(){
  for(var i = 0; i < hoursOpen.length; i++){
    numCookieArrayFive.push(cookieStoreFive.randomCookieHour());
    sumCookieArrayFive += numCookieArrayFive[i];
  }
  numCookieArrayFive.push(sumCookieArrayFive);
}

cookiePurFive();
console.log(numCookieArrayFive);


//Creating h3 Cookie Four and appending it
var h3 = document.createElement('h3'); //Step 2
h3.textContent = cookieStoreFive.name; // Step 3
article.appendChild(h3); //Step 4

//Creating h4 Cookie Four Location and appending it
var h4 = document.createElement('h4');
h4.textContent = cookieStoreFive.location;
article.appendChild(h4);

//Creating ol for li for Cookie Store Four
var ul = document.createElement('ul');
article.appendChild(ul);

//Creating for loop for li for Cookie Store Four - Hours Open
for(var i = 0; i < hoursOpen.length; i++){
  var li = document.createElement('li');
  li.textContent = hoursOpen[i];
  ul.appendChild(li);
}

//Creating for loop for li for Cookie Store Four - Random Cookies
for(var j = 0; j < numCookieArrayFive.length; j++){
  var li = document.createElement('li');
  li.textContent = numCookieArrayFive[j];
  ul.appendChild(li);
}



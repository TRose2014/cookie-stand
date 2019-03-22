//Welcome Message For Production Page
var today = new Date();
var currentHours = today.getHours();

var greet;

if(currentHours < 12){
  greet = 'Good Morning';
}else if(currentHours > 12 && currentHours < 18){
  greet = 'Good Afternoon';
}else{
  greet ='Good Evening';
}
document.getElementById('welcomeMessage').textContent = `${greet}! Welcome to your one and only place to get Salmon Cookies!!`;
console.log(greet);

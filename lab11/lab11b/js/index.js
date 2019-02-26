var carName = "Nissan leaf"; //you do not need parenthesis when naming variable
var d = new Date();
var milesDriven = 40;
//var date=new Date();
var deduction = 0.57 * milesDriven;

var el = document.getElementById("date");
el.textContent =
  "Date: " + d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();

var el = document.getElementById("car");
el.textContent = "Car Name: " + carName;

var el = document.getElementById("miles");
el.textContent = "Miles Driven: " + milesDriven;

var el = document.getElementById("discount");
el.textContent = "Deduction: $" + Math.round(deduction * 100) / 100 +"0";
var div = [
  "Washington",
  "Washington State",
  "Standford",
  "California",
  "Oregon",
  "Oregon State"
];
var con = ["7-1", "7-1", "6-3", "2-6", "2-6", "2-6", "2-6"];
var over = ["10-1", "8-3", "8-3", "4-7", "4-7", "2-6"];

var rank = 1;

function myFunction() {
  var one = document.querySelectorAll("li#one");
  if (one.length > 0) {
    for (var i = 0; i < one.length; i++) one[i].id = "uw";
  }

  var two = document.querySelectorAll("li#two");
  if (two.length > 0) {
    for (var i = 0; i < two.length; i++) two[i].id = "wsu";
  }

  var three = document.querySelectorAll("li#three");
  if (three.length > 0) {
    for (var i = 0; i < three.length; i++) three[i].id = "su";
  }
  var four = document.querySelectorAll("li#four");
  if (four.length > 0) {
    for (var i = 0; i < four.length; i++) four[i].id = "cal";
  }
  var five = document.querySelectorAll("li#five");
  if (five.length > 0) {
    for (var i = 0; i < five.length; i++) five[i].id = "ou";
  }
  var six = document.querySelectorAll("li#six");
  if (six.length > 0) {
    for (var i = 0; i < six.length; i++) six[i].id = "osu";
  }

  var el1 = document.getElementById("uw");
  el1.innerHTML = rank + ". " + div[0] + " " + con[0] + "  " + over[0];
  rank++;
  var el2 = document.getElementById("wsu");
  el2.innerHTML = rank + "." + "" + div[1] + " " + con[1] + "  " + over[1];
  rank++;
  var el3 = document.getElementById("su");
  el3.innerHTML = rank + ". " + div[2] + " " + con[2] + "  " + over[2];
  rank++;
  var el4 = document.getElementById("cal");
  el4.innerHTML = rank + ". " + div[3] + " " + con[3] + "  " + over[3];
  rank++;
  var el5 = document.getElementById("ou");
  el5.innerHTML = rank + ". " + div[4] + " " + con[4] + "  " + over[4];
  rank++;
  var el6 = document.getElementById("osu");
  el6.innerHTML = rank + ". " + div[5] + " " + con[5] + "  " + over[5];
}
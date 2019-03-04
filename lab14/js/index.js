var weather = [
  { day: "M", hi: 90, lo: 58 },
  { day: "T", hi: 69, lo: 56 },
  { day: "W", hi: 44, lo: 20 },
  { day: "Th", hi: 88, lo: 78 },
  { day: "F", hi: 48, lo: 41 }
];

var avg0 = (weather[0]["hi"] + weather[0]["lo"])/2
var avg1 = (weather[1]["hi"] + weather[1]["lo"])/2
var avg2 = (weather[2]["hi"] + weather[2]["lo"])/2
var avg3 = (weather[3]["hi"] + weather[3]["lo"])/2
var avg4 = (weather[4]["hi"] + weather[4]["lo"])/2

var avghi = (weather[0]["hi"] + weather[1]["hi"] + weather[2]["hi"] + weather[3]["hi"] + weather[4]["hi"])/5
var avglo = (weather[0]["lo"] + weather[1]["lo"] + weather[2]["lo"] + weather[3]["lo"] + weather[4]["lo"])/5
var avgall = (avg0 + avg1 + avg2 + avg3 + avg4)/5

var el = document.getElementById("table_data");
el.innerHTML = "<th>Week</th> <th>High Temp</th> <th>Low Temp</th> <th>Avg Temp</th>";

var i = 0
el.innerHTML +=
  "<tr><td>" + weather[i]["day"] +
  "</td><td>"+ weather[i]["hi"] +
  "</td><td>"+ weather[i]["lo"] +
  "</td><td>"+ avg0 + "</td><tr>";

var i = 1
el.innerHTML +=
  "<tr><td>" + weather[i]["day"] +
  "</td><td>"+ weather[i]["hi"] +
  "</td><td>"+ weather[i]["lo"] +
  "</td><td>"+ avg1 + "</td><tr>";

var i = 2
el.innerHTML +=
  "<tr><td>" + weather[i]["day"] +
  "</td><td>"+ weather[i]["hi"] +
  "</td><td>"+ weather[i]["lo"] +
  "</td><td>"+ avg2 + "</td><tr>";

var i = 3
el.innerHTML +=
  "<tr><td>" + weather[i]["day"] +
  "</td><td>"+ weather[i]["hi"] +
  "</td><td>"+ weather[i]["lo"] +
  "</td><td>"+ avg3 + "</td><tr>";

var i = 4
el.innerHTML +=
  "<tr><td>" + weather[i]["day"] +
  "</td><td>"+ weather[i]["hi"] +
  "</td><td>"+ weather[i]["lo"] +
  "</td><td>"+ avg4 + "</td><tr>";

el.innerHTML +=
  "<tr><td>" + "Ave" +
  "</td><td>"+ avghi +
  "</td><td>"+ avglo +
  "</td><td>"+ avgall + "</td><tr>";

var stocks = new Array;
stocks.push({
  name:"Microsoft",
  cap:"$381.7B",
  sales:"$86.8",
  profit:"$22.1B",
  employees:128000
});
stocks.push({
  name:"Symetra Financial",
  cap:"$2.7B",
  sales:"$2.2B",
  profit:"$254.4M",
  employees:1400
});
stocks.push({
  name:"Micron Technology",
  cap:"$37.6",
  sales:"$16.4",
  profit:"$3.0B",
  employees:30400
});
stocks.push({
  name:"F5 Networks",
  cap:"$9.5B",
  sales:"$1.7B",
  profit:"$311.2M",
  employees:3834
});
stocks.push({
  name:"Expedia",
  cap:"$10.8B",
  sales:"$5.8B",
  profit:"$398.1M",
  employees:18210
});
stocks.push({
  name:"Nautilus",
  cap:"$476M",
  sales:"$274.4M",
  profit:"$18.8M",
  employees:340
});
stocks.push({
  name:"Heritage Financial",
  cap:"$531M",
  sales:"$137.6M",
  profit:"$21M",
  employees:748
});
stocks.push({
  name:"Cascade Microtech",
  cap:"$239M",
  sales:"$136M",
  profit:"$9.9M",
  employees:449
});
stocks.push({
  name:"Nike",
  cap:"$83.1B",
  sales:"$27.8B",
  profit:"$2.7B",
  employees:56500
});
stocks.push({
  name:"Alaska Air Group",
  cap:"$7.9B",
  sales:"$5.4B",
  profit:"$605M",
  employees:13652
});

var el = document.getElementById("table_data");
el.innerHTML ="<th>Company Name</th> <th>Market Cap</th> <th>Sales</th> <th>Profit</th> <th># of Employees</th>";

function find(){

stocks.forEach(function(value,index){
  el.innerHTML +=
  "<tr><td>" + stocks[index]["name"] +
  "</td><td>" + stocks[index]["cap"] + 
  "</td><td>" + stocks[index]["sales"] +
  "</td><td>" + stocks[index]["profit"] +
  "</td><td>" + stocks[index]["employees"] +
  "</td><tr>";
});

}
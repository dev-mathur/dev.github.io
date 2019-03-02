function Flight(
  airline,
  number,
  origin,
  destination,
  dep_time,
  arrival_time,
  arrival_gate
) {
  this.airline = airline;
  this.number = number;
  this.origin = origin;
  this.destination = destination;
  this.dep_time = dep_time;
  this.arrival_time = arrival_time;
  this.arrival_gate = arrival_gate;
  this.flightDuration = getDifference(arrival_time, dep_time);
}

function getDifference(time1, time2) {
  var t1 = new Date(time1);
  var t2 = new Date(time2);
  var diff = t1.getTime() - t2.getTime();
  return diff;
}

var flight1 = new Flight(
  "Delta",
  1234,
  "Seattle, WA",
  "New York, New York",
  "April 5, 2017 03:09:00",
  "April 5, 2017 04:36:00",
  "Gate A9"
);

var flight2 = new Flight(
  "Virgin",
  1508,
  "Seattle, WA",
  "San Diego, California",
  "April 5, 2017 03:34:00",
  "April 5, 2017 05:06:00",
  "Gate B2"
);

var flight3 = new Flight(
  "Alaska Airlines",
  108,
  "Seattle, WA",
  "Anchorage, AK",
  "April 5, 2017 03:04:00",
  "April 5, 2017 06:36:00",
  "Gate C7"
);

var flight4 = new Flight(
  "Southwest",
  382,
  "Seattle, WA",
  "Chicago, IL",
  "April 5, 2017 03:07:00",
  "April 5, 2017 07:36:00",
  "Gate A1"
);

var flight5 = new Flight(
  "ABX Air",
  1917,
  "Seattle, WA",
  "Sacramento, CA",
  "April 5, 2017 03:55:00",
  "April 5, 2017 07:36:00",
  "Gate B4"
);

var flights = [flight1, flight2, flight3, flight4, flight5];

var el = document.getElementById("flightData");

for (i = 0; i < flights.length; i++) {
  var hours =
    (flights[i]["flightDuration"] - flights[i]["flightDuration"] % 3600000) /
    3600000;
  var timeRemain = flights[i]["flightDuration"] - hours * 3600000;
  var minutes = timeRemain / 60000;
  var currentFlightDuration = hours + "hrs " + minutes + "min ";

  el.innerHTML +=
    "<tr><td>" +
    flights[i]["airline"] +
    "</td><td>" +
    flights[i]["number"] +
    "</td><td>" +
    flights[i]["origin"] +
    "</td><td>" +
    flights[i]["destination"] +
    "</td><td>" +
    flights[i]["dep_time"] +
    "</td><td>" +
    flights[i]["arrival_time"] +
    "</td><td>" +
    currentFlightDuration +
    "</td><td>" +
    flights[i]["arrival_gate"] +
    "</td></tr>";
}
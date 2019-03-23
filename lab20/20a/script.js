$(document).ready(function() {
  var socket = new WebSocket('wss://ws-feed.gdax.com');
  socket.onopen = function() {
    var msg = {
      "type": "subscribe",
      "product_id": "BTC-USD"
    };
    socket.send(JSON.stringify(msg));
    $('#status').html("Connected - <i>Waiting For Trades</i>").css("color", "#1E8F1E");
  };

  socket.onmessage = function(event) {
    var msg = JSON.parse(event.data);
    if (msg['type'] == "match") {
      var price = parseFloat(msg['price']).toFixed(2);
      var sign;
      if (msg['side'] == "sell") {
        sign = "➚\t";
      } else {
        sign = "  ➘\t";
      }
      var time = new Date();
      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds();
      if (hours > 12) {
        hours = hours - 12;
      } else if (hours == 0) {
        hours = 12;
      }
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      var fulltime = hours + ":" + minutes + ":" + seconds;
      var side = '"' + msg['side'] + '"';
      var price_list_item = "<li class=" + side + "><p class='tick'>" + sign + " " + price + " - " + fulltime + "</p></li>";

      $('#ticker').prepend(price_list_item);
    }
  };

  function sendText() {
    var msg = {
      "type": "subscribe",
      "product_id": "BTC-USD"
    };
    socket.send(JSON.stringify(msg));
  };
});
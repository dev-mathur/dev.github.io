var count = 0;
window.onload = function() {
  setInterval(function() {
    count++;
    document.getElementById("i").innerHTML = count;
  }, 3000);
};
const base_url = "https://api.weather.gov/stations/";
const endpoint = "/observations/latest";

// weather update button click
$("#getwx").on("click", function(e) {
  var mystation = $("input").val();
  var myurl = base_url + mystation + endpoint;
  $("input#my-url").val(myurl);

  // clear out any previous data
  $("ul li").each(function() {
    $("ul").empty();
    // enter code to clear each li
  });

  console.log("Cleared Elements of UL");

  // execute AJAX call to get and render data
  $.ajax({
    url: myurl,
    dataType: "json",
    success: function(data) {
      console.log("try");
      var tempC = data["properties"]["temperature"].value.toFixed(1);
      var tempF = (tempC * 9 / 5 + 32).toFixed(1);

      // get wind info and convert m/s to kts
      var windSpeed = data["properties"]["windSpeed"].value.toFixed(1);
      var windSpeedkts = (windSpeed * 1.94384).toFixed(1);
      var windDirection = data["properties"]["windDirection"].value.toFixed(1);
      var windSpeed = data["properties"]["windSpeed"].value.toFixed(1);
      var Humidity = data["properties"]["relativeHumidity"].value.toFixed(1);
      var rawMessage = data["properties"]["rawMessage"];
      var icon = data["properties"]["icon"];
      var description = data["properties"]["textDescription"];

      // uncomment this if you want to dump full JSON to textarea
      var myJSON = JSON.stringify(data);
      $("textarea").val(myJSON);

      var str = "<li>" + rawMessage + "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      var str =
        "<li>Current temperature: " + tempC + "C " + tempF + "F" + "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      var str = "<li>Humidity : " + Humidity + " %" + "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      var str =
        "<li>Current Wind: " +
        windDirection +
        " degress at " +
        " " +
        windSpeedkts +
        "Kts" +
        "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      var str = {
        url: "https://api.weather.gov/icons/land/night/fog?size=medium",
        textDescription: "Fog/Mist"
      };
      $("ul").attr(str);
      $("ul li:last").attr("class", "list-group-item");

      var str = "<li> <img src='" + icon + " '>" + "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      var str = "<li>Currently: " + description + "</li>";
      $("ul").append(str);
      $("ul li:last").attr("class", "list-group-item");

      // add additional code here for the Wind direction, speed, weather contitions and icon image
    }
  });
});
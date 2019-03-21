var movie_cell_template =
  "<div class='col-sm-3 movie-cell'><div class='movie-poster'><img></div><div class='movie-title'></div></div>";
var search_term = "";
var search_base_url = "https://api.themoviedb.org/3/search/movie?";
var poster_base_url = "https://image.tmdb.org/t/p/w500";
var search_api_url; // use this string to build your search from search_url and search_term

// use this function to concantenate (build) your search url
function getSearchUrl(queryString) {
  var url = queryString;
  return url;
}

// use this function to concantenate (build) your poster url
function getPosterUrl(imageString) {
  var url = poster_base_url + imageString;
  return url;
}

// Shorthand for $( document ).ready()

$(function() {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ========================================================
  // TASK 1: key input processing / defines the search term in search bar to be used in task 2
  // ========================================================
  $("input").on({
    // keydown - backspace or delete processing only
    keydown: function(e) {
      var code = e.which;
      console.log("KEYDOWN-key:" + code);
      if (code == 8) {
        $("#movie_grid").empty();
      }
    },
    // keypress - everything else processing
    keypress: function(e) {
      var code = e.which;
      var str = $("input").val();
      console.log("KEYPRESS-key:" + code);
      if (code == 13) {
        api_search();
      }
    }
  });
  // ========================================================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ========================================================
  // TASK 2:  process search on omdb / pulls in the data from the database using ajax and makes it usable through json
  // ========================================================
  $("#get-movie-btn").on("click", api_search);

  // Do the actual search in this function
  function api_search(e) {
    // prepare search string url => search_api_url

    var str = $("input").val();
    var query_url = getSearchUrl(str);
    var search_api_url =
      "https://api.themoviedb.org/3/search/movie?api_key=a706f5a1d524a2c7d54e77394dfbeee7&language=en-US&query=" +
      query_url;

    $.ajax({
      url: search_api_url,
      datatype: "json",
      success: function(parsed_json) {
        
        render(parsed_json);
      },
      cache: false
    });
  }
  // ========================================================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // ========================================================
  // TASK 3: perform all movie grid rendering operations / displays results
  // ========================================================
  function render(parsed_json) {
    /*appending here 
    $('.row').append(title);
      console.log(title);*/

    // get movie data from search results data
    for (var i = 0; i < 8; i++) {
      var poster = parsed_json["results"][i]["poster_path"];
      var posterImg = getPosterUrl(poster);
      var title = parsed_json["results"][i]["title"];

      // select the movie grid and dump the sample html (if any)
      //N/A
      // every group of 4 gets their own class=row
      if (i % 4 === 0) {
      }

      // utilize the movie_cell_template to append, then add data from
      $("#movie-grid").append(movie_cell_template);
      // movie data results (parsed JSON)
      var movie_cell_template =
        "<div class='col-sm-3 movie-cell'><div class='movie-poster'><img src='" +
        posterImg +
        "'></div><div class='movie-title'>" +
        title +
        "</div></div>";
    }
  }
  // ========================================================
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
});

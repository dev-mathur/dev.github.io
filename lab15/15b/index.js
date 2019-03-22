var universitySports = [
  {
    logo:
      " <img src ='https://cdn.bleacherreport.net/images/team_logos/328x328/washington_state_football.png' width = '32' height= '32'/>",
    university: "Washington State",
    conference: "7-1",
    overall: "10-1",
    lastGame: "W 69-28 ARIZ"
  },
  {
    logo:
      " <img src ='http://x.pac-12.com/sites/default/files/styles/thumbnail/public/washington-logo_0__1438812441.png' width = '32' height= '32'/>",
    university: "University of Washington",
    conference: "6-2",
    overall: "8-3",
    lastGame: "W 42-23 ORST"
  },
  {
    logo:
      " <img src ='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/2000px-Stanford_Cardinal_logo.svg.png' width = '32' height= '32'/>",
    university: "Stanford",
    conference: "4-3",
    overall: "6-4",
    lastGame: "W 48-17 ORST"
  },
  {
    logo:
      "<img src ='http://cdn.bleacherreport.net/images/team_logos/328x328/oregon_ducks.png' width = '32' height= '32'/>",
    university: "University of Oregon",
    conference: "4-4",
    overall: "7-4",
    lastGame: "W 31-29 ASU"
  },
  {
    logo:
      " <img src ='http://x.pac-12.com/sites/default/files/styles/thumbnail/public/cal_yellow_lg_2017.png' width = '32' height= '32'/>",
    university: "University of California",
    conference: "3-4",
    overall: "6-4",
    lastGame: "W 15-14 USC"
  },
  {
    logo:
      " <img src ='http://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png' width = '32' height= '32'/>",
    university: "Oregon State",
    conference: "1-7",
    overall: "2-9",
    lastGame: "L 23-42 WASH"
  }
];

function myFunction() {
  var listItems = document.querySelectorAll("li");
  if (listItems.length > 0) {
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].innerHTML = rowGenerator(universitySports[i]);
    }
  }
}

function rowGenerator(x) {
  var str = "";
  str += "<div class='row'>";
  str +=
    "<div class='col-sm-3 univerity'>" + x.logo + " " + x.university + "</div>";
  str += "<div class='col-sm-4 conference'>" + x.conference + "</div>";
  str += "<div class='col-sm-2 overall'>" + x.overall + "</div>";
  str += "<div class='col-sm-3 lastGame'>" + x.lastGame + "</div>";
  str += "</div>";
  return str;
}

$(document).ready(function (){ 
    $(".panel").css("border", "5px dashed red"); //add a 5px red dashed boarder around the panel div
    
    $(".panel").css('padding', '10px'); // provide a 10 pixel padding around all of the divs
    
    $("div").css("padding", "3px"); // set all div's padding to 3px
    
    $(".panel > div").css("background", "gray"); // set all divs in the panel to background gray
    
    $(".cat").css("color", "green"); //set all divs of class cat to green
    
    $(".dog").css("color", "red"); // set all divs of class dog to red
    
    $("#lab").css("border", "1px solid yellow"); // set the id of lab to a 1px solid yellow border
    
    $(".dog:last-child").css("background-color", "yellow");// set the last div with class dog to background yellow
    
    $("#calico").css({
        width: "50%",
        background: "green",
        color: "white"
    }); // set the calico cat's width to 50%,
    // background to green and color to white
    
    });
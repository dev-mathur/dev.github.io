$(document).ready(function() {
  
  $("li").css("margin", "10px");
  $("li").attr("id", "uw");
  $("#p1 li").click(function() {
   console.log("$(this):" + $(this));
    // the li makes them go one by one
 //fade out
    $(this).fadeOut(2000, function(){ 
      console.log("fadeout complete!");
    });  
  });
//fade in
  $('#p2 li').click(function(){
     $(this).hide();
     $(this).fadeIn(1000, function(){
       console.log("fadeIn complete");
     });
  });
//fade to  
  $('#p3 li').click(function() {
    $(this).fadeTo(200, .7, function(){
      console.log("fadetTo complete");
    });
  });
// fade with toggle 
  $('#p4 li').click(function() {
    $(this).fadeToggle('easeOutBounce', function(){
      console.log("fadeToggle complete");
    });
  });
  
});
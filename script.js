// Changes navbar color
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

$(document).ready(function(){
	$("p").mouseover(function(){
	  $("p").css("color", "red");
	});
	$("p").mouseout(function(){
	  $("p").css("color", "black");
	});
  });

  $(document).ready(function(){
	$("h1").mouseover(function(){
	  $("h1").css("color", "green");
	});
	$("h1").mouseout(function(){
	  $("h1").css("color", "black");
	});
  });

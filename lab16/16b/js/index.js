var todos = document.querySelector("ul");
var lis = document.querySelectorAll("li"); for(var i = 0; i < lis.length; i++){
   console.log(this.id);
  lis[i].addEventListener("mouseover", function(){       console.log("mouseover");   
$(this).attr('id', 'selected'); 
  $(this).text('Focused');                                                  });
   lis[i].addEventListener("mouseout", function(){     console.log("mouseout");  
   $(this).attr('id', 'deselected'); 
   $(this).text('Not Focused');                                                  });
   lis[i].addEventListener("click", function(){       console.log("clicked");    }); }
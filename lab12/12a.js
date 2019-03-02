var radius1 = 10;
var radius2 = 20;
var radius3 = 30;

function calcCircleGeometries(radius) {
 const pi = Math.PI;
 var area = pi * radius * radius;  
 var circumference = 2 * pi * radius;
 var diameter = 2 * radius; 
 var geometries = [area, circumference, diameter];
 return "<tr><td>"+ radius + "</td>" + "<td>" + area +"</td>" + "<td>" + circumference + "</td>" + "<td>" + diameter +"</td></tr>";}
document.getElementById("radius1").innerHTML= calcCircleGeometries(radius1);
document.getElementById("radius2").innerHTML= calcCircleGeometries(radius2);
document.getElementById("radius3").innerHTML= calcCircleGeometries(radius3);
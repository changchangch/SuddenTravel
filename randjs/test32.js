var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/10.jpg', './花海/11.jpg', './花海/12.jpg'];
var imgurlind = ['./花海html/FushoushanFarm.html', './花海html/ShilinResidence.html', './花海html/ShilinResidence.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
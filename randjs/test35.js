var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/07.jpg', './花海/08.jpg', './花海/09.jpg'];
var imgurlind = ['./花海html/Xinshe.html', './花海html/FushoushanFarm.html', './花海html/FushoushanFarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
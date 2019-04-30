var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/01.jpg', './花海/02.jpg', './花海/03.jpg'];
var imgurlind = ['./花海html/wulingfarm.html', './花海html/wulingfarm.html', './花海html/wulingfarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
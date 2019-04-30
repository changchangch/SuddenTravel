var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/04.jpg', './花海/05.jpg', './花海/06.jpg'];
var imgurlind = ['./花海html/Xinshe.html', './花海html/Xinshe.html', './花海html/Xinshe.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
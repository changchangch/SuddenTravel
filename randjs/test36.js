var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/13.jpg', './花海/14.jpg', './花海/15.jpg'];
var imgurlind = ['./花海html/Yangmingshan.html', './花海html/Yangmingshan.html', './花海html/Guandu.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
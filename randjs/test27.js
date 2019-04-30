var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/16.jpg', './小火車/17.jpg', './小火車/18.jpg'];
var imgurlind = ['./小火車html/AlishanForestRailway.html', './小火車html/AlishanForestRailway.html', './小火車html/Taoyuan.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
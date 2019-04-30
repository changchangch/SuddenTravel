var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/22.jpg', './小火車/23.jpg', './小火車/24.jpg'];
var imgurlind = ['./小火車html/HsinchuHexingStation.html', './小火車html/KaohsiungXinyingSugarRefinery.html', './小火車html/ChanghuaXihuSugarRefinery.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/04.jpg', './小火車/05.jpg', './小火車/06.jpg'];
var imgurlind = ['./小火車html/NeiwanLine.html', './小火車html/NeiwanLine.html', './小火車html/TaipingshanBongBongTrain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
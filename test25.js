var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./小火車/07.jpg', './小火車/08.jpg', './小火車/09.jpg'];
var imgurlind = ['./小火車html/TaipingshanBongBongTrain.html', './小火車html/HotelCOZZI.html', './小火車html/HotelCOZZI.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
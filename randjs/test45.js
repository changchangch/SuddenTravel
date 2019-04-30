var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/07.jpg', './人造建築物/08.jpg', './人造建築物/09.jpg'];
var imgurlind = ['./人造建築物html/TaichungQingshui.html', './人造建築物html/TaichungTourism.html', './人造建築物html/TaichungPandingChurch.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
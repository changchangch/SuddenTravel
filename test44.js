var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/04.jpg', './人造建築物/05.jpg', './人造建築物/06.jpg'];
var imgurlind = ['./人造建築物html/taichungsea.html', './人造建築物html/NationalTaichungTheater.html', './人造建築物html/RainbowVillage.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
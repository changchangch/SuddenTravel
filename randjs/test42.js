var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/10.jpg', './人造建築物/11.jpg', './人造建築物/12.jpg'];
var imgurlind = ['./人造建築物html/Taipei101.html', './人造建築物html/Taipei101.html', './人造建築物html/SongshanCulturalandCreativePark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./人造建築物/19.jpg', './人造建築物/20.jpg', './人造建築物/21.jpg'];
var imgurlind = ['./人造建築物html/TainanChimeiMuseum.html', './人造建築物html/TainanImmigration.html', './人造建築物html/TainanHolland.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
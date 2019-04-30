var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/16.jpg', './山/17.jpg', './山/18.jpg'];
var imgurlind = ['./山html/BaishihMountain.html', './山html/HehuanMountain.html', './山html/ChingjingFarm.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
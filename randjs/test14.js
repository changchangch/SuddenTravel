var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/04.jpg', './山/05.jpg', './山/06.jpg'];
var imgurlind = ['./山html/CingtiangangGrassland.html', './山html/BiTouCape.html', './山html/SiaoguanyinMountain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
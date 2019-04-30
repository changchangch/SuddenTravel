var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/22.jpg', './山/23.jpg', './山/24.jpg'];
var imgurlind = ['./山html/zoglan.html', './山html/HutouMountain.html', './山html/TaoyuanGuanyin.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
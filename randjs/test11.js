var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/01.jpg', './山/02.jpg', './山/03.jpg'];
var imgurlind = ['./山html/TaichungWaipu.html', './山html/wulingfarm.html', './山html/TatunVolcano.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/19.jpg', './山/20.jpg', './山/21.jpg'];
var imgurlind = ['./山html/AOWANDA.html', './山html/Huoyanshan.html', './山html/zoglan.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
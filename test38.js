var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./花海/22.jpg', './花海/23.jpg', './花海/24.jpg'];
var imgurlind = ['./花海html/KaohsiungQiaotou.html', './花海html/YunlinGukeng.html', './花海html/ChiayiTaibao.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
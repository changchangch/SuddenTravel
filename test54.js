var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./摩天輪/10.jpg', './摩天輪/13.jpg', './摩天輪/16.jpg'];
var imgurlind = ['./摩天輪html/EDAWorld.html', './摩天輪html/TCAP.html', './摩天輪html/WindowonChina.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
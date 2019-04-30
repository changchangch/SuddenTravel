var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/01.jpg', './海邊/02.jpg', './海邊/35.jpg', './海邊/04.jpg'];
var imgurlind = ['./海邊html/Liuqiu.html', './海邊html/NeipiBeach.html', './海邊html/KentingBaishawan.html', './海邊html/Gaomei.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
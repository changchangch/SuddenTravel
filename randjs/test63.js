var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/26.jpg', './海邊/10.jpg', './海邊/28.jpg', './海邊/29.jpg'];
var imgurlind = ['./海邊html/YinyangSea.html', './海邊html/Fenniaolin.html', './海邊html/HsinchuHaishanFishingPort.html', './海邊html/ChiayiDongshihFishingPort.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
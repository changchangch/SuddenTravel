var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/19.jpg', './海邊/20.jpg','./海邊/09.jpg', './海邊/22.jpg'];
var imgurlind = ['./海邊html/MatsuSeaofStars.html', './海邊html/KaohsiungSizihwan.html','./海邊html/Fenniaolin.html', './海邊html/TamshuiFishermansWharf.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
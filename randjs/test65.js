var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/21.jpg', './海邊/27.jpg', './海邊/11.jpg', './海邊/23.jpg'];
var imgurlind = ['./海邊html/KaohsiungSizihwan.html', './海邊html/HsinchuNanliaoHarbor.html', './海邊html/HualienChihsingtanBeach.html', './海邊html/TamshuiFishermansWharf.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
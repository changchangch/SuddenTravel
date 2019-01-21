var imgnumber = Math.floor(Math.random()*12);
var imgurl = ['./海邊/縮小/01.jpg', './海邊/縮小/02.jpg', './海邊/縮小/03.jpg', './海邊/縮小/04.jpg', './海邊/縮小/05.jpg', './海邊/縮小/06.jpg',
			  './海邊/縮小/07.jpg', './海邊/縮小/08.jpg', './海邊/縮小/09.jpg', './海邊/縮小/10.jpg', './海邊/縮小/11.jpg', './海邊/縮小/12.jpg'];
var imgurlind = ['./海邊html/Liuqiu.html', './海邊html/NeipiBeach.html', './海邊html/NeipiBeach.html', './海邊html/Gaomei.html', './海邊html/Gaomei.html', './海邊html/Torik(Duli).html',
				 './海邊html/TaitungJinzun.html', './海邊html/Fenniaolin.html', './海邊html/Fenniaolin.html', './海邊html/Fenniaolin.html', './海邊html/HualienChihsingtanBeach.html', './海邊html/HualienChihsingtanBeach.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');
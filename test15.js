var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/07.jpg', './山/08.jpg', './山/09.jpg'];
var imgurlind = ['./山html/MenghuanPond.html', './山html/mongmonggu.html', './山html/KeeLungMountain.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
var imgnumber = Math.floor(Math.random()*4);
var imgurl = ['./海邊/30.jpg', './海邊/05.jpg', './海邊/25.jpg', './海邊/33.jpg'];
var imgurlind = ['./海邊html/ChanghuaWangongFishingPort.html', './海邊html/Gaomei.html', './海邊html/JinshanSecretBeach.html', './海邊html/PenghuQimeiTwin-HeartsStoneWeir.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
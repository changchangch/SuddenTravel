var imgnumber = Math.floor(Math.random()*11);
var imgurl = ['./海邊/縮小/26.jpg', './海邊/縮小/27.jpg', './海邊/縮小/28.jpg', './海邊/縮小/29.jpg', './海邊/縮小/30.jpg', './海邊/縮小/31.jpg',
			  './海邊/縮小/32.jpg', './海邊/縮小/33.jpg', './海邊/縮小/34.jpg', './海邊/縮小/35.jpg', './海邊/縮小/36.jpg'];
var imgurlind = ['./海邊html/YinyangSea.html', './海邊html/HsinchuNanliaoHarbor.html', './海邊html/HsinchuHaishanFishingPort.html', './海邊html/ChiayiDongshihFishingPort.html', './海邊html/ChanghuaWangongFishingPort.html', './海邊html/PenghuShanshuiBeach.html',
				 './海邊html/PenghuJibeiyu(Shawei).html', './海邊html/PenghuQimeiTwin-HeartsStoneWeir.html', './海邊html/KentingBeach.html', './海邊html/KentingBaishawan.html', './海邊html/KentingSouthBeach.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');
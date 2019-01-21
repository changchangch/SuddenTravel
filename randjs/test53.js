var imgnumber = Math.floor(Math.random()*9);
var imgurl = ['./摩天輪/縮小/19.jpg', './摩天輪/縮小/20.jpg', './摩天輪/縮小/21.jpg', './摩天輪/縮小/22.jpg', './摩天輪/縮小/23.jpg', './摩天輪/縮小/24.jpg',
			  './摩天輪/縮小/25.jpg', './摩天輪/縮小/26.jpg', './摩天輪/縮小/27.jpg'];
var imgurlind = ['./摩天輪html/DreamMall.html', './摩天輪html/TAROKOPARK.html', './摩天輪html/TAROKOPARK.html', './摩天輪html/TAROKOPARK.html', './摩天輪html/HualienFargloryOceanPark.html', './摩天輪html/HualienFargloryOceanPark.html',
				 './摩天輪html/MitsuiOutletPark.html', './摩天輪html/MitsuiOutletPark.html', './摩天輪html/MitsuiOutletPark.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'">'+'</a>');
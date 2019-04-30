var imgnumber = Math.floor(Math.random()*3);
var imgurl = ['./山/10.jpg', './山/11.jpg', './山/12.jpg'];
var imgurlind = ['./山html/Taipingshan.html', './山html/TaoyuanValley.html', './山html/CaolingHistoricTrail.html']
document.write('<a href="'+imgurlind[imgnumber]+'" target="_blank">'+'<img src="'+imgurl[imgnumber]+'" style="max-width: 98%; margin: auto;">'+'</a>');
//sidebar
let sidebarHTML = '<div align="center"><img src="../img/titles/menu.gif"></div> <a href="' + 'index.html">Home</a><br>' + 
'<a href="' + 'about.html">About</a><br>' +
'<a href="' + './zonelets/index.html">Journal</a><br>' +
'<a href="' + 'gallery.html">Gallery</a><br>' + 
'<a href="' + 'writings.html">Writings</a><br>' +
'<a href="' + 'projects.html">Projects</a><br>' +
'<a href="' + 'downloads.html">Downloads</a><br>' +
'<a href="https://ko-fi.com/ifelse95">Donate?</a><br><br><img src="../img/ifelse95.gif" title="feel free to put my button on your site! just save it to your computer first."><br><br><script src="https://status.cafe/current-status.js?name=ifelse95"></script>' ;

//sites sidebar
let sitesHTML = '<div align="center"><img src="../img/titles/cool_sites.gif"></div><br><marquee scrollamount="5"><div align="center"><a href="http://wertercatt.com/"><img src="./img/buttons/ban_wertercatt.png" title="wertercatt.com"></a><a href="https://sweethard666.neocities.org/"><img src="./img/buttons/sweethard666type.gif" title="sweethard666"></a><a href="https://dollzrevival.neocities.org/"><img src="./img/buttons/DZRButton1.gif" title="Dollz Revival"></a></marquee><br><marquee scrollamount="5"><a href="http://jingloria.wertercatt.com/">Jingloria</a></marquee><br><sub><sub>email me if you would like to see your site here :3</sub></sub></div>' ;


//footer
let footerHTML = '<hr><br><center><p>Established November 12, 2020</p><p><a href="./credits.html">credits</a> | <a href="mailto:ifelse95@gmail.com">contact</a> | <a href="./guestbook.html">guestbook</a></p></center>' ;


//element stuff
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML = sidebarHTML;
}

if (document.getElementById("sites")) {
  document.getElementById("sites").innerHTML = sitesHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}
//sidebar
let sidebarHTML = '<h2>MENU</h2><ul> <li><a href="' + 'index.html">Home</a></li>' + 
'<li><a href="' + 'about.html">About</a></li>' +
'<li><a href="' + './zonelets/index.html">Journal</a></li>' +
'<li><a href="' + 'gallery.html">Gallery</a></li>' + 
'<li><a href="' + 'writings.html">Writings</a></li>' +
'<li><a href="' + 'projects.html">Projects</a></li>' +
'<li><a href="' + 'downloads.html">Downloads</a></li>' +
'<li><a href="https://ko-fi.com/ifelse95">Donate?</a></li><br><img src="img/ifelse95.gif" title="feel free to put my button on your site! just save it to your computer first.">' ;

//sites sidebar
let sitesHTML = '<h2>COOL SITES</h2><div align="center"><p><a href="http://wertercatt.com/"><img src="./img/buttons/ban_wertercatt.png" title="wertercatt.com"></a></p><p><a href="http://jingloria.wertercatt.com/">Jingloria</a></p><p><a href="https://sweethard666.neocities.org/"><img src="./img/buttons/sweethard666type.gif" title="sweethard666"></a></p><p><a href="https://dollzrevival.neocities.org/"><img src="./img/buttons/DZRButton1.gif" title="Dollz Revival"></a></p><sub><sub>email me if you would like to see your site here :3</sub></sub></div>' ;


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
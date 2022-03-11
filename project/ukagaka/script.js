//sidebar
let sidebarHTML = '<h2>MENU</h2><ul> <li><a href="' + '../../index.html">Home</a></li>' + 
'<li><a href="' + '../../about.html">About + Contact</a></li>' +
'<li><a href="' + '../../zonelets/index.html">Journal</a></li>' +
'<li><a href="' + '../../gallery.html">Gallery</a></li>' + 
'<li><a href="' + '../../writings.html">Writings</a></li>' +
'<li><a href="' + '../../projects.html">Projects</a></li>' +
'<li><a href="https://ko-fi.com/ifelse95">Donate?</a></li><br><img src="../../img/ifelse95.gif" title="feel free to put my button on your site! just save it to your computer first.">' ;



//footer
let footerHTML = '<hr><br><center><p>Established November 12, 2020</p><p><a href="./credits.html">credits</a> | <a href="mailto:ifelse95@gmail.com">contact</a> | <a href="./guestbook.html">guestbook</a></p></center>' ;


//element stuff
if (document.getElementById("sidebar")) {
  document.getElementById("sidebar").innerHTML = sidebarHTML;
}

if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}